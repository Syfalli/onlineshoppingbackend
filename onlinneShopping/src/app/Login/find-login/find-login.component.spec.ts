import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLoginComponent } from './find-login.component';

describe('FindLoginComponent', () => {
  let component: FindLoginComponent;
  let fixture: ComponentFixture<FindLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
