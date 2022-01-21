const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
 
router.get('/', async function(req, res, next) {
    const movies = await prisma.movies.findMany({take: 10})
  res.sendres.send({
    data: movies,
    pagination : {
        count : total, // Total des enregistrements
        take: limit,   // Nombre d'éléments sélectionnés
        skip: offset
    }
});

});
 
module.exports = router;