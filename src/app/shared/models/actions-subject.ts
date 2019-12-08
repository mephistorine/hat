import { Subject } from 'rxjs'
import { Action } from './actions'
import { Provider } from '@angular/core'

export class Actions extends Subject<Action> {
  public dispatch(value?: Action) {
    this.next(value)
  }
}

export const actions: Provider = { provide: Actions, useFactory: () => new Actions() }
