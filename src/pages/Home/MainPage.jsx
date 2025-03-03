import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "../../Service/ApiService";
import FilmContainer from "./HomePage";

const MainPage = () => {
  const { list, isLoading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [increment, setIncrement] = useState(0);
  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  return (
    <>
      <div>
        {increment}
        <button onClick={() => setIncrement((prev) => prev + 2)}>Increment</button>
      </div>
      {/* <FilmContainer list={list} isLoading={isLoading} /> */}
    </>
  );
};
export default MainPage;
