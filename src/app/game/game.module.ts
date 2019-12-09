import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameContainerComponent } from './containers/game-container/game-container.component';
import { GameSettingsComponent } from './components/settings/game-settings.component';
import { NbStepperModule } from '@nebular/theme'


@NgModule({
  declarations: [GameContainerComponent, GameSettingsComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    NbStepperModule
  ]
})
export class GameModule { }
