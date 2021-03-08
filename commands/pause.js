exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en un canal de voz`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay música ahora mismo`);

    client.player.pause(message);

    message.channel.send(`${client.emotes.success} - La canción ${client.player.getQueue(message).playing.title} **pausada**`);

};
