exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en un canal de voz`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No queda música`);

    client.player.clearQueue(message);

    message.channel.send(`${client.emotes.success} - Se ha borrado la lista **ENTERA** !`);

};
