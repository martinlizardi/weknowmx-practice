import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RefresherCustomEvent } from '@ionic/angular/standalone';

import { UsersService } from '@services/users.service';
import { UserItemComponent } from '@components/user-item/user-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, UserItemComponent],
})
export class HomePage {
  private usersService = inject(UsersService);

  constructor() {}

  get users() {
    return this.usersService.users();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
}
