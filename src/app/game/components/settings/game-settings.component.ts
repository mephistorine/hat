import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'hat-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: [ './game-settings.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
