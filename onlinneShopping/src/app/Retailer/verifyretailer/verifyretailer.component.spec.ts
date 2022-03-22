import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyretailerComponent } from './verifyretailer.component';

describe('VerifyretailerComponent', () => {
  let component: VerifyretailerComponent;
  let fixture: ComponentFixture<VerifyretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyretailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
