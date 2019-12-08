export * from './tokens'

export interface EffectConfig {
  dispatch?: boolean
}

export interface EffectItem {
  effectPropertyName: string | symbol
  config: EffectConfig
}

export const DEFAULT_EFFECT_CONFIG: EffectConfig = {
  dispatch: true
}
