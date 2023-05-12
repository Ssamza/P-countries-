import style from "./home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCountries } from "../../redux/action";
import Cards from "../../components/cards/cards";
import Nav from "../../components/nav/nav";
import Filters from "./filters";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  console.log(allCountries);

  return (
    <div>
      <Filters />
      <div>
        <Nav />
      </div>
      <div>
        <Cards allCountries={allCountries} />
      </div>
    </div>
  );
}

export default Home;
