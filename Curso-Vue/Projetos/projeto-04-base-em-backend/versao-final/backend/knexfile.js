module.exports = {
    client: 'postgres',
    connection: {
        database:'knowledge_final',
        user:'postgres',
        password:'12345678',
		port:7071
    },
    pool: {
        max: 2000
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};