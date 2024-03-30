import { useState } from "react";
import { FilterOptions } from "../../utils/FilterOptions.js";
import Button from "../Button/Button";
import "./style.css"
import Card from "../Card/Card.jsx";

const projectsData = [
  {
    id: 1,
    title: "Arirock Portofolio",
    url_img: "/assets/img/projects/arirock.png",
    url_github: "https://github.com/farfandavid/arirock_portfolio",
    tags: ["#reactjs", "#html", "#js"]
  },
  {
    id: 2,
    title: "Comming Soon",
  },
  {
    id: 3,
    title: "Comming Soon",
  },
  {
    id: 4,
    title: "Comming Soon",
  },
  {
    id: 5,
    title: "Comming Soon",
  }
  ,
  {
    id: 6,
    title: "Comming Soon",
  }
  // Puedes añadir más objetos de proyecto aquí
];

function ProjectFilter() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredProjects = projectsData.filter(project => {
    return filter === 'all' || project.tags.includes(filter);
  });



  return (
    <div className="project-section">
      <div className="filters" style={{ display: "none" }}>
        <Button key={"0btn"} filter={filter} handleFilterChange={handleFilterChange} dataText="all" style="" /> |
        {FilterOptions.map((option, index) => (
          <Button key={index + "btn"} filter={filter} handleFilterChange={handleFilterChange} dataText={option} />
        ))}

      </div>
      <hr className="filter-hr" />
      <div className="projects-container">
        {filteredProjects.map(project => (
          <Card key={project.id + "project"} project={project}></Card>
        ))}
      </div>
    </div>
  );
}

export default ProjectFilter;