```
$ docker run --rm --shm-size 2g -p 4444:4444 -p 7900:7900 -p 5900:5900 -e SE_SCREEN_WIDTH=1920 -e SE_SCREEN_HEIGHT=1080 seleniarm/standalone-chromium:latest
```

```
$ docker run --rm --shm-size 2g -p 4445:4444 -p 7901:7900 -p 5901:5900 -e SE_SCREEN_WIDTH=1920 -e SE_SCREEN_HEIGHT=1080 seleniarm/standalone-chromium:106.0
```

