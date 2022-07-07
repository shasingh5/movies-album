import React, { useContext, useEffect, useState } from "react";

const URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [isloading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [results, setResults] = useState(0);
  const [isError, setIsError] = useState({show:false, msg: ""})
  const [query, setQuery] = useState("titanic");
  const [page, setPage] = useState(1);
  
  const getMovie = async(url) => {
    setIsLoading(true);
    try{
      const res = await fetch(url);
      const data = await res.json();

      // console.log(data);

      if(data.Response === "True"){
        
        setIsLoading(false);
        setIsError({
          show: false,
          msg: ""
        });
        setMovie(data.Search);
        setResults(data.totalResults)
        
        // console.log(data.totalResults);
      }else {
        setIsError({
          show: true,
          msg: data.Error
        });
      }
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    const timerout = setTimeout(() => {
      getMovie(`${URL}&s=${query}&page=${page}`);      
    }, 700);

    return () => clearTimeout(timerout);
  }, [query, page]);

  return(
    <AppContext.Provider value={{ movie, page, setPage, isloading, isError, query, setQuery, results }}>
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext, URL};