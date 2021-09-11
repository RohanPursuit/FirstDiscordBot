# Steps taken to create a Discord Bot
1. create repo, global and local
Put discord server in developer mode to be able to run tests for your new app. 
2. create application for bot on discord developer page
3. choose app scope(bot)
4. select permissions for bot
5. grab link for the bot, paste in url to authorize bot being added to your server HINT: person adding bot must have admin privileges
6. Congrats, you now have a wild bot in your server

```
Dependencies needed:
(npm install *dependencies*)
discordjs/opus
discord.js@12
ytdl-core
yt-search
dotenv(file to hold your token)
ffmpeg
```


Keep your token safe by keeping it in .env and add file name to .gitignore(this is to keep your token safe from prying eyes)


Now, It's time to code your bot. 