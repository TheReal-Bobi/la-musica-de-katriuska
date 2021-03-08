exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor, indica una canción`);

    client.player.play(message, args.join(" "));

};
