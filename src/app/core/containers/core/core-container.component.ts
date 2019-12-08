import { Component, OnInit } from '@angular/core'
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'hat-core',
  templateUrl: './core-container.component.html',
  styleUrls: [ './core-container.component.scss' ]
})
export class CoreContainerComponent implements OnInit {
  public version = environment.version

  constructor() { }

  ngOnInit() {
  }

}
