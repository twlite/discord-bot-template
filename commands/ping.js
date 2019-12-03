module.exports.run = async (client, message, args) => {

    message.channel.send(`Pong! ${Math.round(client.ping)}ms.`)

}