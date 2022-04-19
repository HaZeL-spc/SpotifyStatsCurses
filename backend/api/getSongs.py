import spotipy
from lyricsgenius import Genius
from spotipy.oauth2 import SpotifyClientCredentials
from . import information

#configure python
client_credentials_manager = \
    SpotifyClientCredentials(client_id=information.ClientID, client_secret=information.ClientSecret)
sp = spotipy.Spotify(client_credentials_manager = client_credentials_manager)

#configure genius
genius = Genius(information.GeniusAccessToken)

def getArtistSong(id, token):
    newOrderURI = "spotify:artist:" + id
    artistName = sp.artist(newOrderURI)["name"]

    # find every album of artist
    results = sp.artist_albums(newOrderURI, album_type="album")
    albums = results["items"]
    while results['next']:
        results = sp.next(results)
        albums.extend(results["items"])

    newAlbums = []
    for album in albums:
        setUpAlbum = {"name": album["name"],"uri":album["uri"],"songs":[]}

        #find every song in album
        results = sp.album_tracks(album["uri"])
        tracks = results["items"]
        while results['next']:
            results = sp.next(results)
            tracks.extend(results["items"])

        newTracks = []
        for track in tracks:
            newTracks.append({"track": track["name"], "uri": track["uri"], "lyrics": ""})

            # find every lyrics to song
            # song = genius.search_song(track["name"], artistName)
            # print(song.lyrics)

        setUpAlbum["songs"] = newTracks
        newAlbums.append(setUpAlbum)

    # print(newAlbums)



