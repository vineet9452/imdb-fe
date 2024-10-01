// import React, { useEffect,useState } from "react";
// import "./Home";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


// const Home=()=>{
// const[popularMovies,setPopularMovies] = useState([])


// // const [popularMovies, setPopularMovies] = useState([]) इस लाइन का मतलब है कि हम popularMovies नाम की एक स्टेट वेरिएबल बना रहे हैं, जिसकी शुरुआती वैल्यू एक खाली ऐरे है। हम setPopularMovies का उपयोग करके इस स्टेट को अपडेट कर सकते हैं, जैसे कि जब API से हमें पॉपुलर मूवीज़ का डेटा मिलता है।
//     useEffect(()=>{
//         fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
//         .then((res)=>res.json())
//         .then((data)=>setPopularMovies(data.results))  
//         .catch((error) => console.error("Error fetching data:", error));

//     },[])

//     // useEffect() हुक का इस्तेमाल साइड इफेक्ट्स को हैंडल करने के लिए किया जाता है। यहाँ useEffect() का मतलब यह है कि जब कंपोनेंट पहली बार रेंडर होगा (DOM में दिखेगा), तब यह कोड चलेगा।
//     // दूसरा पैरामीटर एक खाली ऐरे [] है, जिसका अर्थ यह है कि यह इफेक्ट केवल एक बार चलेगा, यानी कंपोनेंट के माउंट होने पर, और बाद में स्टेट या प्रॉप्स में किसी भी प्रकार के बदलाव के बावजूद यह इफेक्ट दोबारा नहीं चलेगा।

//     // useEffect() और जावास्क्रिप्ट का setTimeout / setInterval
//     // Similar Functionality:
//     // useEffect() उस तरह काम करता है जिस तरह जावास्क्रिप्ट में setTimeout() या setInterval() का उपयोग करके कोई असिंक्रोनस कार्य या साइड इफेक्ट चलाया जाता है। जैसे आप setTimeout() का उपयोग करके एक कार्य को कुछ समय बाद चलाते हैं, वैसे ही useEffect() का उपयोग करके आप एक कार्य कंपोनेंट के माउंट या अपडेट होने के बाद चला सकते हैं।

//     // अगर आप डिपेंडेंसी ऐरे में कुछ वेरिएबल्स डालते हैं, तो useEffect() तब चलेगा जब वे वेरिएबल्स बदलेंगे।

//     // useEffect(() => {
//     //   console.log("यह तब चलेगा जब count बदलेगा");
//     // }, [count]);
    
//     return(
//         <>
//        <div className="poster">
//         <Carousel
//             showThumbs={false}
//             autoPlay={true}
//             transitionTime={3}
//             infiniteLoop={true}
//             showStatus={false}
//         >
//             {
//                 // console.log(popularMovies)
//                 popularMovies.map((movie)=>(
//                     <>
//                     <div className="posterImage" key={movie.id}>
//                         <img src=" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}" alt="" />
//                     </div> 
//                     <div className="posterImage_overlay">
//                      <div className="posterImage_title">{movie ? movie.original_title:""}</div>
//                      <div className="posterImage_runtime">{movie?movie.release_date:""}</div>
//                      <span className="postarImage_rating">
//                         {movie?movie.vote_average:""}
//                         <i className="fas fa-star"/>{""}
//                      </span>
//                     </div>
//                     <div className="posterImage_description">{movie?movie.overview:""}</div>
//                     </>                   
//                 )
                
//             )
            
//             }

//         </Carousel>
//        </div>
//         </>
//     )
// }

// export default Home;



import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    // Fetching popular movies from TMDB API
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then((res) => res.json())
            .then((data) => setPopularMovies(data.results))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {popularMovies.map((movie) => (
                   <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} key={movie.id}>
                    <div className="posterImage" >
                        <img 
                            src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} 
                            alt={movie.original_title} 
                        />
                        <div className="posterImage_overlay">
                            <div className="posterImage_title">{movie ? movie.original_title : ""}</div>
                            <div className="posterImage_runtime">
                                {movie ? movie.release_date : ""}
                                <span className="posterImage_rating">
                                    {movie ? movie.vote_average : ""}
                                    <i className="fas fa-star" />
                                </span>
                            </div>
                            <div className="posterImage_description">{movie ? movie.overview : ""}</div>
                        </div>
                    </div>
                   </Link>
                ))}
            </Carousel>
        </div>
    );
}

export default Home;

