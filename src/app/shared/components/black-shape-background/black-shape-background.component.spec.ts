import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlackShapeBackgroundComponent } from './black-shape-background.component';

describe('BlackShapeBackgroundComponent', () => {
  let component: BlackShapeBackgroundComponent;
  let fixture: ComponentFixture<BlackShapeBackgroundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BlackShapeBackgroundComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BlackShapeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
