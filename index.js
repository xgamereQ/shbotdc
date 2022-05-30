const { Discord, Client, Collection, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const client = new Client();
require("discord-buttons")(client);


const Loader = require("./utils/loader.util");
require("./utils/logger.util");

client.loader = new Loader(client);
client.config = require("./config");
client.commands = new Collection();
client.aliases = new Collection();

readdirSync("./handlers").forEach(handler => {
    if (!handler.endsWith(".js")) return;
    console.log(`Loaded ${handler}`);
    require(`./handlers/${handler}`)(client);
});

client.on('guildMemberAdd', guildMember => {
    const channel = guildMember.guild.channels.cache.get('919978759073972264');

    const embed = new MessageEmbed()
        .setImage("https://cdn.discordapp.com/attachments/923689153592430594/923689296538521600/SLOWCRAFT_WITAMY.png")
        .setColor('#ff4900')
        .setTitle('')
        .setFooter("SlowCraft.pl ")
        .setTimestamp()
        .setDescription(`Cześć **${guildMember.displayName}**!
    ⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣
Witamy na discordzie **SlowCraft!**
Aktualnie jest nas **${client.guilds.cache.get('919976445579763802').memberCount}** osób.`);

    channel.send(embed);
})

client.login(client.config.token);
