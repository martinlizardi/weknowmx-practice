import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';

import { UsersService } from '@services/users.service';
import { UserCardComponent } from '@components/user-card/user-card.component';
import { FieldListComponent } from '@components/field-list/field-list.component';
import { BlackShapeBackgroundComponent } from '@components/black-shape-background/black-shape-background.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UserCardComponent,
    FieldListComponent,
    BlackShapeBackgroundComponent,
  ],
})
export class UserDetailPage {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  constructor() {}

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );
}
