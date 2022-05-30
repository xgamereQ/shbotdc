const { MessageButton } = require('discord-buttons')
const { MessageActionRow } = require('discord-buttons');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ver",
    description: '',
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let embed = new MessageEmbed()
            .setImage(``)
            .setTitle(`⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣ **ShCode.PL**  ⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣`)
            .setDescription(`Aby się zweryfikować, kliknij przycisk 🧩 **Zweryfikuj!** poniżej.`)
            .setColor("#ff4900")
            .setTimestamp()
            .setFooter("SHCode.PL")

        let button1 = new MessageButton()
            .setStyle('red')
            .setLabel('⠀⠀⠀⠀⠀⠀🧩 Zweryfikuj!⠀⠀⠀⠀⠀⠀')
            .setID('Click_ver')

        const row1 = new MessageActionRow()
            .addComponents([button1])

        return message.channel.send({
            embed: embed,
            components: [row1]
        })
    }
}
