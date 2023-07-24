/** \
 * @typedef createPicture
 * @prop { number } id
 * @prop { string } url
 * @prop { string } descriptionArray
 * @prop { number } likes
 * @prop { Array } comments
 */

/** /
 * @typedef createPictureComment
 * @prop { number } id
 * @prop { string } avatar
 * @prop { Array } comments
 * @prop { string } NAMES
 */

/**
 * @typedef ScaleControl
 * @prop {() => number} getValue
 * @prop {(percent: number) => void} setValue
 * @prop {(type: string, listener: EventListener) => void} on
 */

/**
 * @typedef ScaleControlOptions
 * @prop {number} [min]
 * @prop {number} [max]
 * @prop {number} [step]
 */

/**
 * @typedef EffectSlider
 * @prop {(type: EffectType) => void} setEffect
 * @prop {() => string} getCssValue
 * @prop {(type: string, listener: () => void) => void} on
 */

/**
 * @typedef {'none' | 'chrome' | 'sepia' | 'marvin' | 'phobos' | 'heat'} EffectType
 */


/**
 * @typedef {'success' | 'error'} StatusType
 */


/**
 * @typedef StatusOptions
 * @prop {string} [title]
 * @prop {string} [button]
 */

/**
 * @typedef {'default' | 'random' | 'discussed'}  FilterType
 */
