module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'GREEN',
            author: { name: `Resultados para: ${query}` },
            footer: { text: 'Bot creado por Bobi' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};