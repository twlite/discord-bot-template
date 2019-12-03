const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true, fetchAllMembers: true });

client.on('ready', () => {

    console.log(`Bot ${client.user.tag} is online!`);
    client.user.setActivity("Some Games", { type: "PLAYING" });
    client.user.setStatus("dnd");

});

client.on("message", async (message) => {

    if (!message.guild || message.author.bot) return;
    let prefix = "?"
    if (!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    // Simple Command Handler
    let commandFile = require(`./commands/${cmd}.js`);
    if (!commandFile) return;
    commandFile.run(client, message, args);

});

client.login('BOT_TOKEN');