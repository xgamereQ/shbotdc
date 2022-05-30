module.exports = {
    name: 'ankieta',
    description: '',
    perm: ["dev"],
    async run({ client, message, args, MessageEmbed }) {
        let Arguments = args.join(' ');

        let newEmbed = new MessageEmbed()
            .setImage(``)
            .setColor('#ff4900')
            .setTitle('**SHCode - Ankieta**')
            .setDescription(`**${Arguments}**`)
            .setTimestamp()
            .setFooter('SHCode.PL');

        let messageEmbed = await message.channel.send(newEmbed);

        messageEmbed.react("<:tak_1:980906142039425095>");
        messageEmbed.react("<:niewiem_1:980906341054939166>");
        messageEmbed.react("<:nie_1:980906352924835871>");
    }
}
