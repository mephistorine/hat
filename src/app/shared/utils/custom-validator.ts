import { AbstractControl } from '@angular/forms'
import { isEmpty, isEmptyString, isNumber } from './data'

export class CustomValidators {
  static isInt(control: AbstractControl) {
    if (isEmpty(control.value) || isEmptyString(control.value)) return null
    const val = parseFloat(control.value)
    if (isNumber(val) && val % 1 === 0) return null
    return { notInt: { value: val } }
  }

  static isNumber(control: AbstractControl) {
    if (isEmpty(control.value) || isEmptyString(control.value)) return null
    const parsedValue = parseFloat(control.value)
    if (!isNumber(parsedValue)) return { notNumber: { value: control.value } }
    return null
  }

  static isPositive(control: AbstractControl) {
    if (isEmpty(control.value) || isEmptyString(control.value)) return null
    const val = parseFloat(control.value)

    if (val < 0) {
      return {
        notPositive: { value: control.value }
      }
    }

    return null
  }

  static isNegative(control: AbstractControl) {
    if (isEmpty(control.value) || isEmptyString(control.value)) return null
    const val = parseFloat(control.value)

    if (val > 0) {
      return {
        notNegative: { value: control.value }
      }
    }

    return null
  }

  /**
   * @param {number} maxFileSize // In Bytes
   */
  static maxFileSize(maxFileSize: number) {
    return (control: AbstractControl) => {
      const valid = Array.from((control.value as FileList)).every(file => file.size < maxFileSize)

      if (!valid) {
        return {
          maxFileSize: { value: control.value }
        }
      }

      return null
    }
  }
}
