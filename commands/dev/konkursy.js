const { MessageEmbed, Collection } = require('discord.js');

module.exports = {
    name: 'konkurs',
    desc: '',
    usage: '',
    perm: ['dev'],
    run: async ({ client, message, args }) => {
        const getChannelFromMention = (mention) => {
            const matches = mention.match(/^<#(\d+)>$/);
            if (!matches) return;
            const id = matches[1];
            return message.guild.channels.cache.get(id);
        };

        const timeToNumber = (_time) => {
            const time = String(_time).match(/^[0-9]+[ ]?[smhd]$/gim)[0];
            if (!time) return null;

            const timeUnits = {
                s: 1000,
                m: 60000,
                h: 3600000,
                d: 86400000,
            };

            const timeUnit = time[time.length - 1].toLowerCase();
            const timeValue = Number(time.slice(0, -1).trim());
            return timeValue * timeUnits[timeUnit];
        };

        const splitted = args.join(' ').split('|');
        const time = timeToNumber(splitted[0]);
        const winnersNumber = parseInt(splitted[1], 10);
        const reward = splitted[2];
        const channel = splitted[3];

        if (!time) return message.channel.send('d (days), h (hours), m (minutes), s (seconds)');

        if (!winnersNumber || isNaN(winnersNumber)) return message.channel.send('Nieprawidłowa liczba zwycięzców.');
        if (winnersNumber < 1) return message.channel.send("Liczba zwycięzców nie może być mniejsza niż 1.");
        if (!reward) return message.channel.send('Nie podano nagrody.');

        const gchannel = getChannelFromMention(channel);
        if (!gchannel) return message.channel.send("Nie odnaleziono takiego kanału na tym serwerze!");

        const endsAt = String((Date.now() + time) / 1000).split('.')[0];

        const embed = new MessageEmbed()
            .setImage(`https://cdn.discordapp.com/attachments/923689153592430594/923689297880698880/SLOWCRAFT_KONKURS.png`)
            .setTitle('Konkurs! <:slowcraft:926884433120886825>')
            .setFooter('SlowCraft.pl')
            .setColor('#ff4900')
            .setTimestamp()
            .setDescription(([`> Do wygrania: **${reward}**`, `> Zwycięzców: **${winnersNumber}**`, `> Koniec: <t:${endsAt}>`, `> Stworzono przez: **${message.author}**`,]).map((item) => item.toString()).join('\n')
            )

        message.delete();
        gchannel.send('**KONKURS** <:slowcraft:926884433120886825>');

        const n = await gchannel.send(embed);
        n.react('🎊');

        setTimeout(() => {
            if (n.reactions.cache.get('🎊').count <= 1) {
                return message.channel.send('Zbyt mało osób wzięło udział!');
            }

            const winners = new Collection();

            for (let step = 0; step < winnersNumber; step++) {
                const winner = n.reactions.cache
                    .get('🎊')
                    .users.cache.filter((u) => !u.bot)
                    .random();

                winners.set(winner.id, winner);
            }

            const winnersList = winners.map((wnr) => `${wnr.tag}`).join(',\n');
            const embed1 = new MessageEmbed()
                .setTitle('Wyniki! <:slowcraft:926884433120886825>')
                .setDescription(`> Zwycięzcy(a):\n\`\`\`${winnersList}\`\`\``)
                .setFooter('SlowCraft.pl')
                .setColor('#ff4900')
                .setTimestamp()
                .setThumbnail(client.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }))

            gchannel.send(embed1);
        }, time);
    },
};
