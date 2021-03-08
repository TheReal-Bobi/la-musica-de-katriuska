exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en ningún canal de voz`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay ninguna canción reproducendose`);

    client.player.skip(message);

    message.channel.send(`${client.emotes.success} - La canción se ha **saltado** !`);

};
