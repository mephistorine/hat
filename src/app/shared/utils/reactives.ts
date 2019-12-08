import { Action, ActionType } from '../models'
import { MonoTypeOperatorFunction, Observable, Subject } from 'rxjs'
import { filter, tap } from 'rxjs/operators'

import { isFunc } from './data'

type ReturnerActionType = () => ActionType

export function ofType<T = any>(action: ActionType)
export function ofType<T = any>(project: ReturnerActionType)
export function ofType<T = any>(actionTypeOrProject: ReturnType<ReturnerActionType> | ReturnerActionType) {
  return (source) => filter((action: Action) => ofTyper(action, actionTypeOrProject))(source)
}

function ofTyper(sourceAction: Action, actionTypeOfProject: ReturnType<ReturnerActionType> | ReturnerActionType) {
  if (isFunc(actionTypeOfProject)) {
    return sourceAction.type === (actionTypeOfProject as ReturnerActionType)()
  }
  return sourceAction.type === actionTypeOfProject
}

export function initialize<T>(callback: (value: T) => void): MonoTypeOperatorFunction<T> {
  let inited = false

  return (source: Observable<T>) => source.pipe(
    tap((value) => {
      if (!inited) {
        callback(value)
        inited = true
      }
    })
  )
}

export class DestroySubject extends Subject<any> {

  /**
   * @deprecated
   *
   * Use sendDestroy method instead
   */
  public next() {}

  /**
   * @deprecated
   *
   * Use sendDestroy method instead
   */
  public complete() {}

  public sendDestroy() {
    this.next()
    this.complete()
  }
}
