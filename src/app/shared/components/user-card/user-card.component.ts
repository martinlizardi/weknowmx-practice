import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonAvatar,
  IonImg,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

import { User } from '@/app/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonAvatar,
    IonImg,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
}
