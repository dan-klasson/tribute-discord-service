import {
  SimpleCommand,
  SimpleCommandMessage,
  SimpleCommandOption,
  Discord,
} from 'discordx';

@Discord()
export abstract class HelloCommand3 {
  @SimpleCommand('hello3', {
    description: 'say hello',
  })
  hello3(
    @SimpleCommandOption('name', {description: 'the name to say hello to'})
    name: string,
    command: SimpleCommandMessage
  ): void {
    command.message.reply(name);
  }
}
