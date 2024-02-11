import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationCallbackComponent } from './authenticationCallback.component';

describe('AuthenticationCallbackComponent', () => {
  let component: AuthenticationCallbackComponent;
  let fixture: ComponentFixture<AuthenticationCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationCallbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
