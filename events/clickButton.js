const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
module.exports = async (client, button) => {
    await button.reply.defer()
    let buttonClicker = button.clicker.member;
    let guild = button.guild;

    if (button.id === 'TICKET') {
        let alreadyOpenedTicket = client.channels.cache.filter(m => m.type == "text" && m.name.includes("ticket-")).map(m => m.name.split("ticket-")[1]);
        let already = alreadyOpenedTicket.some(v => buttonClicker.user.username == v)
        console.log(already)
        if (already === true) {
            return await buttonClicker.user.send(new MessageEmbed().setTitle(`**Error!**`).setColor("RED").setDescription(`Masz już stworzony kanał!`))
        }
        let ticketChannel = await guild.channels.create(`ticket-${buttonClicker.user.username}`, {
            type: "text",
            parent: "914469969205534720",
            permissionOverwrites: [
                {
                    id: buttonClicker.user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: '914469672865390613',
                    deny: ["VIEW_CHANNEL"]
                }
            ]
        })
        let openedTicket = new MessageEmbed()
            .setTitle(`**ShCode.PL - Pomoc**`)
            .setColor("#ff4900")
            .setDescription("```Dziękujemy za skontaktowanie się z nami!```")
            .setFooter(`SHCode.PL`)
            .setTimestamp()
        let supportButton = new MessageButton()
            .setLabel("❌ Zamknij kanał")
            .setStyle("red")
            .setID("TICKET_CLOSE")
        ticketChannel.send(`${buttonClicker.user}`, {
            embed: openedTicket,
            components: new MessageActionRow().addComponent(supportButton)
        })
    }
    if (button.id === `TICKET_CLOSE`) {
        let ticketChannel = button.channel;

        let deletingTicket = new MessageEmbed()
            .setTitle(`**SHCode.PL - Zamknij kanał**`)
            .setColor("#ff4900")
            .setTimestamp()
            .setFooter(`SHCode.PL`)
            .setDescription("```Kanał zostanie usunięty za 5 sekund...```")
        ticketChannel.send(deletingTicket)
        setTimeout(() => { ticketChannel.delete() }, 5000);

    }

    if (button.id === 'Click_ver') {
        const plRole = button.guild.roles.cache.find(role => role.id === "916680096952225792")
        const member = button.clicker.member
        await member.roles.add(plRole);
    }
}
