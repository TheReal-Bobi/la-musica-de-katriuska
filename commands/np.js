exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - ¡Noe stás en un canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - ¡No hay música`);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: 'GREEN',
            author: { name: track.title },
           fields: [
                { name: 'Canal', value: track.author, inline: true },
                { name: 'Pedida por:', value: track.requestedBy.username, inline: true },
                { name: 'De una playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                { name: 'Visitas', value: track.views, inline: true },
                { name: 'Duración', value: track.duration, inline: true },
                { name: 'Filtros activados', value: filters.length, inline: true },

                { name: 'Barra de Progreso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};
