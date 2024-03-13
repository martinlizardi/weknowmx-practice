import { Field } from '@/app/interfaces/user.interface';
import { Component, Input } from '@angular/core';
import { IonList, IonListHeader, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-field-list',
  standalone: true,
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss'],
  imports: [IonList, IonListHeader, IonItem, IonLabel],
})
export class FieldListComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) fields!: Field[];
}
