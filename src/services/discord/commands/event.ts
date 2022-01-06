import {Discord, On} from 'discordx';

@Discord()
abstract class AppDiscord {
  @On('messageCreate')
  private onMessage() {
    console.log('message sent');
  }
}
