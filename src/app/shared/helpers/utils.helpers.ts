export class Utils {

  /**
   *
   * @param {*} value
   * @returns
   */
  static isNil(value: any) {
    return value === undefined || value === null;
  }

  /**
   * get utility - an alternative to lodash.get
   * @param {Object} object
   * @param {string | Array} path
   * @param {*} defaultValue
   */
  static get(object: any, path: string | string[], defaultValue: any = undefined): any {
    if (this.isNil(object) || this.isNil(path)) {
      return defaultValue;
    } else {
      const _path = Array.isArray(path) ? path : path.replace(/(\[(\d)\])/g, '.$2').split('.').filter((i: string) => i.length)

      if (!_path || !_path.length) {
        return this.isNil(object) ? defaultValue : object;
      }

      return _path.reduce((currentObjectValue, currentKeyPath) => currentObjectValue && currentObjectValue[currentKeyPath], object);
    }
  }

  static uniqueArray(array: any[]) {
    return [...new Set(array)];
  }

  static reverseString(str: string): string {
    return (str === '') ? '' : this.reverseString(str.substr(1)) + str.charAt(0);
  }

  static hashPassword(password: string) {
    const reverse = this.reverseString(password);
    return (password === '') ? '' : '$2bjjjsr#%' + reverse.slice(0, 3) + 'hnfdow82' + reverse.slice(3) + 'd@fy56mn';
  }
}
