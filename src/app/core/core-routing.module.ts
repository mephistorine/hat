import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CoreContainerComponent } from './containers/core/core-container.component'

const routes: Routes = [
  {
    path: '',
    component: CoreContainerComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule { }
