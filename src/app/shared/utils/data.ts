export interface Dictionary<T> {
  [ key: string ]: T
}

export function isObject(obj) {
  return typeof obj === 'object'
}

export function isArray(arr: unknown, project?: (element, index?, array?) => boolean) {
  const isArr = Array.isArray(arr)

  if (isArr && !isEmpty(project)) {
    return (arr as unknown[]).every((value, index, array) => project(value, index, array))
  }

  return isArr
}

export function isNumber(num) {
  return typeof num === 'number' && !Number.isNaN(num)
}

export function isEmptyArray(arr) {
  return isArray(arr) && arr.length === 0
}

export function isString(str) {
  return typeof str === 'string'
}

export function isFunc(func) {
  return typeof func === 'function'
}

export function isBoolean(obj) {
  return typeof obj === 'boolean'
}

export function isSymbol(symbol) {
  return typeof symbol === 'symbol'
}

export function isNode(node) {
  if (isObject(Node)) return node instanceof Node
  return node && isObject(node) && isNumber(node.nodeType) && isString(node.nodeName)
}

export function isElement(node) {
  if (isObject(HTMLElement)) return node instanceof HTMLElement
  return node && isObject(node) && node.nodeType === 1 && isString(node.nodeName)
}

export function isEmptyString(str) {
  return isString(str) && str.length === 0
}

export function isNull(obj) {
  return obj === null
}

export function isUndefined(obj) {
  return typeof obj === 'undefined'
}

export function isEmpty(obj) {
  return isNull(obj) || isUndefined(obj)
}

export function isEmptyAll(obj) {
  return isEmpty(obj) || isEmptyString(obj)
}

export function isEmptyObject(obj) {
  return !(obj && Object.keys(obj).length > 0)
}

export function isInEnum<T>(someEnum: T, value: any): boolean
export function isInEnum<T>(someEnum: T): (value: any) => boolean
export function isInEnum<T>(someEnum: T, value?: any) {
  if (!isEmpty(value)) return Object.values(someEnum).includes(value)
  return (value: any) => Object.values(someEnum).includes(value)
}

export function createDictionaryFromArray<T>(essences: T[], propertyKey: keyof T) {
  const essenceMap: Dictionary<T> = {}

  for (const essence of essences) {
    essenceMap[ essence[ propertyKey ] as any ] = essence
  }

  return essenceMap
}

export function isEquivalent(a: object, b: object) {
  const aProps = Object.getOwnPropertyNames(a)
  const bProps = Object.getOwnPropertyNames(b)

  if (aProps.length !== bProps.length) return false
  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];
    if (a[propName] !== b[propName]) return false
  }

  return true
}

const defaultValue = Symbol('default')

export function switcher(switchable: any, handlers: SwitchHandler[]) {
  if (isEmpty(handlers) || isEmptyArray(handlers)) throw new Error('The switch must have at least one handler')
  for (const handler of handlers) {
    if (isFunc(handler.possible) && handler.possible(switchable)) {
      return handler.action(switchable)
    }

    if (Object.is(switchable, handler.possible)) {
      return handler.action(switchable)
    }

    if (handler.possible === defaultValue) {
      return handler.action(switchable)
    }
  }
}

export function on<T = any>(possible: any, action: (switchable: T) => void): SwitchHandler {
  return { possible, action }
}

export function whist<T  = any>(action: (switchable: T) => void): SwitchHandler {
  return { action, possible: defaultValue }
}

interface SwitchHandler {
  possible: any
  action: (switchable: any) => void
}

export function onParseCsvField(data) {
  if (data === null) {
    return '\" \"'
  }
  // tslint:disable-next-line
  return '\"' + `${data}`.replace(/"/g, '\'') + '\"'
}
