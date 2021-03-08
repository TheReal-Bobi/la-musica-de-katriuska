module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - No he encontrado nada para ${query}`);
};