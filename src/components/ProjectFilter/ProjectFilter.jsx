import { useState } from "react";
import { Email } from "../../utils/smtp.js";
import { FilterOptions } from "../../utils/FilterOptions.js";
import Button from "../Button/Button";
import "./style.css"
import Card from "../Card/Card.jsx";

const projectsData = [
  {
    id: 1,
    title: "Example",
    url_img: "example.jpg",
    url_github: "repository_url",
    url_deploy: "url.com",
    tags: ["#reactjs", "#astro", "#html", "#js"]
  },
  {
    id: 2,
    title: "Example",
    url_img: "example.jpg",
    url_github: "repository_url",
    url_deploy: "url.com",
    tags: ["#reactjs", "#astro", "#html", "#js"]
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
    <div >
      <div className="filters" style={{ display: "none" }}>
        <Button key={"0btn"} filter={filter} handleFilterChange={handleFilterChange} dataText="all" style="" /> |
        {FilterOptions.map((option, index) => (
          <Button key={index + "btn"} filter={filter} handleFilterChange={handleFilterChange} dataText={option} style="colored" />
        ))}
      </div>
      <hr />
      <div className="projects">
        {filteredProjects.map(project => (
          <Card key={project.id + "project"} project={project}></Card>
        ))}
      </div>
    </div>
  );
}

export default ProjectFilter;