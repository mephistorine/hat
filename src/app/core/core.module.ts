import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CoreRoutingModule } from './core-routing.module'
import { CoreContainerComponent } from './containers/core/core-container.component'
import { NbButtonModule, NbLayoutModule } from '@nebular/theme'

@NgModule({
  declarations: [ CoreContainerComponent ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NbButtonModule,
    NbLayoutModule
  ]
})
export class CoreModule { }
