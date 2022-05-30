module.exports = {
    name: 'ankieta',
    description: '',
    perm: ["dev"],
    async run({ client, message, args, MessageEmbed }) {
        let Arguments = args.join(' ');

        let newEmbed = new MessageEmbed()
            .setImage(`https://cdn.discordapp.com/attachments/923689153592430594/923689298136547378/SLOWCRAFT_ANKIETA.png`)
            .setColor('#ff4900')
            .setTitle('**SlowCraft - Ankieta**')
            .setDescription(`**${Arguments}**`)
            .setTimestamp()
            .setFooter('SlowCraft.pl');

        let messageEmbed = await message.channel.send(newEmbed);

        messageEmbed.react("<:tak_1:923283242021425192>");
        messageEmbed.react("<:niewiem_1:923283215354052608>");
        messageEmbed.react("<:nie_1:923283215643463751>");
    }
}
