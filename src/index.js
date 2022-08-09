import ToolboxIcon from './svg/toolbox.svg';
import './index.css';
import Uploader from './uploader';

/**
 * Timeout when loader should be removed
 */
const LOADER_DELAY = 500;

/**
 * @typedef {object} PersonalityToolData
 * @description Personality Tool's input and output data format
 * @property {string} name — person's name
 * @property {string} position - person's pisition
 * @property {string} quote - quote text
 * @property {Object|null} photo - person's photo data
 * @property {string|null} design - quote design key
 */

/**
 * @typedef {object} QuoteDesign
 * @description QuoteDesign's design type
 * @property {string} key — design key
 * @property {string} label - design label
 * @property {string} icon - inline svg
 */

/**
 * @typedef {object} PersonalityConfig
 * @description Config supported by Tool
 * @property {string} endpoint - image file upload url
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 * @property {string} namePlaceholder - placeholder for name field
 * @property {string} quotePlaceholder - placeholder for quote field
 * @property {string} positionPlaceholder - placeholder for position field
 * @property {string} personasPlaceholder - placeholder for personas select
 * @property {string} selectPlaceholder - placeholder select
 * @property {Array<QuoteDesign>} personas - list of available personas
 * @property {Array<QuoteDesign>} designs - list of available designs
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */

/**
 * Persona Quote Tool for the Editor.js
 */
export default class PersonaQuote {
  /**
   * @param {PersonalityToolData} data - Tool's data
   * @param {PersonalityConfig} config - Tool's config
   * @param {API} api - Editor.js API
   */
  constructor({ data, config, api }) {
    this.api = api;

    this.nodes = {
      wrapper: null,
      photo: null,
      name: null,
      quote: null,
      position: null,
      selectDefault: null,
      personasPlaceholder: null,
      personasSelect: null
    };

    this.config = {
      endpoint: config.endpoint || '',
      field: config.field || 'image',
      types: config.types || 'image/*',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      namePlaceholder: config.namePlaceholder || 'Name',
      quotePlaceholder: config.quotePlaceholder || 'Quote',
      positionPlaceholder: config.positionPlaceholder || 'Position',
      designs: config.designs || [],
      personasPlaceholder: config.personasPlaceholder || 'Personas',
      personas: config.personas || [],
      selectPlaceholder: config.selectPlaceholder || 'Select'
    };

    /**
     * Set saved state
     */
    this.data = Object.assign({}, data, {
      design: data.design || (config.designs.length ? config.designs[0].key : null)
    });

    /**
     * Module for image files uploading
     */
    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error)
    });
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: ToolboxIcon,
      title: 'Persona Quote'
    };
  }

  /**
   * Empty Quote is not empty Block
   *
   * @public
   * @returns {boolean}
   */
  static get contentless() {
    return true;
  }

  /**
   * Allow to press Enter inside the Quote
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * File uploading callback
   * @param {UploadResponseFormat} response
   */
  onUpload(response) {
    const { body: { success, file } } = response;

    if (success && file && file.url) {
      this.data.photo = file;

      this.showFullImage();
    }
  }

  /**
   * On success: remove loader and show full image
   */
  showFullImage() {
    setTimeout(() => {
      this.nodes.photo.classList.remove(this.CSS.loader);
      this.nodes.photo.style.background = `url('${this.data.photo.url}') center center / contain no-repeat`;
    }, LOADER_DELAY);
  }

  /**
   * On fail: remove loader and reveal default image placeholder
   */
  stopLoading() {
    setTimeout(() => {
      this.nodes.photo.classList.remove(this.CSS.loader);
      this.nodes.photo.removeAttribute('style');
    }, LOADER_DELAY);
  }

  /**
   * Show loader when file upload started
   */
  addLoader() {
    this.nodes.photo.style.background = 'none';
    this.nodes.photo.classList.add(this.CSS.loader);
  }

  /**
   * If file uploading failed, remove loader and show notification
   * @param {string} errorMessage -  error message
   */
  uploadingFailed(errorMessage) {
    this.stopLoading();

    this.api.notifier.show({
      message: errorMessage,
      style: 'error'
    });
  }

  /**
   * Tool's CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      loader: this.api.styles.loader,

      /**
       * Tool's classes
       */
      wrapper: 'cdx-persona-quote',
      card: 'cdx-persona-quote__card',
      fields: 'cdx-persona-quote__fields',
      photo: 'cdx-persona-quote__photo',
      name: 'cdx-persona-quote__name',
      quote: 'cdx-persona-quote__quote',
      position: 'cdx-persona-quote__position',
      personasPlaceholder: 'cdx-persona-personas__placeholder',
      personasSelect: 'cdx-persona-personas__select',

      settingsWrapper: 'cdx-persona-quote__settings',
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive
    };
  }

  /**
   * Return Block data
   * @param {HTMLElement} toolsContent
   * @return {PersonalityToolData}
   */
  save(toolsContent) {
    const name = (this.nodes.name.textContent || '').trim();
    const position = (this.nodes.position.textContent || '').trim();
    const quote = (this.nodes.quote.innerHTML || '').trim();
    const design = this.data.design;

    Object.assign(this.data, { name, position, quote, design });

    return this.data;
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    const defaultConfig = {
      br: false,
      b: false,
      i: false,
      a: false
    };

    return {
      name: defaultConfig,
      position: defaultConfig,
      quote: Object.assign({}, defaultConfig, {
        br: true
      })
    };
  }

  /**
   * Create wrapper for Tool`s settings buttons:
   *
   * @returns {HTMLElement}
   */
  renderSettings() {
    const wrapper = this.make('div', this.CSS.settingsWrapper);

    this.config.designs.map(tune => {
      const el = this.make('div', this.CSS.settingsButton, {
        innerHTML: tune.icon,
        title: tune.label
      });

      el.dataset.id = tune.key;
      el.classList.toggle(this.CSS.settingsButtonActive, tune.key === this.data.design);

      wrapper.appendChild(el);

      return el;
    }).forEach((element, index, elements) => {
      element.addEventListener('click', () => {
        this._toggleTune(this.config.designs[index].key);

        elements.forEach((el, i) => {
          const { key } = this.config.designs[i];

          el.classList.toggle(this.CSS.settingsButtonActive, key === this.data.design);
        });
      });
    });

    return wrapper;
  };

  /**
   * Toggle quote`s design
   *
   * @param {string} tune - design
   * @private
   */
  _toggleTune(tune) {
    this.data.design = tune;
  }

  /**
   * Renders Block content
   * @return {HTMLDivElement}
   */
  render() {
    const { name, position, quote, photo } = this.data;

    this.nodes.wrapper = this.make('div', [this.CSS.baseClass, this.CSS.wrapper]);

    // Name
    this.nodes.name = this.make('div', this.CSS.name, {
      contentEditable: true
    });
    this.nodes.name.dataset.placeholder = this.config.namePlaceholder;

    if (name) {
      this.nodes.name.textContent = name;
    }

    // Position
    this.nodes.position = this.make('div', this.CSS.position, {
      contentEditable: true
    });
    this.nodes.position.dataset.placeholder = this.config.positionPlaceholder;

    if (position) {
      this.nodes.position.textContent = position;
    }

    // Quote
    this.nodes.quote = this.make('div', [this.CSS.input, this.CSS.quote], {
      contentEditable: true,
      innerHTML: quote || ''
    });

    this.nodes.quote.dataset.placeholder = this.config.quotePlaceholder;

    // Photo
    this.nodes.photo = this.make('div', this.CSS.photo);

    console.log(photo);
    console.log(this.data);
    if (photo) {
      this.nodes.photo.style.background = `url('${photo.url}') center center / contain no-repeat`;
    }

    this.nodes.photo.addEventListener('click', () => {
      this.uploader.uploadSelectedFile({
        onPreview: () => {
          this.addLoader();
        }
      });
    });

    const fieldsWrapper = this.make('div', this.CSS.fields);

    fieldsWrapper.appendChild(this.nodes.name);
    fieldsWrapper.appendChild(this.nodes.position);

    const cardWrapper = this.make('div', this.CSS.card);

    cardWrapper.appendChild(this.nodes.photo);
    cardWrapper.appendChild(fieldsWrapper);

    this.nodes.wrapper.appendChild(cardWrapper);
    this.nodes.wrapper.appendChild(this.nodes.quote);

    this.nodes.personasPlaceholder = this.make('div', this.CSS.personasPlaceholder, {
      contentEditable: false,
      innerHTML: this.config.personasPlaceholder
    });

    this.nodes.wrapper.appendChild(this.nodes.personasPlaceholder);

    this.nodes.personasSelect = this.make('select', this.CSS.personasSelect);

    this.nodes.personasSelect.appendChild(
      this.make('option', null, {
        innerHTML: this.config.selectPlaceholder,
        selected: true,
        hidden: true
      })
    );

    this.config.personas.forEach((element) => {
      const option = this.make('option', null, {
        innerHTML: element.name
      }, {
        'data-photo': element.photo.url,
        'data-name': element.name,
        'data-regalia': element.regalia,
        'data-about': element.about
      });

      this.nodes.personasSelect.appendChild(option);
    });

    const callbackSelect = (option) => {
      this.nodes.photo.style.background = 'url(' + option.dataset.photo + ') center center no-repeat';
      this.nodes.photo.style.backgroundSize = 'cover';

      this.nodes.name.innerHTML = option.dataset.name;
      this.nodes.quote.innerHTML = option.dataset.about;
      this.nodes.position.innerHTML = option.dataset.regalia;

      this.data.photo = {
        url: option.dataset.photo
      };
    };

    this.nodes.personasSelect.addEventListener('change', function () {
      const selectedOption = this.options[this.selectedIndex];

      callbackSelect(selectedOption);
    });

    this.nodes.wrapper.appendChild(this.nodes.personasSelect);

    return this.nodes.wrapper;
  }

  /**
   * Validate saved data
   * @param {PersonalityToolData} savedData - tool's data
   * @returns {boolean} - validation result
   */
  validate(savedData) {
    /**
     * Return false if fields are empty
     */
    return true;
  }

  /**
   * Helper method for elements creation
   * @param tagName
   * @param classNames
   * @param attributes
   * @param data
   * @return {HTMLElement}
   */
  make(tagName, classNames = null, attributes = {}, data = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    for (const dataName in data) {
      el.setAttribute(dataName, data[dataName]);
    }

    return el;
  }
}
