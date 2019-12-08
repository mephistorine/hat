import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectRunner } from './models/effect-runner'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EffectRootModule {
  constructor(private runner: EffectRunner) {
    this.runner.start()
  }
}
