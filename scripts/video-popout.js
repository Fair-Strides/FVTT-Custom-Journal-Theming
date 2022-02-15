/**
 * @typedef {FormApplicationOptions} VideoPopoutOptions
 * @property {boolean} [shareable=false]  Can this image be shared with connected users?
 * @property {string|null} [uuid=null]    The UUID of some related {@link Document}.
 */

/**
 * An Video Popout Application which features a single video in a lightbox style frame.
 * This popout can also be used as a form, allowing the user to edit an video which is being used.
 * Furthermore, this application allows for sharing the display of an image with other connected players.
 * @extends {FormApplication}
 * @param {string} src                    The image URL.
 * @param {ImagePopoutOptions} [options]  Application configuration options.
 * @example
 * // Construct the Application instance
 * const ip = new ImagePopout("path/to/image.jpg", {
 *   title: "My Featured Image",
 *   shareable: true,
 *   uuid: game.actors.getName("My Hero").uuid
 * });
 *
 * // Display the image popout
 * ip.render(true);
 *
 * // Share the image with other connected players
 * ip.share();
 */
export class VideoPopout extends FormApplication {
  constructor(src, options={}) {
    super(src, options);
    this._related = null;
  }

  /* -------------------------------------------- */

  /**
   * @override
   * @returns {ImagePopoutOptions}
   */
	static get defaultOptions() {
	  return foundry.utils.mergeObject(super.defaultOptions, {
      template: "modules/custom-journal/templates/apps/video-popout.html",
      classes: ["video-popout", "dark"],
      editable: false,
      resizable: true,
      shareable: false,
      uuid: null
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get title() {
    return this.isTitleVisible() ? super.title : "";
  }

  /* -------------------------------------------- */

  /** @override */
  async getData(options) {
    return {
      image: this.object,
      options: this.options,
      title: this.title,
      showTitle: this.isTitleVisible()
    }
  }

  /* -------------------------------------------- */

  /**
   * Test whether the title of the image popout should be visible to the user
   * @returns {boolean}
   */
  isTitleVisible() {
    return this._related?.testUserPermission(game.user, "LIMITED") ?? true;
  }

  /* -------------------------------------------- */

  /**
   * Provide a reference to the Document referenced by this popout, if one exists
   * @return {Promise<*>}
   */
  async getRelatedObject() {
    if ( this.options.uuid && !this._related ) {
      this._related = await fromUuid(this.options.uuid);
    }
    return this._related;
  }

  /* -------------------------------------------- */

  /** @override */
  async _render(...args) {
    await this.getRelatedObject();
    this.position = await this.constructor.getPosition(this.object);
    return super._render(...args);
  }

  /* -------------------------------------------- */

  /** @override */
  _getHeaderButtons() {
    let buttons = super._getHeaderButtons();
    if ( game.user.isGM && this.options.shareable ) {
      buttons.unshift({
        label: "JOURNAL.ActionShow",
        class: "share-video",
        icon: "fas fa-eye",
        onclick: ev => this.shareVideo()
      });
    }
    return buttons
  }

  /* -------------------------------------------- */
  /*  Helper Methods
  /* -------------------------------------------- */

  /**
   * Determine the correct position and dimensions for the displayed image
   * @returns {Object}    The positioning object which should be used for rendering
   * @private
   */
  static async getPosition(img) {
    if ( !img ) return { width: 720, height: window.innerHeight * 0.8 };
    const position = {};
    let size;
    try {
      size = await this.getImageSize(img);
    } catch(err) {
      return { width: 720, height: window.innerHeight * 0.8 };
    }
    let wh = window.innerHeight,
        ww = window.innerWidth,
        wr = window.innerWidth / window.innerHeight,
        ir = size[0] / size[1];
    if (ir > wr) {
      position.width = Math.min(size[0] * 2, parseInt(0.95 * ww));
      position.height = parseInt(position.width / ir);
    } else {
      position.height = Math.min(size[1] * 2, parseInt(0.95 * wh));
      position.width = parseInt(position.height * ir);
    }
    position.top = (wh - position.height) / 2;
    position.left = (ww - position.width) / 2;
    return position;
  }

  /* -------------------------------------------- */

  /**
   * Determine the Image dimensions given a certain path
   * @return {Promise<Array.<Number>>}
   */
  static getVideoSize(path) {
    return new Promise((resolve, reject) => {
      let img = document.createElement("video");
      img.onload = function() {
        resolve([this.videoWidth, this.videoHeight]);
      };
      img.onerror = reject;
      img.setAttribute("src", path);
    });
  }

  /* -------------------------------------------- */

  /**
   * Share the displayed image with other connected Users
   */
  shareVideo() {
    game.socket.emit("shareVideo", {
      video: this.object,
      title: this.options.title,
      uuid: this.options.uuid
    });
    ui.notifications.info(game.i18n.format("JOURNAL.ActionShowSuccess", {
      mode: "video",
      title: this.options.title,
      which: "all"
    }));
  }

  /* -------------------------------------------- */

  /**
   * Handle a received request to display an image.
   * @param {string} image
   * @param {string} title
   * @param {string} uuid
   * @return {ImagePopout}
   * @private
   */
  static _handleShareVideo({video, title, uuid}={}) {
    return new ImagePopout(video, {
      title: title,
      uuid: uuid,
      shareable: false,
      editable: false
    }).render(true);
  }
}
