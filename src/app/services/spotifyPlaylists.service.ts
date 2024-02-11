import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../globalVariables';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlaylistsService {
  private readonly ENDPOINT: string = environment.serverUrl + "/v1/spotify/me"
  private readonly PLAYLISTS_ENDPOINT: string = this.ENDPOINT + "/playlists";

  private isBrowser: boolean;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId)
  }

  getCurrentUserPlaylists(): Observable<any> {
    if (this.isBrowser) {
      const spotifyAccessToken = localStorage?.getItem('spotifyAccessToken');
      const spotifyRefreshToken = localStorage?.getItem('spotifyRefreshToken');

      if (!spotifyAccessToken || !spotifyRefreshToken) {
        throw new Error('Missing tokens');
      }
      let params = new HttpParams()
        .set('accessToken', spotifyAccessToken)
        .set('refreshToken', spotifyRefreshToken);

      return this.http.get(this.PLAYLISTS_ENDPOINT, { params })
    } else {
      throw new Error('Server side')
    }
  }
}
