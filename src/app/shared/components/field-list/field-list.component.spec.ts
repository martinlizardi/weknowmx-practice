import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';

import { FieldListComponent } from './field-list.component';
import { query, queryAll, queryByDebugElement } from '@/testing-utils';
import { Field } from '@interfaces/user.interface';

describe('FieldListComponent', () => {
  let component: FieldListComponent;
  let fixture: ComponentFixture<FieldListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FieldListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print received title', () => {
    const title = 'My title';

    component.title = title;
    fixture.detectChanges();

    const titleDe = query(fixture, 'ion-list-header ion-label');
    const titleEl: HTMLElement = titleDe.nativeElement;

    expect(titleEl.innerText).toContain(title);
  });

  it('should print received fields', () => {
    const fields: Field[] = [
      {
        name: 'Field 1',
        data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        name: 'Field 2',
        data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ];

    component.fields = fields;
    fixture.detectChanges();

    const fieldsDe = queryAll(fixture, 'ion-item');
    expect(fieldsDe.length).toBe(fields.length);

    const fieldDe = fieldsDe[0];
    const pEl: HTMLElement = queryByDebugElement(fieldDe, 'p').nativeElement;
    const h2El: HTMLElement = queryByDebugElement(fieldDe, 'h2').nativeElement;

    expect(pEl.innerText).toBe(fields[0].name);
    expect(h2El.innerText).toBe(fields[0].data);
  });
});

@Component({
  template: '<app-field-list [title]="title" [fields]="fields" />',
  standalone: true,
  imports: [FieldListComponent],
})
class HostComponent {
  public title = 'Field List';
  public fields: Field[] = [
    {
      name: 'Field 1',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Field 2',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];
}

describe('FieldListComponent from HostComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print sent title', () => {
    const titleDe = query(fixture, 'app-field-list ion-list-header ion-label');
    const titleEl: HTMLElement = titleDe.nativeElement;
    expect(titleEl.innerText).toBe(component.title);
  });

  it('should print sent fields', () => {
    const itemsDe = queryAll(fixture, 'app-field-list ion-item');
    expect(itemsDe.length).toBe(component.fields.length);
  });
});
