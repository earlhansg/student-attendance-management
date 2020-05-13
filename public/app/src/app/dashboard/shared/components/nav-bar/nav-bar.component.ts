import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['nav-bar.component.scss'],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  faBars = faBars;

  constructor() {}

}
