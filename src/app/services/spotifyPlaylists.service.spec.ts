import { TestBed } from '@angular/core/testing';

import { SpotifyPlaylistsService } from './spotifyPlaylists.service';

describe('SpotifyPlaylistsService', () => {
  let service: SpotifyPlaylistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyPlaylistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
