import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyCredentialsModalComponent } from './spotifyCredentialsModal.component';

describe('SpotifyCredentialsModalComponent', () => {
  let component: SpotifyCredentialsModalComponent;
  let fixture: ComponentFixture<SpotifyCredentialsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyCredentialsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyCredentialsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
