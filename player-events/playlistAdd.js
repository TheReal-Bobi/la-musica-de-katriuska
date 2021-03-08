module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} se ha añadido a la lista (**${playlist.items.length}** canciones!`);

};