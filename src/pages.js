const Database = require('./database/db');
const saveAbrigo = require('./database/saveAbrigo');

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    async abrigo(req, res) {

        const id = req.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM abrigos WHERE id = "${id}"`)
            const abrigo = results[0]

            abrigo.images = abrigo.images.split(",")
            abrigo.firstImage = abrigo.images[0]

            if(abrigo.open_on_weekends == "0") {
                abrigo.open_on_weekends = false
            } else {
                abrigo.open_on_weekends = true
            }

            return res.render('abrigo', { abrigo })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
        
    },

    async abrigos(req, res) {
        // colocar o abrigo pelo banco de dados
        try {
            const db = await Database;
            const abrigos = await db.all("SELECT * FROM abrigos")
            return res.render('abrigos', { abrigos })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

    createAbrigo(req, res) {
        return res.render('create-abrigo')
    },

    async saveAbrigo(req, res) {
        const fields = req.body

        // validar se todos os campos estão preenchidos
        if(Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos!')
        }

        try {
        // salvar um abrigo
        const db = await Database
        await saveAbrigo(db, {
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            images: fields.images.toString(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            open_on_weekends: fields.open_on_weekends,

        })

        // redirecionamento
        return res.redirect('/abrigos')
            
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }

        
    }
}