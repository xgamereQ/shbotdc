const { MessageEmbed } = require('discord.js')
const { MessageButton } = require("discord-buttons")
module.exports = {
    name: "ticket",
    description: '',
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let button = new MessageButton()
            .setStyle('red')
            .setLabel('⠀⠀⠀⠀⠀⠀🎫 Stwórz kanał!⠀⠀⠀⠀⠀⠀')
            .setID('TICKET')
        let embed = new MessageEmbed()
            .setImage(``)
            .setTitle("**ShCode.PL - Pomoc**")
            .setColor("#ff4900")
            .setDescription("Aby utworzyć prywatny kanał do pomocy, kliknij przycisk **🎫 Stwórz kanał!** poniżej.")
            .setTimestamp()
            .setFooter("SHCode.PL")
        message.channel.send(' ', {
            button: button,
            embed: embed
        })
    }
}
