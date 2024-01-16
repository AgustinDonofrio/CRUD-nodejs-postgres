const express = require('express')
const app = express()

//middlewares
app.use(express.json()) // Cuando el server recibe un dato en formato json, lo convierte a un objeto de JS
app.use(express.urlencoded({extended: false})) // Idem que el json pero para datos de formularios (extended:false --> Solo formato texto)

//routes
app.use(require('./routes/index'))



app.listen(3000)
console.log('Conectado en el server 3000')