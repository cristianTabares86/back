const axios = require('axios');
const { URL_API } = process.env;

const getVideoGamesAPI = async () => {
    try {
        console.log("estoy en el controller")
        let responseAPI = await axios.get('https://api.rawg.io/api/games?page_size=10&key=6df927ecdff443ffa74507df2223a6ad&page_size=40');
        
        console.log(responseAPI.data)
        const gameIdsAndNames = responseAPI.data.results.map(p => ({ 
                id: p.id,
                name: p.name,
                released: p.released,  // url imagen
                platforms: p.platforms.map((pl) => {
                    return {
                        name: pl.platform.name
                    }
                }),
                genres: p.genres.map((g) => {
                    return {
                        name: g.name
                    }
                }),
                background_image: p.background_image,
                rating_top: p.rating_top,
        }));
        
        //console.log(otroArry)
        return gameIdsAndNames;
    }
    catch (error){
        return error;
    }
        
    
};


// const getGenresAPI = async () => {
//     let responseAPI = await axios.get(`${URL_API}`);
//     const dataGenres = await responseAPI.data.results.map(e => e.name
//     );
//     //console.log(dataTypes)
//     return dataGenres
// };

module.exports = {
    getVideoGamesAPI
}