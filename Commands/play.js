import ytdl from "ytdl-core";
import youtubeSearch from "yt-search";


export function player(song, msg){
    //Join the voice channel of the user who requested song
    msg.member.voice.channel.join().then(async connection =>{
        
        //If `song` is not a url link ---> get link
        if(!song.startsWith('https')){
            
            //Get song object
            song = (await youtubeSearch(song)).all[0]
            
            //Display title and url of found song
            msg.channel.send(`🤫 NOW PLAYING  ${song.title}`)
            msg.channel.send(song.url)
            
            //Play song
            connection.play(ytdl(song.url))
            .on("finish", () => {
                msg.channel.send(`Done playing ${song.title}`)
            })
            
        } else {
            //If `song` is already a url link ---> play song
            connection.play(ytdl(song))
        }

    })
}
