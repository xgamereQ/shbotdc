const { MessageEmbed, Channel, Message } = require("discord.js");

module.exports = {
    name: 'clear',
    description: '',
    perm: ["dev"],
    async run({ client, message, args, MessageEmbed }) {

        if (!args[0]) return message.channel.send('Nie wpisałeś liczby!');

        if (isNaN(args[0])) return message.channel.send('Wpisz liczbę nie słowo!');

        if (args[0] < 1) return message.channel.send('Nie możesz usunąć mniej niż 1 wiadomość!');

        if (args[0] > 100) return message.channel.send('Nie możesz usunąć więcej niż 100 wiadomości!');

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)

            message.channel.send(`${args[0]} messages has been deleted!`).then(msg => setTimeout(() => msg.delete(), 3000));
        });
    }
}
