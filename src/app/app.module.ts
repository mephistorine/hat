import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NbThemeModule, NbLayoutModule } from '@nebular/theme'
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { AppRoutingModule } from './app-routing.module'
import { actions } from './shared/models'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule
  ],
  providers: [
    actions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
