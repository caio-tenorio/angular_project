import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SpotifyPlaylistsService } from '../../services/spotifyPlaylists.service';

@Component({
  selector: 'app-spotify-playlists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spotify-playlists.component.html',
  styleUrl: './spotify-playlists.component.css'
})
export class SpotifyPlaylistsComponent {
  constructor(private playlistsService: SpotifyPlaylistsService, @Inject(PLATFORM_ID) private platformId: Object) {}

  playlistsPage?: any;
  playlists?: any;

  ngOnInit(): void {
    this.loadCurrentUserPlaylists();
  }

  loadCurrentUserPlaylists() {
    if (isPlatformBrowser(this.platformId)) {
      this.playlistsService.getCurrentUserPlaylists().subscribe({
        next: (data) => {
          console.log(data)
          this.playlistsPage = data
          this.playlists = data.items
        },
        error: (error) => {
          console.error(error)
        }
      })
    }
  }
}
