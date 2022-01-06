import 'reflect-metadata';
import {Intents} from 'discord.js';
import {Client} from 'discordx';
import {importx} from '@discordx/importer';

export class Main {
  private static _client: Client;

  static get Client(): Client {
    return this._client;
  }

  static async start(): Promise<void> {
    this._client = new Client({
      botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
      silent: false,
    });

    this._client.once('ready', async () => {
      await this._client.initApplicationCommands({
        global: {log: true},
        guild: {log: true},
      });
      await this._client.initApplicationPermissions(true);

      console.log('>> Bot started');
    });

    this._client.on('interactionCreate', (interaction) => {
      this._client.executeInteraction(interaction);
    });

    await importx(__dirname + '/commands/**/*.{js,ts}');
    const BOT_TOKEN =
      'OTIwNDk5MzY3NzU5MjA4NTA4.YblP1w.EnnbsfcIaBzLfBBW3Hki5eDdMPM';
    await this._client.login(BOT_TOKEN ?? '');
  }
}

Main.start();
