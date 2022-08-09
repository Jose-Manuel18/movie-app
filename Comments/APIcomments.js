// const Data = res.json();
// const results = Data.results;
// console.log(isLoading, error, data);
// useEffect(() => {
//   UploadMovies();
// }, []);

// const UploadMovies = async () => {
//   try {
//     const Response = await fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
//     );
//     if (Response.status === 200) {
//       const Data = await Response.json();
//       const results = Data.results;
//       setMovieList(results);
//       // console.log(results);
//       // Data.results.forEach((movie) => {
//       //   setMovieList(movie);
//       // });
//     } else if (Response.status === 401) {
//       console.log("Invalid API Key");
//     } else if (Response.status === 404) {
//       console.log("Movie not Found");
//     } else {
//       console.log("error, no se sabe que paso");
//     }
//   } catch (error) {
//     console.log(error);  //   }
//   onTransferredData(movieList);

// };

// const response =  fetch(
//   "https://api.themoviedb.org/3/movie/popular?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
// )
//   .then((response) => response.json())
//   const movieData  =  response
//   console.log(data);const renderTitleAndImages = ({ item }) => {
// //   const datos = {
// //     MovieTitle: item.title,
// //     imageUrl: item.poster_path,
// //   };
// //   return <CardImage {...datos} />;
// // };
