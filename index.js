const Discord = require('discord.js'), client = new Discord.Client()

client.on('ready', () => { console.log("BOT IS ONLINE...") })

client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send(`PONG ${client.ws.ping}ms`)
    }
})

client.login("TOKEN");