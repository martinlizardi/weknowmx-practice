import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UserItemComponent } from './user-item.component';
import { query } from '@/testing-utils';
import { RouterTestingHarness } from '@angular/router/testing';

describe('UserItemComponent', () => {
  let component: UserItemComponent;
  let fixture: ComponentFixture<UserItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: '**', component: UserItemComponent }]),
      ],
      imports: [IonicModule.forRoot(), UserItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;
    component.user = {
      id: 1,
      fullname: 'John Doe',
      imageurl: 'https://free-images.com/lg/aa2a/oregon_beach_sand_rocks.jpg',
      position: '',
    };
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print avatar into ion-avatar', () => {
    const imageDe = query(fixture, 'ion-avatar img');
    const imageEl: HTMLElement = imageDe.nativeElement;

    const srcValue = imageEl.getAttribute('src');

    expect(srcValue).toBe(component.user.imageurl);
  });

  it('should print fullname into ion-label', () => {
    const labelEl: HTMLElement = query(fixture, 'ion-label').nativeElement;

    expect(labelEl.innerText).toBe(component.user.fullname);
  });

  it('should navigate to /user/:id path', fakeAsync(() => {
    const path = `/user/${component.user.id}`;
    const router = TestBed.inject(Router);

    const itemDe = query(fixture, 'ion-item');
    itemDe.triggerEventHandler('click', {});
    tick();
    fixture.detectChanges();

    expect(router.url).withContext('Navigate to user detail').toBe(path);
  }));
});
