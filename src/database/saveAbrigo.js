function saveAbrigo(db, abrigo) {
 return db.run(`
  INSERT INTO abrigos (
    lat,
    lng,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
) VALUES (
    "${abrigo.lat}",
    "${abrigo.lng}",
    "${abrigo.name}",
    "${abrigo.about}",
    "${abrigo.whatsapp}",
    "${abrigo.images}",
    "${abrigo.instructions}",
    "${abrigo.opening_hours}",
    "${abrigo.open_on_weekends}"
    );
`);
}

module.exports = saveAbrigo;