# Tribute Discord Service

## Development

**Dependencies:**

- Docker
- NPM `^7.0.0` (if changing `package.json` packages)

### Running the local development environment

```
npm ci
npm start
```

### Updating Prisma database migrations

When running `npm start` any migrations which have not yet been applied to the database, or which are yet to be created as a result of a schema (`schema.prisma`) change, will be run.

#### Updating migrations after schema changes

Make sure the Docker containers have started, or at least the `db` service, then create and/or run the migrations.

[Read more: developing with Prisma `migrate`](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate)

```
# Creates a new migration, applies it to the database, and updates the generated Prisma Client
npm run migrate:dev -- --name YOUR_MIGRATION_NAME

# Creates a new migration file only; does not apply it to the database.
npm run migrate:dev -- --name YOUR_MIGRATION_NAME --create-only
```

### Stopping the development environment

```
# Runs `docker-compose down` to stop and remove any containers, networks
npm run docker:down
```

### Resetting the development environment

```
# Runs `docker-compose down` and removes data volumes
npm run docker:teardown

# Runs the above, and also removes all images used by the services
npm run docker:teardown -- --rmi="all"
```
