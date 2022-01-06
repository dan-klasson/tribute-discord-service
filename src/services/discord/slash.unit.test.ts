import {ComponentType, InteractionType} from 'discord-api-types';
import {Interaction, Message} from 'discord.js';
import {Client} from 'discordx';
import './slash';

const client = new Client({intents: []});

beforeAll(async () => {
  await client.build();
});

xdescribe('SlashCommand', () => {
  it('executes the hello command successfully', async () => {
    // const sampleMessage = {content: '/hello there'} as Message;
    // const parsedCommand = client.parseCommand('/', sampleMessage);
    // const response = await client.executeCommand(sampleMessage);
    // console.log(response);
    // expect(response).toEqual(['/hello', ['there'], parsedCommand]);
  });
  it('Should execute the simple slash', async () => {
    // const interaction = new Interaction(client, {
    //   type: InteractionType.ApplicationCommand,
    //   id: 'foo',
    //   application_id: 'foo',
    //   token: 'foo',
    //   version: 1,
    //   channel_id: 'foo',
    //   user: {
    //     id: 'foo',
    //     username: 'foo',
    //     discriminator: 'foo',
    //     avatar: 'foo',
    //   },
    //   data: {
    //     id: 'foo',
    //     name: 'foo',
    //     // type: ComponentType.ActionRow,
    //   },
    // });
    // const res = await client.executeInteraction(interaction);
    // expect(res).toEqual(['/hello', 'hello', interaction, true]);
  });
});
