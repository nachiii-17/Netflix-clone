import React from "react";
import Link from "next/link";
import styles from "@/app/styles/common.module.css";
import MovieCard from "@/app/components/MovieCard.js";

const Movie = async () => {
  // await new Promise(executor: resolve => setTimeout(resolve, timeout:2000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "59c64682eemsh54184276e9521d7p14c5ccjsn3126f7ff7f4f",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
