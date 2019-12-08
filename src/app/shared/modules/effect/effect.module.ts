import { ModuleWithProviders, NgModule, Type, SkipSelf, Optional } from '@angular/core'
import { CHECK_ROOT_EFFECT_MODULE, EFFECT_INSTANCES } from './models'
import { EffectRunner } from './models/effect-runner'
import { EffectRootModule } from './effect-root.module'
import { EffectFeatureModule } from './effect-feature.module'

@NgModule()
export class EffectModule {
  public static forRoot(rootEffects: Type<any>[]): ModuleWithProviders<EffectRootModule> {
    return {
      ngModule: EffectRootModule,
      providers: [
        rootEffects, // Как это работает ?
        {
          provide: EFFECT_INSTANCES,
          useFactory: (...instances: any[]) => instances[ 0 ],
          multi: true,
          deps: [ rootEffects ]
        },
        {
          provide: CHECK_ROOT_EFFECT_MODULE,
          useFactory: (runner: EffectRunner) => {
            if (runner) {
              throw new TypeError('EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.')
            }

            return true
          },
          deps: [ [ new SkipSelf(), new Optional(), EffectRunner ] ]
        },
        EffectRunner
      ]
    }
  }

  public static forFeature(featureEffects: Type<any>[]): ModuleWithProviders<EffectFeatureModule> {
    return {
      ngModule: EffectFeatureModule,
      providers: [
        featureEffects,
        {
          provide: EFFECT_INSTANCES,
          useFactory: (...instances: any[]) => instances[ 0 ],
          multi: true,
          deps: [ featureEffects ]
        },
        EffectRunner
      ]
    }
  }
}
