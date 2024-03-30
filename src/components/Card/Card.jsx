import "./card.css";

function Card({ project }) {



  return <>
    <div className="card">

      {project.url_img ?
        <img src={project.url_img} alt={""} /> :
        <div className="comming-soon">Comming Soon</div>
      }

      <div className="card-info">
        <div className="card-top">
          <h3>{project.title ?? "Error"}</h3>
          <p>
            {project.tags?.map((tag, index) => (
              <span key={index + "span"} className="card-tag colored" data-text={tag} >{tag}</span>
            ))
            }
          </p>
        </div>
        <div className="card-link">
          {project.url_github && <a href={project.url_github} target="_blank" rel="noopener noreferrer">
            <i className="devicon-github-original"></i>
          </a>}
          {project.url_deploy && <a href={project.url_deploy} target="_blank" rel="noopener noreferrer">
            <i className="devicon-googlecloud-plain"></i>
          </a>}

        </div>
      </div>

    </div>
  </>
}

export default Card;