module.exports = (client, message, track) => {

    message.channel.send(`${client.emotes.music} - Ahora, ${track.title} sonando en vivo y en directo`);

};
