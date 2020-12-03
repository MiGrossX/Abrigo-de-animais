const Database = require('./db');
const saveAbrigo = require('./saveAbrigo');

Database.then(async db => {

    // inserir dados na tabela
    await saveAbrigo(db, {
        lat: "-27.2114974",
        lng: "-49.6444793",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "932163215",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&auto=format&fit=crop&w=723&q=80",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        ].toString(),
        instructions: "Veja como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visita Das 18h até 8h",
        open_on_weekends: "1"
    })
    
    // consultar dados da tabela
    const selectedAbrigos = await db.all("SELECT * FROM abrigos")
    console.log(selectedAbrigos)

    // consultar somente 1 abrigo, pelo id
    //const abrigo = await db.all('SELECT * FROM abrigos WHERE id = "1"')
    //console.log(abrigo)

    // deletar dados da tabela
    //await db.run("DELETE FROM abrigos WHERE id = '2'")
})