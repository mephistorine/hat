import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectRunner } from './models/effect-runner'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EffectFeatureModule {
  constructor(private runner: EffectRunner) {
    this.runner.start()
  }
}
