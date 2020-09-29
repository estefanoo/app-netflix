

const API_KEY = 'b1765bf7a1ada50312bffd50fa47691c';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFecth = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;

}

export default {
     getHomeList : async () =>{
        return [
            {
                slug: 'originals',
                title : "Originales de Netflix",
                items : await basicFecth(`/discover/tv/?with_network=213&language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title : "Recomendados para Vos",
                items : await basicFecth(`/trending/all/week?language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title : "Los mas valorados",
                items : await basicFecth(`/movie/top_rated?&language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title : "Accion",
                items : await basicFecth(`/discover/movie?with_genres=28&language=es-ES&api_key=${API_KEY}`)
            },
        ]
     }
}