module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} -Tienes que dar un valor entre 1 y**${tracks.length}** !`);

};