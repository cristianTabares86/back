const { Videogame  } = require('../db')
const { getVideoGamesAPI } = require('../controllers/dataBulkLoadController')


const getPostVideogamesIntoDBHandlers = async (req, res) => {
    //res.send('Estoy en GET de types');
    console.log("estoy en el handler")
    try {
        let responseAPI = await getVideoGamesAPI();
        console.log(responseAPI)
        responseAPI.forEach(p => {
            console.log("estoy en el handler en eeee")
            console.log(p)
            Videogame.findOrCreate({
                where: { 
                    id: p.id,
                    name: p.name,
                    released: p.released,  // url imagen
                    platforms: p.platforms.map((pl) => {
                        return {
                            name: pl.name
                        }
                    }),
                    genres: p.genres.map((g) => {
                        return {
                            name: g.name
                        }
                    }),
                    background_image: p.background_image,
                    rating_top: p.rating_top
                }
            })
        });
        const videogames = await Videogame.findAll();
        res.send(videogames)
    } catch (error) {
        res.status(400).send(error.message);
    }

};

// const getPostGenresIntoDBHandlers = async () => {
//     //res.send('Estoy en GET de types');
//     console.log("estoy en post de genres")
//     try {
//         let responseAPI = await getGenresAPI();
//         //console.log(responseAPI)
//         responseAPI.forEach(e => {
//             Genres.findOrCreate({
//                 where: { name: e }
//             })
//         });
//         const genres = await Genres.findAll();
//         res.send(genres)
//     } catch (error) {
//         res.status(400).send(error);
//     }

// };

module.exports = {getPostVideogamesIntoDBHandlers};