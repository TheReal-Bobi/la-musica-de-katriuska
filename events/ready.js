module.exports = async (client) => {

    console.log(`Lista en ${client.guilds.cache.size} servidores, para ${client.users.cache.size} usuarios `);

    client.user.setActivity(client.config.game);

};
