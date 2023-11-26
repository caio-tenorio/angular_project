import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {
  private endpoint: string = "http://localhost:8080/v1/spotify/auth"

  getAuthorizationURI(): Observable<any> {
    return this.http.get(this.endpoint + "/authorization-uri")
  }

  getAuthorizationToken(code: string): Observable<any> {
    let params = new HttpParams()
      .set('code', code)
    return this.http.get(this.endpoint + "/authorization-token", { params })
  }

  constructor(private http: HttpClient) {

  }
}
