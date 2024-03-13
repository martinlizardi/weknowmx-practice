import { User } from '@/app/interfaces/req-response.interface';
import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';

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

  get fullName() {
    return `${this.user.first_name} ${this.user.last_name}`;
  }
}
