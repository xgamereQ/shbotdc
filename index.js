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
    const channel = guildMember.guild.channels.cache.get('914468532190871562');

    const embed = new MessageEmbed()
        .setImage("")
        .setColor('#ff4900')
        .setTitle('')
        .setFooter("SHCode.PL ")
        .setTimestamp()
        .setDescription(`Cześć **${guildMember.displayName}**!
    ⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣
Witamy na discordzie **ShCode.PL!**
Aktualnie jest nas **${client.guilds.cache.get('916680096952225792').memberCount}** osób.`);

    channel.send(embed);
})

client.login(client.config.token);
