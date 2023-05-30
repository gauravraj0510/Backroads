import React from "react";

const Tour = ({ article }) => {
  return (
    <article key={article.id} className="tour-card">
      <div className="tour-img-container">
        <img src={article.image} className="tour-img" alt="" />
        <p className="tour-date">{article.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{article.title}</h4>
        </div>
        <p>{article.info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {article.location}
          </p>
          <p>{article.duration}</p>
          <p>from ${article.cost}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
