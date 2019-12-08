import { Inject, Injectable } from '@angular/core'
import { EFFECT_INSTANCES, EFFECTS_STORAGE } from './tokens'
import { Observable } from 'rxjs'
import { ignoreElements } from 'rxjs/operators'
import { Action, Actions } from '../../../models'
import { EffectConfig, EffectItem } from './index'
import { isArray, isEmpty, isEmptyArray } from '../../../utils'

@Injectable()
export class EffectRunner {
  constructor(@Inject(EFFECT_INSTANCES) private effectInstances: any[],
              private actions$: Actions) {
  }

  public start() {
    for (const instance of this.effectInstances) {
      const storage = Reflect.getMetadata(EFFECTS_STORAGE, instance) as EffectItem[] || []
      if (isEmpty(storage) || isEmptyArray(storage)) break
      for (const { config, effectPropertyName } of storage) {
        const subscribeable = instance[ effectPropertyName ]
        this.listen(subscribeable, config)
      }
    }
  }

  private listen(effect$: Observable<Action | Action[] | void>, { dispatch }: EffectConfig) {
    if (dispatch) {
      return (effect$ as Observable<Action | Action[]>).subscribe((actionsOrAction: Action | Action[]) => {
        if (isEmpty(actionsOrAction)) throw new Error('Observable must have emit Action')

        if (isArray(actionsOrAction)) {
          if ((actionsOrAction as Action[]).every((action) => isEmpty(action.type))) {
            throw new Error('Action must have type')
          }

          (actionsOrAction as Action[]).forEach((action) => this.actions$.next(action))
          return
        }

        if (isEmpty((actionsOrAction as Action).type)) throw new Error('Action must have type')
        this.actions$.next(actionsOrAction as Action)
      })
    }

    return effect$.pipe(ignoreElements()).subscribe()
  }
}
