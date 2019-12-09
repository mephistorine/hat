import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { GameContainerComponent } from './containers/game-container/game-container.component'

const routes: Routes = [
  {
    path: '',
    component: GameContainerComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GameRoutingModule { }
