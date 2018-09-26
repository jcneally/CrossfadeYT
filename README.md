# CrossfadeYT
Crossfade YouTube videos from a custom playlist. In order to avoid advertisements, YouTube Premium is required.
This hasn't been tested with non-premium YouTube service.

# Customization
Change the `songs` array to any YouTube videos you want.

`id` - The YouTube video ID from its respective URL.

`startTime` - What second you would like the video to start at

`endTime` - What second you would like the video to end at


Note: If you want the video to start/end at 3:22 for example, your value would be `202`

# Steps
There seems to be some issues with simply loading the HTML file in chrome file viewer. I was able to fix this by loading it up in MAMP/WAMP.
1. Clone the repo into a local server such as WAMP/MAMP
2. View `crossfade.html`
3. That's it! The first video should begin playing and will transition between songs automatically

# Known Issues
- There is currently no way to skip around to different songs.
