import { InjectionToken } from '@angular/core'

export const EFFECTS_STORAGE = Symbol('__EFFECTS_STORAGE__')
export const EFFECT_INSTANCES = new InjectionToken('__EFFECT_INSTANCES__')
export const CHECK_ROOT_EFFECT_MODULE = new InjectionToken('__CHECK_ROOT_EFFECT_MODULE__')
