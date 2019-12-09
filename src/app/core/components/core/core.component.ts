import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { Router } from '@angular/router'

@Component({
  selector: 'hat-core',
  templateUrl: './core.component.html',
  styleUrls: [ './core.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit {

  public version = environment.version

  public constructor(private router: Router) { }

  public ngOnInit() {
  }

  public startGame() {
    this.router.navigate([ 'game' ])
  }

}
