# CrossfadeYT
Crossfade YouTube videos from a custom playlist. YouTube Premium may be required to avoid advertisements, but this hasn't been tested. The embedded players seem to avoid advertisements without YT Premium.

# Customization
Change the `songs` array to any YouTube videos you want.

`id` - The YouTube video ID from its respective URL.

`startTime` - What second you would like the video to start at

`endTime` - What second you would like the video to end at


Note: If you want the video to start/end at 3:22 for example, your value would be `202`

# Local Development
1. Clone the repo and place it into a local Apache server such as WAMP/MAMP

# Known Issues
- There is currently no way to skip around to different songs.
- YouTube's fullscreen features will not work with CrossFadeYT, but the native browser fullscreen works just as well.