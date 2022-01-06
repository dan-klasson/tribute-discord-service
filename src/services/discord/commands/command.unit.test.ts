import {Message} from 'discord.js';
import {Client} from 'discordx';
import './command';
import 'reflect-metadata';

const client = new Client({intents: []});

beforeAll(async () => {
  await client.build();
});

describe('DiscordCommand', () => {
  it('executes the hello command successfully', async () => {
    const sampleMessage = {content: '!hello there'} as Message;
    const parsedCommand = client.parseCommand('!', sampleMessage);
    const response = await client.executeCommand(sampleMessage);
    expect(response).toEqual(['!hello', ['there'], parsedCommand]);
  });

  it('presents a usage example on incorrect command', async () => {
    const sampleMessage = {content: '!hello'} as Message;
    const response = await client.executeCommand(sampleMessage);
    expect(response).toEqual('usage: !hello foo');
  });
});
