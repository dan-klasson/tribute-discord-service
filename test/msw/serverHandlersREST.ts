import {APIMessage} from 'discord-api-types';

import {
  DISCORD_WEBHOOK_POST_FIXTURE,
  LEGACY_TRIBUTE_SNAPSHOT_HUB_DRAFT_FIXTURE,
  LEGACY_TRIBUTE_SNAPSHOT_HUB_PROPOSAL_FIXTURE,
} from '..';
import {
  SnapshotHubLegacyTributeDraftEntry,
  SnapshotHubLegacyTributeProposalEntry,
} from '../../src/services/snapshotHub';
import {rest} from './server';

/**
 * HTTP API
 */

const httpAPIAllGET = rest.get(
  'http://localhost:*/api/*',
  // Bypass and use original response
  (_req, _res, _ctx) => undefined
);

/**
 * Alchemy API
 */

const alchemyAPI = rest.get(
  'https://eth-*.alchemyapi.io/v2/*',
  // Just responding with something so the msw doesn't log a warning
  (_req, res, ctx) => res(ctx.status(200))
);

/**
 * Discord.js
 */

const discordWebhookPOST = rest.post<undefined, APIMessage>(
  'https://discord.com/api/*/webhooks/*/*',
  (_req, res, ctx) => res(ctx.json(DISCORD_WEBHOOK_POST_FIXTURE))
);

/**
 * Snapshot Hub
 */

const snapshotHubLegacyTributeProposalGET = rest.get<
  undefined,
  SnapshotHubLegacyTributeProposalEntry
>('http://*/api/*/proposal/*', (_req, res, ctx) =>
  res(ctx.json(LEGACY_TRIBUTE_SNAPSHOT_HUB_PROPOSAL_FIXTURE))
);

const snapshotHubLegacyTributeDraftGET = rest.get<
  undefined,
  SnapshotHubLegacyTributeDraftEntry
>('http://*/api/*/draft/*', (_req, res, ctx) =>
  res(ctx.json(LEGACY_TRIBUTE_SNAPSHOT_HUB_DRAFT_FIXTURE))
);

/**
 * HANDLERS TO EXPORT
 */

export const handlers = [
  alchemyAPI,
  discordWebhookPOST,
  httpAPIAllGET,
  snapshotHubLegacyTributeDraftGET,
  snapshotHubLegacyTributeProposalGET,
];
