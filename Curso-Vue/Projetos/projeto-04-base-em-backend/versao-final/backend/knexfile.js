module.exports = {
    client: 'postgresql',
    connection: {
        database:'knowledge_final',
        user:'postgres',
        password:'123456'
    },
    pool: {
        max: 20
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};