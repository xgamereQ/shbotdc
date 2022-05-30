const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "embed",
    desc: "",
    usage: "",
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        const msg = message.content.slice(6).trim();
        if (!msg) return message.channel.send(`Enter text!`).then(msg => setTimeout(() => msg.delete(), 3000));
        message.delete()
        const embed = new MessageEmbed()
            .setImage(``)
            .setColor("#ff4900")
            .setTitle("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**SHCode.PL**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
            .setDescription(msg)
            .setFooter("SHCode.PL")
            .setTimestamp()
        message.channel.send(embed)
    }
}
