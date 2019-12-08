export type ActionType = string

export interface Action<T = any> {
  type: ActionType,
  payload?: T
}

type factoryFn<T> = (payload?: T) => Action<T>

interface FactoryAction<T> extends factoryFn<T> {
  type: ActionType
}

type FutureAction = <T>(type: string) => FactoryAction<T>

export function createAction<T>(type: ActionType): FactoryAction<T> {
  const action = function (payload?: T) {
    if (typeof payload === 'undefined' || payload === null) return { type }
    return { payload, type }
  }
  action.type = type
  return action
}

export function futureAction(label: string): FutureAction {
  return (type: string) => createAction(`[${label}] ${type}`)
}
