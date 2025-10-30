import { useEffect, useState} from 'react';

import api from '../../services/api';

import { Link } from 'react-router-dom';
import './home.css';

import { FaFilm } from "react-icons/fa";

function Home(){
    const[filme, setFilme] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: process.env.REACT_APP_API_KEY,
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilme(response.data.results.slice(0, 12))
            setLoading(false);

        }

        loadFilmes();

    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filme.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <strong>{filme.title}</strong>
                            <div className="details">
                                <Link to={`/filme/${filme.id}`}>Detalhes</Link>
                                <button className="trailer" ><a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                                    <FaFilm />
                                </a>
                                </button>
                                
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;