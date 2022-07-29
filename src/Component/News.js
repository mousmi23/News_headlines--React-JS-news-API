import React from "react";
import axios from "axios";
import { useState } from "react";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);
  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa642d475a7142b485e8cd1071b8086e"
      )
      .then((result) => {
        setNews(result.data.articles);
        console.log(result.data.articles);
        // if (result.data.articles[0].title) {
        //   span = <span class="badge bg-warning">New</span>;
        // }
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <button className="btn1" onClick={fetchNews}>
              Get headlines
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>TOP HEADLINES</h1>

        <div className="row">
          {news.map((value, index) => {
            return (
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt=".."
                  />

                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    {index < 3 && <span class="badge bg-warning">New</span>}

                    <p className="card-text">{value.description}</p>
                    <a href={value.url} className="link">
                      <span>Read more</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
