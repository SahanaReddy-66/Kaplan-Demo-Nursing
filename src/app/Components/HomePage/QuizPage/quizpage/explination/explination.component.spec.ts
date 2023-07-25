import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplinationComponent } from './explination.component';

describe('ExplinationComponent', () => {
  let component: ExplinationComponent;
  let fixture: ComponentFixture<ExplinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplinationComponent]
    });
    fixture = TestBed.createComponent(ExplinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
