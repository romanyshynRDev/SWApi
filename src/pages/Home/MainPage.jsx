import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "../../Service/ApiService";
import FilmContainer from "./HomePage";

const MainPage = () => {
  const { list, isLoading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
const [increment, setIncrement] = useState(0)
  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  return (
    <>
    {increment}
    <button onClick={() => {setIncrement((prev) =>prev+1)}}>increment</button>
      <FilmContainer list={list} isLoading={isLoading} />
    </>
  );
};
export default MainPage;
