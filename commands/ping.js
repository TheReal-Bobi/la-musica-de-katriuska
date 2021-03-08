exports.run = async (client, message) => {

    message.channel.send(`${client.emotes.success} - Pong! El mensaje a tardado en llegar: **${client.ws.ping} milisegundos**`);

};
