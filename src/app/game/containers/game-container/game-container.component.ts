import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'hat-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: [ './game-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameContainerComponent implements OnInit {

  public constructor() { }

  public ngOnInit() {
  }

}
