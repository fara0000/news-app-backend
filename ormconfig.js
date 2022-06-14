module.exports = {
    'type': "postgres",
    // 'host': "localhost",
    // 'port': 5432,
    // 'username': "fara0000",
    // 'password': "SGJc3Jzi",
    'database': "newsApp",
    'url': process.env.DB_URL,
    'entities': [process.env.ENTITY_PATH],
    'subscribers': [],
    'migrations': [],
    'synchronize': true
}