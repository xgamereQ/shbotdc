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
            parent: "923287161812439061",
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
                    id: '919982487088816149',
                    deny: ["VIEW_CHANNEL"]
                }
            ]
        })
        let openedTicket = new MessageEmbed()
            .setTitle(`**SlowCraft - Pomoc**`)
            .setColor("#ff4900")
            .setDescription("```Dziękujemy za skontaktowanie się z nami!```")
            .setFooter(`SlowCraft.pl`)
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
            .setTitle(`**SlowCraft - Zamknij kanał**`)
            .setColor("#ff4900")
            .setTimestamp()
            .setFooter(`SlowCraft.pl`)
            .setDescription("```Kanał zostanie usunięty za 5 sekund...```")
        ticketChannel.send(deletingTicket)
        setTimeout(() => { ticketChannel.delete() }, 5000);

    }

    if (button.id === 'Click_ver') {
        const plRole = button.guild.roles.cache.find(role => role.id === "919982487088816149")
        const member = button.clicker.member
        await member.roles.add(plRole);
    }
}