import React from "react";
import Project from "./Project";
import WorkdayScheduler from "../images/workday_scheduler.png";
import BootcampQuiz from "../images/BootcampQuiz.png";
import ExpressNoteTaker from "../images/express-notetaker.png";
import SvgMaker from "../images/svg_maker.png";
import WeatherDashboard from "../images/weather_dashboard.png";
import TastyTasty from "../images/tasty_tasyapp.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
    return (
          // Portfolio container
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="container">
          <div className="row">
            {[
              {
                title: "Workday Scheduler",
                description: "User friendly schduler to track events.",
                imageSrc: WorkdayScheduler,
                deployedLink: " https://aalemanyz67.github.io/Work-Day-Scheduler/",
                gitHubLink:"https://github.com/aalemanyz67/Work-Day-Scheduler",
              },
              {
                title:"Bootcamp Quiz",
                description:" HTML & CSS Web API quiz game.",
                imageSrc: BootcampQuiz,
                deployedLink: "https://aalemanyz67.github.io/BootCampQuiz-1/",
                gitHubLink: "https://github.com/aalemanyz67/BootCampQuiz-1",          
              },
              {
                title:"Express Note Taker",
                description:"Application using Express.js that allows the user to take down and save notes.",
                imageSrc: ExpressNoteTaker,
                deployedLink: "https://github.com/aalemanyz67/Express.js-Note-Taker",
                gitHubLink: "https://my-sql-practice-f966e600f721.herokuapp.com/",          
              },
              {
                title:"Svg Maker",
                description:"Application that will generate a logos.",
                imageSrc: SvgMaker,
                deployedLink: "https://drive.google.com/file/d/1xeclKHncafBdJIoGV4yWOlMIFTS4Homo/view",
                gitHubLink: " https://github.com/aalemanyz67/SVG-Logo-Maker",          
              },
              {
                title:"Weather Dashboard",
                description:"Weather API application.",
                imageSrc: WeatherDashboard,
                deployedLink: "https://aalemanyz67.github.io/Weather-Application/",
                gitHubLink: "https://github.com/aalemanyz67/Weather-Application",          
              },
              {
                title:"Tasty Tasty App",
                description:"Recipe API finder application.",
                imageSrc: TastyTasty,
                deployedLink: "https://acolyte03.github.io/Recipe-Finder/",
                gitHubLink: "https://github.com/Acolyte03/Recipe-Finder",          
              },
            ].map((project, index) => (
                <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
                {/* <h2>{project.title}</h2> */}
                <Project
                  title={project.title}
                  description={project.description}
                  imgSrc={project.imgSrc}
                  deployedLink={project.deployedLink}
                  githubLink={project.githubLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  // Export Portfolio
  export default Portfolio;

            
