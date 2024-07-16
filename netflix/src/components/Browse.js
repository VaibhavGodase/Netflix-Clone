import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import axios from "axios";
import { Now_Playing_Movie, options } from "../utils/constant";
import { getNowPlayingMovies } from "../redux/movieSlice";
import usenowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovie";
import SearchMovie from "./SearchMovie";


const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);
  const dispatch = useDispatch()



  // my custom hooks
  usenowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()




  useEffect(() => {
    if (!user) {
      navigate("/");
    }


  }, []);

  return (
    <div>
      <Header />
      <div>
        {
          toggle ? <SearchMovie /> : (
            <>
              <MainContainer />
              <MovieContainer />
            </>

          )
        }

      </div>
    </div>
  );
};

export default Browse;
