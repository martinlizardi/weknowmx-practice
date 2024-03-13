import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';

import { User } from '@interfaces/req-response.interface';

@Component({
  selector: 'app-user-item',
  standalone: true,
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  imports: [IonItem, IonAvatar, IonLabel, RouterModule],
})
export class UserItemComponent {
  @Input({
    required: true,
  })
  user!: User;
}
