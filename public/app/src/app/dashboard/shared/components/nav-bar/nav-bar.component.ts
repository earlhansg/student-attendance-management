import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
// Icon
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Service
import { User } from '@app/auth/shared/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['nav-bar.component.scss'],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  faBars = faBars;

  @Input()
  user: User;

  constructor(private router: Router) {}

  signOut() {
    localStorage.removeItem('User');
    this.router.navigate(['auth/login']);
  }
}
