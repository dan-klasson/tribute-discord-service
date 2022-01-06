import 'reflect-metadata';
import {Discord, Slash, SlashOption} from 'discordx';
import {CommandInteraction} from 'discord.js';

@Discord()
export abstract class SlashCommand {
  @Slash('hello1')
  private hello1(
    @SlashOption('text')
    text: string,
    interaction: CommandInteraction
  ) {
    interaction.reply(`hello there ${text}`);
  }
}
