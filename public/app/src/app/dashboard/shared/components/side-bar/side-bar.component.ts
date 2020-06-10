import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { faUserFriends, faIdCard, faFileSignature } from '@fortawesome/free-solid-svg-icons';
// Service
import { User } from '@app/auth/shared/service/auth.service';


@Component({
  selector: 'app-side-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['side-bar.component.scss'],
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent {
  faUserFriends = faUserFriends;
  faIdCard = faIdCard;
  faFileSignature = faFileSignature;

  @Input()
  user: User;

  constructor() {}

}
