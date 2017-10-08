# playlistmp3

Lightweight webservice API that provides music from different sources.

The coding style is [Standard](https://standardjs.com/) based. Please use ES8 features and Node.js version > 8.0.

This is supossed to do the following for the moment:

- When an id is received, send a zip with the audio file.

```
GET /download/:link
returns 200 OK {data: track.zip }
```

- When an array of youtube video or playlist ids is received, send a zip with each mp3 data.

```
GET /download/:[id of array]
returns 200 OK {data: playlist.zip }
```