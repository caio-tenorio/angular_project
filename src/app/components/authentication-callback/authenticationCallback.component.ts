import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SpotifyAuthService } from '../../services/spotifyAuth.service';
import { AuthorizationCodeResponse } from '../../interfaces/authorizationCodeResponse';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication-callback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authenticationCallback.component.html',
  styleUrl: './authenticationCallback.component.css'
})
export class AuthenticationCallbackComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private authService: SpotifyAuthService, private router: Router) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      var code: string = window.location.href.split("code=")[1]

      this.authService.getAuthorizationToken(code).subscribe({
        next: (response: AuthorizationCodeResponse) => {
          // Bad practice, only saving in local storage for testing purposes
          localStorage.setItem('spotifyAccessToken', response.accessToken)
          localStorage.setItem('spotifyRefreshToken', response.refreshToken)
          localStorage.setItem('expiresIn', response.expiresIn.toString())
          console.log('Spotify token acquired')
          this.router.navigate(['/heroes'])

        }, error: (error) => {
          console.log(error)
        }
      })
    }
  }
}
