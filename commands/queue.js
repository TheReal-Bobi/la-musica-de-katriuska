exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en un canal`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay canciones puestas ahora mismo`);

    message.channel.send(`**Lista** - ${message.guild.name} ${client.emotes.queue}**\nActualmente** : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (Pedida por : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Y **${queue.tracks.length - 5}** otras canciones...` : `En la playlist **${queue.tracks.length}** cancion(es)...`}`));

};
