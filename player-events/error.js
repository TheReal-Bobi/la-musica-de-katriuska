module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - No se está reproduciendo nada :P`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - No estás conectado a ningún canal de voz :P`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Ojo a los permisos, que no los tengo`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Ups: ${error}`);
    };

};
