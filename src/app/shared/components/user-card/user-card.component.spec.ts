import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { query } from '@/testing-utils';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UserCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.user = {
      id: 1,
      email: 'myemail@fake.com',
      fullname: '',
      imageurl: 'image.jpg',
      companyfields: [],
      personalfields: [],
    };
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print avatar into ion-avatar', () => {
    const imageDe = query(fixture, 'ion-avatar ion-img');
    const imageEl: HTMLElement = imageDe.nativeElement;

    const srcAttr = imageEl
      .getAttributeNames()
      .find((attr) => attr.includes('src'));
    const attrValue = imageEl.getAttribute(srcAttr!);

    expect(attrValue).toBe(component.user.imageurl);
  });

  it('should print fullname and email into ion-card-content', () => {
    const labelEl: HTMLElement = query(
      fixture,
      'ion-card-content ion-label'
    ).nativeElement;
    const pEl: HTMLElement = query(fixture, 'ion-card-content p').nativeElement;

    expect(labelEl.innerText).toBe(component.user.fullname);
    expect(pEl.innerText).toBe(component.user.email);
  });
});
