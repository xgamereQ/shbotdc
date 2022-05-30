const { MessageButton } = require('discord-buttons')
const { MessageActionRow } = require('discord-buttons');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ver",
    description: '',
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let embed = new MessageEmbed()
            .setImage(`https://cdn.discordapp.com/attachments/923689153592430594/923689296861478912/SLOWCRAFT_WERYFIKACJA.png`)
            .setTitle(`⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣ **SlowCraft.pl**  ⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣`)
            .setDescription(`Aby się zweryfikować, kliknij przycisk 🧩 **Zweryfikuj!** poniżej.`)
            .setColor("#ff4900")
            .setTimestamp()
            .setFooter("SlowCraft.pl")

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
