import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCartComponent } from './find-cart.component';

describe('FindCartComponent', () => {
  let component: FindCartComponent;
  let fixture: ComponentFixture<FindCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
