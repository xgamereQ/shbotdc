
module.exports = {
    name: 'ban',
    description: '',
    perm: ["dev"],
    run: async ({ message, args }) => {

        let member = message.mentions.users.first();
        if (member) {
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('Użytkownik został zbanowany');
        } else {
            message.channel.send('Nie oznaczyłeś osoby, którą chcesz zbanować!');
        }
    }
}
