exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} -No estás en un canal de voz`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay música ahora mismo `);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`${client.emotes.success} - Modo repetición **deshabilitado** !`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`${client.emotes.success} - Modo repetición **habilitado** !`);
    };

};
