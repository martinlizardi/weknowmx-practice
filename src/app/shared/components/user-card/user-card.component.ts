import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';

import { User } from '@/app/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
  ],
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
}
