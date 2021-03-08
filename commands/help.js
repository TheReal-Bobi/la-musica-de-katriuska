exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Ayuda del bot' },
            footer: { text: 'Me gusta cantar' },
            fields: [
                { name: 'Bot', value: '`ping`' },
                { name: 'Música', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`, `filter`, `w-filters`' },
                { name: 'Filtros', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
            ],
            timestamp: new Date(),
            description: `Para usar filtros, ${client.config.prefix}filter (el filtro). Ejemplo : ${client.config.prefix}filter 8D.`,
        },
    });

};
