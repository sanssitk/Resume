import React from "react";
import "./PortfolioImg.css";
import { CSSTransition } from "react-transition-group";

function PortfolioImg({ posts, filter, appearHome }) {


  return (
    <>
      {posts.map((imgs) =>
        imgs.filtered === true ? (
          <CSSTransition
            in={appearHome}
            appear={true}
            timeout={600}
            classNames="fade"
            key={imgs.id}
            filter ={filter}
          >
            <div
              // className={`portfolio__images__container ${filter}`}
              className="portfolio__images__container"
            >
              {/* <ModalImage key={imgs.id} small={imgs.url} large={imgs.url} alt="Hello World" className="portfolio__image"/> */}
              <img
                src={imgs.url}
                className="portfolio__image"
                alt={imgs.name}
              />

              <div className="middle">
                <div className="text">{imgs.category[1]}</div>
              </div>
            </div>
          </CSSTransition>
        ) : (
          ""
        )
      )}
    </>
  );
}

export default PortfolioImg;
