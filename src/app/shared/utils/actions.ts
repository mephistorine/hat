import { Action } from '../models'
/**
 * ```ts
 * isActionBelong('Hello', { type: '[Hello] world' }) // true
 *
 * const isHelloAction = isActionBelong('Hello')
 * isHelloAction({ type: '[Bye] world' }) // false
 * ```
 * @param groupName
 */
export function isActionBelong(groupName: string): (action: Action) => boolean
export function isActionBelong(groupName: string, action: Action): boolean
export function isActionBelong(groupName: string, action?: Action) {
  if (typeof action === 'undefined' || action === null) {
    return (action: Action) => {
      return action.type.includes(`[${groupName}]`)
    }
  }

  return action.type.includes(`[${groupName}]`)
}
