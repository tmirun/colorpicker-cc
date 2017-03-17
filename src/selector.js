/**
 * Selector base class, init the default properties and methods
 */
export default class Selector{

  /**
   * @param {Snap.paper} paper - Snap paper object.
   * @param {object} params - will replace class properties.
   */
  constructor(paper, params){

    if(!paper){
      throw new Error('Selector error: shoult pass snap paper object');
    }

    /** @type {Snap.paper} */
    this.paper = paper;

    /** @type {Snap.paper.g} */
    this.group = this.paper.g();

    /**
     * store created elements
     * @type {Snap.paper.g}
     */
    this.segments = this.paper.g();

    /** @type {number} */
    this.segmentsNum = 1;

    /** @type {Snap.element} */
    this.marker;

    /** @type {number} */
    this._value = 0;
  }

  /** @type {number} */
  get value(){ return this._value;}

  /** @type {number} */
  set value(value){
    this._value = value;
    this.onchange(value);
  }

  /**
   * asign param to selector object
   * @private
   */
  _parseParams( params ){
    Object.assign(this, params);
  }

  /**
   * this method must be overridden by sub class.
   * @abstract
   */
  draw(){}

  /**
   * this method must be overridden by sub class.
   * @abstract
   * @param {number} value
   */
  onchange(value){
    console.log(value);
  }
}
