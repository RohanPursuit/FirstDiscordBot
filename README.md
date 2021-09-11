# Creating a Discord Bot
- Create repository
- Put discord server in developer mode to be able to run tests for your new app. 
- Create application for bot on discord developer page.
- Choose app scope(bot).
- Select permissions for bot to have within server.
- Grab link for the bot and paste in url to authorize bot being added to your server.<br> 
&nbsp;&nbsp;&nbsp;&nbsp;**HINT:** *The person adding the bot must have admin privileges.*
- Congrats, you now have a wild bot in your server

```
Dependencies needed:
(npm install *dependencies*)
discordjs/opus
discord.js@12
ytdl-core
yt-search
dotenv
ffmpeg
```


Keep your token safe by keeping it in .env and add file name to .gitignore(this is to keep your token safe from prying eyes)


Now, It's time to code your bot. 