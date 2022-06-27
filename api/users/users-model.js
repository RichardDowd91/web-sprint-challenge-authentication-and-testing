const db = require('../../data/dbConfig');

function findBy(username) {
    return db('users')
    .where({ username })
}

function findById(id) {
    return db('users')
    .where({ id })
    .first()
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id)
}

module.exports = {
    findBy,
    findById,
    add
}