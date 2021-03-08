exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estás en un canal de voz`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay música ahora mismo`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Activa un filtro`);

    const filterToUpdate = Object.values(client.filters).find((f) => f.toLowerCase() === args[0].toLowerCase());

    if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Ese filtro no existe`);

    const filterRealName = Object.keys(client.filters).find((f) => client.filters[f] === filterToUpdate);

    const queueFilters = client.player.getQueue(message).filters
    const filtersUpdated = {};
    filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
    client.player.setFilters(message, filtersUpdated);

    if (filtersUpdated[filterRealName]) message.channel.send(`${client.emotes.music} -  **Añadiendo** el filtro a la canción`);
    else message.channel.send(`${client.emotes.music} - **Quitando** el filtro`);

};
