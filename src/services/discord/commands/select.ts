import {
  SelectMenuInteraction,
  CommandInteraction,
  MessageSelectMenu,
  MessageActionRow,
} from 'discord.js';
import {Discord, SelectMenuComponent, Slash} from 'discordx';

const roles = [
  {label: 'Principal', value: 'principal'},
  {label: 'Teacher', value: 'teacher'},
  {label: 'Student', value: 'student'},
];

@Discord()
class Select {
  @SelectMenuComponent('role-menu')
  async handle(interaction: SelectMenuInteraction) {
    await interaction.deferReply();

    // extract selected value by member
    const roleValue = interaction.values?.[0];

    // if value not found
    if (!roleValue)
      return await interaction.followUp('invalid role id, select again');

    await interaction.followUp(
      `you have selected role: ${
        roles.find((r) => r.value === roleValue)!.label
      }`
    );
    return;
  }

  @Slash('roles', {description: 'role selector menu'})
  async myroles(interaction: CommandInteraction): Promise<unknown> {
    await interaction.deferReply();

    // create menu for roels
    const menu = new MessageSelectMenu()
      .addOptions(roles)
      .setCustomId('role-menu');

    // create a row for meessage actions
    const buttonRow = new MessageActionRow().addComponents(menu);

    // send it
    interaction.editReply({
      content: 'select your role!',
      components: [buttonRow],
    });
    return;
  }
}
