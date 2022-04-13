import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();  // id 파라미터값 가져오기
    const getMovie = async () => {
    const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
    return (<div>
        {loading? (
            <h1>Loading...</h1>
            ) : (
            <div>
                <h1>Detail</h1>
                <img src={movie.medium_cover_image}/>
                <h2>{movie.title}</h2>
                <p>{movie.description_full}</p>
            </div>
        )}
    </div>);
  }
export default Detail; 