import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SpotifyAuthService } from '../../services/spotifyAuth.service';
import { AuthorizationCodeResponse } from '../../interfaces/authorizationCodeResponse';

@Component({
  selector: 'app-authentication-callback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authenticationCallback.component.html',
  styleUrl: './authenticationCallback.component.css'
})
export class AuthenticationCallbackComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private authService: SpotifyAuthService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      var code: string = window.location.href.split("code=")[1]

      this.authService.getAuthorizationToken(code).subscribe((response: AuthorizationCodeResponse) => {
        // Bad practice, only saving in local storage for testing purposes
        localStorage.setItem('spotifyAccessToken', response.accessToken)
        localStorage.setItem('spotifyRefreshToken', response.refreshToken)
        localStorage.setItem('expiresIn', response.expiresIn.toString())
      })
    }
  }
}
