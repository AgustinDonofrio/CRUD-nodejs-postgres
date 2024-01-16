const pg = require('pg')


const getUsers = (req, res) => {
    res.send('Usuarios')
}

module.exports = {
    getUsers 
}