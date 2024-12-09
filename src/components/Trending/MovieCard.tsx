import { BiTime } from "react-icons/bi"
import { Movie } from "./moviesData"


const MovieCard = ({ movie }: { movie: Movie }) => {
  const { src, title, main, runtime } = movie
  return (
    <div className="card">
      <img src={src} alt={title} className="w-full" />
      <div className="text-white p-4">
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className="badge">
        <BiTime />
        <p>{runtime}</p>
      </div>

    </div>
  )
}

export default MovieCard