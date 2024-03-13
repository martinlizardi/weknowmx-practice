import { Component, Input } from '@angular/core';
import { IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';

import { User } from '@interfaces/req-response.interface';

@Component({
  selector: 'app-user-item',
  standalone: true,
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  imports: [IonItem, IonAvatar, IonLabel],
})
export class UserItemComponent {
  @Input({
    required: true,
  })
  user!: User;
}
