const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // the channel name is the custom channel on wow you want to use
    // the author id is the id of your wowchat bot
    if (msg.channel.name === 'BOT_DISCORD_NAME' && msg.author.id === 'BOT_DISCORD_ID') { 
        let message = null
        try {
            message = JSON.parse(msg.content.replace('forwardmsg ', ''))
        } catch(e) {
            console.log("Couldn't parse message")
            message=false
        }
        if (message) {
            console.log(`###########################\nNew message`)
            console.log(`User: ${message.user}`)
            console.log(`Message: ${message.message}`)
            console.log(`Target: ${message.target}`)
            msg.channel.send('forwardmsg ciao');
        }
    }
});

client.login('BOT_DISCORD_TOKEN'); // your token here