import {ButtonComponent, Discord, Slash} from 'discordx';
import {
  ButtonInteraction,
  CommandInteraction,
  MessageActionRow,
  MessageButton,
} from 'discord.js';

@Discord()
class buttonExample {
  @Slash('button')
  button(interaction: CommandInteraction) {
    const helloBtn = new MessageButton()
      .setLabel('Hello')
      .setEmoji('👋')
      .setStyle('PRIMARY')
      .setCustomId('hello-btn');

    const row = new MessageActionRow().addComponents(helloBtn);

    interaction.reply({
      content: 'Say hello to bot',
      components: [row],
    });
  }

  @ButtonComponent('hello-btn')
  mybtn(interaction: ButtonInteraction) {
    interaction.reply(`👋 ${interaction.member}`);
  }
}
