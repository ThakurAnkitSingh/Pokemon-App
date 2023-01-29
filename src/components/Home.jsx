import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./MovieComponent";
import './Home.css'

const Home = () => {
  const [card, setCard] = useState([]);
  const [single, setSingle] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [prename, setPrename] = useState('');
  const [name, setName] = useState('');
  const [search, setSearch] = useState(false);

  console.log(prename, "Prename")
  console.log(name, "setName")

  const getCardData = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=9&_page=${page}`
    );
    const data1 = await res.json();
    const data = data1.results;
    // console.log(data, "Data Occurring");
    // setCard(data);
    // setCard((prev) => [...prev, data]);
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };


  const getSearchCardData = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const singleData  = await res.json();
    // const SingleDetials = singleData.results;

    console.log(singleData, "SingleDetails=====");

    setSingle(singleData);

    // console.log(data, "Data Occurring");
    // setCard(data);
    // setCard((prev) => [...prev, data]);
    // setCards((prev) => [...prev, ...data]);
    // setLoading(false);
  };
  
  console.log(single, "Single=========");

  useEffect(() => {
    getCardData();
  }, [page]);


  useEffect(() => {
    getSearchCardData();
  }, [name]);

  
  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error, "Error happening");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>

      <div className='searchBar'>
          <input className='input-searchBar' type="text" placeholder="Search Pokemon Name" onChange={(e) => {
            setPrename(e.target.value.toLowerCase());
          }} />
          <button className='btn' type='button' onClick={(e) => {
            // e.preventDefault();
            setSearch(true);
            setName(prename);
          }}>Search</button>
      </div>


      
      
      <MovieComponent movieInfo={card} search={search} single={single}/>
      {loading && <Loading />}
    </>
  );
};

export default Home;
