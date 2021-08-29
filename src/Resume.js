import React from "react";
import "./Resume.css";
import Employment from "./Employment";
import EmploymentTitle from "./EmploymentTitle";
import Progress from "./Progress";

import Donut from "react-donut";

function Resume() {
  // Doughnut Chart///////////////////////////////////
  const text =
    "Worked with lots of Web jobs for Upwork Clients :\n * Strong knowledge of OOP design patterns, Wireframes, and technologies. \n * Strong knowledge of NoSQL, SQL & Firebase technologies \n * Strong knowledge of automated testing methodologies (TDD, BDD). \n * Strong teamwork, leadership, and time management skills. \n * Experience with agile software development (Scrum, Kanban). \n * Experience with API integrations via REST or Microservices. \n * Excellent problem solving and debugging skills. \n * Passion for excellent technical documentation. \n";
  const newText = text.split("\n").map((i) => {
    return <p>{i}</p>;
  });

  return (
    <div className="resume">
      <div className="left__content">
        <EmploymentTitle
          key="EMPLOYMENT"
          heading="EMPLOYMENT"
          background="linear-gradient(90deg, rgba(76,165,208,1) 5%, rgba(55,55,55,1) 5%)"
        />

        {/* Looping Details logic*/}
        <Employment
          key="1"
          body={newText}
          title="Full Stack Web application developer"
          company="Upwork. (Part time Remote Work)"
          timeYear="2017 - Present"
          color="#4ca5d0"
        />
        <Employment
          key="2"
          body="Build and support modern accessible websites and creative web ideas. Implement software development solutions for the web department and mobile app creation. Create automated processes that increase workflow speed."
          title="Web Application Developer(Fulltime)"
          company="Mt. Everest Consulting "
          timeYear="2017 - 2020"
          color="#4ca5d0"
        />
        <Employment
          key="3"
          body="Worked as a senior software engineer and I could successfully lead about 5 CMS and Commerce Projects from scratch to finish."
          title="Senior Software Engineer"
          company="DigitalFlow"
          timeYear="2016 - 2017"
          color="#4ca5d0"
        />

        <Employment
          key="4"
          body="Worked in some website projects, using NodeJs, ExpressJs for back-end development and Bootstrap, CSS, HTML5, Ajax/jQuery for front-end development."
          title="Software Engineer"
          company="Flex Solution"
          timeYear="2014 - 2016"
          color="#4ca5d0"
        />

        <EmploymentTitle
          key="EDUCATION"
          heading="EDUCATION"
          background="linear-gradient(90deg, rgba(108,163,56,1) 5%, rgba(55,55,55,1) 5%)"
        />
        <Employment
          key="5"
          body="Have completed Bachelor Degree in Business Management (BBS) that provides an immersive hands-on curriculum with a focus on today's business."
          title="Makwanpur Multiple Campus"
          company="Bachelor Degree in Business Management (BBS) "
          timeYear="2009- 2013"
          color="#6ca338"
        />

        <EmploymentTitle
          key="CERTIFICATION"
          heading="CERTIFICATION"
          background="linear-gradient(90deg, rgba(255,152,0,1) 5%, rgba(55,55,55,1) 5%)"
        />
        <Employment
          key="6"
          body=""
          title="React JS"
          company="Clever Programming Online"
          timeYear="2019 - Present"
          color="#FF9800"
        />
        <Employment
          key="7"
          body=""
          title="Complete Web bootstrap"
          company="Udemy E-Learning: UC-2D35JON"
          timeYear="2019"
          color="#FF9800"
        />
        <Employment
          key="8"
          body=""
          title="Web Developer and UI"
          company="MCIT"
          timeYear="2012"
          color="#FF9800"
        />
      </div>

      <div className="right__content">
        <h1>Web Skills</h1>

        <h4>HTML5 CSS3, SASS</h4>
        <Progress
          done="100"
          background="linear-gradient(to right, #90dfff, #0f90cc)"
        />
        <h4>Bootstrap</h4>
        <Progress
          done="100"
          background="linear-gradient(to right, #acff8a, #076506)"
        />
        <h4>JavaScript (ES6, D3, AJAX, DOM)</h4>
        <Progress
          done="85"
          background="linear-gradient(to right, #ff9800, #373737)"
        />
        <h4>jQuery</h4>
        <Progress
          done="85"
          background="linear-gradient(to right, #f1ed57, #534922)"
        />

        <h4>ReactJS / Redux</h4>
        <Progress
          done="90"
          background="linear-gradient(to right, #ff4d4d, #690606)"
        />

        <h4>NodeJS (Mongo DB / Express, Firebase)</h4>
        <Progress
          done="90"
          background="linear-gradient(to right, #8a57f1, #440d73)"
        />
        <h4>API integrations(RestFul, Microservices)</h4>
        <Progress
          done="90"
          background="linear-gradient(to right, #57d4f1, #0e0e46)"
        />
        <h4>Authentication & Security (OAuth, Hashing)</h4>
        <Progress
          done="90"
          background="linear-gradient(to right, #ff4d4d, #690606)"
        />
        <h4>Database (SQL, NoSQL, Firebase)</h4>
        <Progress
          done="90"
          background="linear-gradient(to right, #90dfff, #0f90cc)"
        />
        <h4>Agile/Scrum Methodologies</h4>
        <Progress
          done="95"
          background="linear-gradient(to right, #a77cff, #73610d)"
        />
        <h4>TDD(Test-Driven Development)</h4>
        <Progress
          done="100"
          background="linear-gradient(to right, #edff7c, #0d7349)"
        />
        <h4>Version Control (Git, Bitbucket...)</h4>
        <Progress
          done="100"
          background="linear-gradient(to right, #f5ff7c, #730d48)"
        />
        <br />
        <h1>MOBILE SKILLS</h1>
        <h4>HTML5 CSS3 Bootstrap</h4>
        <Progress
          done="100"
          background="linear-gradient(to right, #8a57f1, #440d73)"
        />
        <h4>JavaScript (ES6, D3, AJAX)</h4>
        <Progress
          done="85"
          background="linear-gradient(to right, #ff7c7c, #ff4d4d)"
        />

        <h4>ReactJS Native</h4>
        <Progress
          done="90"
          background="linear-gradient(to right, #7cff7e, #0d2573)"
        />
        <br/>


        {/* ///////////////// Doughnut Chart Call //////////// */}
        <div className="donut__chart">
          <h1>DESIGN SKILLS</h1>
          <Donut
            chartData={[
              { name: "PHOTOSHOP", data: 25 },
              { name: "MOBILE RESPONSIVE DESIGN", data: 16 },
              { name: "FRONT-END UI/UX DESIGN", data: 16 },
              { name: "Pixel Perfect Design", data: 17 },
              { name: "Web Design", data: 25 },
            ]}
            chartRadiusRange={["50%", "100%"]}
            chartWidth={200}
            chartHeight={350}
            showChartLabel="true"
            title=""
            legendAlignment="top"
            chartThemeConfig={{
              series: {
                colors: ["#4ca5d0", "#6ca338", "rgb(255, 152, 0)"],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
