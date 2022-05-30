const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "regulamin",
    description: '',
    run: async ({ message, args, Discord, client }) => {
        const embed = new MessageEmbed()
            .setImage(``)
            .setColor('#ff4900')
            .setTimestamp()
            .setFooter("SHCode.PL")
            .setTitle('**SHCode - Regulamin**')
            .setDescription(`**§1. Postanowienia ogólne.**\n`
                + `§1.1 Nieprzestrzeganie poniższego regulaminu wiąże się z otrzymaniem kary.\n`
                + `§1.2 Nieznajomość regulaminu nie zwalnia z jego przestrzegania.\n`
                + `§1.3 Administracja ma pełne prawa do zmiany treści regulaminu bez wcześniejszego powiadomienia użytkowników o zmianie.\n`

                + `**§2. Zasady kanałów tekstowych.**\n`
                + `§2.1 Zakazane jest spamowanie.\n`
                + `§2.2 Zabrania się pisania wielkimi literami. (CapsLock)\n`
                + `§2.3 Zakaz używania wulgaryzmów na kanałach tekstowych oraz głosowych.\n`
                + `§2.4 Zakazane jest prowokowanie kłótni I dyskusji, które mają negatywny wpływ na serwer.\n`
                + `§2.5 Zakaz wykorzystywania, oszukiwania i szantażowania innych użytkowników.\n`
                + `§2.6 Zabronione jest wszelkiego rodzaju trolowanie oraz inne formy zachowań anty społecznych, które służą za przynętę do prowokowania(§2.4) różnych użytkowników.\n`
                + `§2.7 Zakaz obrażania graczy, administracji i serwera oraz działania na ich szkody.\n`
                + `§2.8 Zakaz reklamowania jakichkolwiek serwerów zewnętrznych: gier, stron www, serwerów discord itp. bez pisemnej zgody właścicieli.\n`
                + `§2.9 Zakaz wykorzystywania możliwych błędów na serwerze. Należy je natychmiast bezzwłocznie zgłosić administracji z zachowaniem poufności wobec osób trzecich.\n`
                + `§2.10 Podszywanie się pod graczy będzie karane kickiem, następnie banem.\n`
                + `§2.11 Komend można używać tylko na kanale do tego stworzonym.`)

        message.channel.send(embed);
    }
}
