// import React, { useEffect } from "react";
// import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
// import "./card.css";
// import { Link } from "react-router-dom";


// const Cards =({movie})=>{
//     const [isLoading,setIsLoading] = useState(true);

//     useEffect(()=>{
//         setTimeout(()=>{
//             setIsLoading(false)
//         },1500)
//     },[])

//     return(
//         <>
//         {
//             isLoading
//             ?
//             <div className="cards">
//                 <SkeletonTheme color ="#202020" highlightColor="#444">
//                     <Skeleton height={300} duration={2}/>
//                 </SkeletonTheme>
//             </div>
//             :
            // <Link to={`movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}>
            //     <div className="cards">
            //         <img src={`https://image.tmdb.org/t/p/original${movie? movie.poster_path :""}`}/>
            //     </div>
            //     <div className="cards_overlay">
            //         <div className="cards_title">{movie?movie.origianl_title:""}</div>
            //         <div className="cards_runtime">
            //             {movie?movie.release_date:""}
            //             <span className="card_rating">{movie?movie.vote_average:""}<i className=""></i></span>
            //         </div>
            //         <div className="cards_discription">{movie?movie.overview.slice(0,118)+"}</div>
            //     </div>

            // </Link>

//         }
//         </>
//     )
// }

// export default Cards;








// import React, { useEffect, useState } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import "./card.css";
// import { Link } from "react-router-dom";

// const Cards = ({ movie }) => {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 1500);

//         return () => clearTimeout(timer); // Cleanup timeout on unmount
//     }, []);

//     return (
//         <>
//             {isLoading ? (
//                 <div className="cards">
//                     <SkeletonTheme color="#202020" highlightColor="#444">
//                         <Skeleton height={300} duration={2} />
//                     </SkeletonTheme>
//                 </div>
//             ) : (
//                 <Link to={`movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
//                     <div className="cards">
//                         <img 
//                             src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} 
//                             alt={movie?.original_title || "Movie Poster"} 
//                         />
//                     </div>
//                     <div className="cards_overlay">
//                         <div className="cards_title">
//                             {movie ? movie.original_title : ""}
//                         </div>
//                         <div className="cards_runtime">
//                             {movie ? movie.release_date : ""}
//                             <span className="card_rating">
//                                 {movie ? movie.vote_average : ""}
//                                 <i className="fas fa-star"></i>
//                             </span>
//                         </div>
//                         <div className="cards_description">
//                             {movie ? movie.overview.slice(0, 118) + "..." : ""}
//                         </div>
//                     </div>
//                 </Link>
//             )}
//         </>
//     );
// };

// export default Cards;


// import React, { useEffect, useState } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import "./card.css";
// import { Link } from "react-router-dom";
// // import MovieList from "../MovieList/MovieList";


// const Card = ({ movie }) => {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 1500);

//         return () => clearTimeout(timer); // Cleanup timeout on unmount
//     }, []);

//     return (
//         <>
//             {isLoading ? (
//                 <div className="cards">
//                     <SkeletonTheme color="#202020" highlightColor="#444">
//                         <Skeleton height={300} duration={2} />
//                     </SkeletonTheme>
//                 </div>
//             ) : (
//                 <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
//                     <div className="cards">
//                         <img 
//                             src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} 
//                             alt={movie?.original_title || "Movie Poster"} 
//                         />
//                     </div>
//                     <div className="cards_overlay">
//                         <div className="cards_title">
//                             {movie ? movie.original_title : ""}
//                         </div>
//                         <div className="cards_runtime">
//                             {movie ? movie.release_date : ""}
//                             <span className="card_rating">
//                                 {movie ? movie.vote_average : ""}
//                                 <i className="fas fa-star"></i>
//                             </span>
//                         </div>
//                         <div className="cards_description">
//                             {movie ? movie.overview.slice(0, 118) + "..." : ""}
//                         </div>
//                     </div>
//                 </Link>
//             )}
//         </>
//     );
// };

// export default Card;



import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards