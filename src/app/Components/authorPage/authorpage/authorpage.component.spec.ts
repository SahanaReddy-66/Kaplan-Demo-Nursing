import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorpageComponent } from './authorpage.component';

describe('AuthorpageComponent', () => {
  let component: AuthorpageComponent;
  let fixture: ComponentFixture<AuthorpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorpageComponent]
    });
    fixture = TestBed.createComponent(AuthorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
