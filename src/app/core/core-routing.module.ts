import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CoreContainerComponent } from './containers/core/core-container.component'
import { CoreComponent } from './components/core/core.component'

const routes: Routes = [
  {
    path: '',
    component: CoreContainerComponent,
    children: [
      {
        path: '',
        component: CoreComponent
      },
      {
        path: 'game',
        loadChildren: () => import('../game/game.module').then(m => m.GameModule)
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule { }
