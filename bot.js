dotenv.config()
import Discord from 'discord.js'
import dotenv from 'dotenv'
import { ping } from './Commands/ping.js'
import { isValidCommand } from './Commands/validCommands.js'
import { player } from './Commands/play.js'
import { pause } from './Commands/pause.js'


const bot = new Discord.Client()

const prefix = '@'



bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
});


bot.on('message', msg => {

    //Respond to correct prefix
    if(msg.content.startsWith(prefix)){

        //Destructure command and request/task
        const [ command, ...task ] = msg.content.slice(1).split(' ') 

        //if command is valid carry out task
        if(isValidCommand(command)){

            switch (command){
                //if command === "ping"
                case "ping":
                    msg.channel.send(ping(task))
                break;
                    
                //if command === "play"
                case "play": 
                    player(task.join(' ') , msg)
                    
                    msg.channel.send(`The ${command} command is under construction`)
                break;
                
                //if command === "stop"
                case "stop":
                    msg.channel.send(`The ${command} command is under construction`)
                break;
                    
                //if command === "pause"
                case "pause":
                    // pause(msg)
                    msg.channel.send(`The ${command} command is under construction`)
                break;
                    
                //if command === "skip"
                case "skip":
                    msg.channel.send(`The ${command} command is under construction`)
                break;
                    
                //if command === "queue"
                case "queue":
                    msg.channel.send(`The ${command} command is under construction`)
                break;
            }
                    
        } else {
            //If command is not valid
            msg.channel.send(`${command} is not a command`)
            
        }
    }
});


bot.login(process.env.BOT_TOKEN)