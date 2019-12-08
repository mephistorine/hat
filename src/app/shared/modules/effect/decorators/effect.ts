// tslint:disable-next-line:function-name
import { DEFAULT_EFFECT_CONFIG, EffectConfig, EffectItem, EFFECTS_STORAGE } from '../models'
import { isEmpty } from '../../../utils'

// tslint:disable-next-line:function-name
export function Effect(effectConfig?: EffectConfig): PropertyDecorator {
  return function (constructor: Object, key: string | symbol) {
    const effectsStorage = getEffectsStorage(constructor)
    effectsStorage.push({
      effectPropertyName: key,
      config: !isEmpty(effectConfig) ? { ...DEFAULT_EFFECT_CONFIG, ...effectConfig } : DEFAULT_EFFECT_CONFIG
    })
  }
}

function getEffectsStorage(constructor: Object): EffectItem[] {
  if (!Reflect.hasMetadata(EFFECTS_STORAGE, constructor)) {
    Reflect.defineMetadata(EFFECTS_STORAGE, [], constructor)
  }
  return Reflect.getMetadata(EFFECTS_STORAGE, constructor)
}
