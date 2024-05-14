const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.POSTGRES_HOST || 'ep-small-river-a4pf78lk-pooler.us-east-1.aws.neon.tech',
  //  port: env.DB_PORT || '5432',
    user: env.POSTGRES_USER || 'default',
    password: env.POSTGRES_PASSWORDD || 'PEIXl7nrGfm4',
    database: env.POSTGRES_DATABASE || 'verceldb',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
