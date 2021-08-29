import React, { useEffect, useState } from "react";
import "./PortfolioBody.css";
import { PortfolioData } from "./PortfolioData";
import PortfolioImg from "./PortfolioImg";
import Pagination from "./Pagination";

function PortfolioBody() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  ////////////////Pagination State/////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const [appearHome, setAppearHome] = useState(false);

  const newArray = projects.slice(0, 6);

  useEffect(() => {
    setProjects([]);
    const filtered = PortfolioData.map((img) => ({
      ...img,
      filtered: img.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  const toggleAppear = () => {
    setAppearHome(!appearHome);
  }

  // get current imgs
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = projects.slice(indexOfFirstPost, projects.length);
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="portfolio__body__wrapper">
      {/************************************************************* Buttons */}
      <div className="button__container">
        <button
          className={
            filter === "all"
              ? "portfolio__button active__button"
              : "portfolio__buttons"
          }
          // active={filter === "all"}
          onClick={() => {            
            setFilter("all");            
            toggleAppear();
          }}
        >
          All
        </button>
        {newArray.map((filterButtons) => (
          <button
            key={filterButtons.id}
            active={filter === filterButtons.category[1]}
            onClick={() => {              
              setFilter(filterButtons.category[1]);              
              toggleAppear();
            }}
            className={
              filter === filterButtons.category[1]
                ? "portfolio__buttons active__button"
                : "portfolio__buttons"
            }
          >          
          {filterButtons.category[1]}
          </button>
        ))}
      </div>

      {/************************************************************* Imagess */}
      <div className="portfolio__images__wrapper">
        <PortfolioImg
          posts={currentPosts}
          filter={filter} 
          appearHome={appearHome}        
        />
      </div>

      {/************************************************************* Pagination */}
      {filter === "all" && (
        <div className="portfolio__navigator">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={projects.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="page__number">{`Page:  ${currentPage} of 4`}</div>
        </div>
      )}
    </div>
  );
}

export default PortfolioBody;
