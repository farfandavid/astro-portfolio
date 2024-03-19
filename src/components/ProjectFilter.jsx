import { useState } from "react";

const projectsData = [
  {
    id: 1,
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
  /* SmtpJS.com - v3.0.0 */
  var Email = {
    send: function (a) {
      return new Promise(function (n, e) {
        a.nocache = Math.floor(1e6 * Math.random() + 1),
          a.Action = "Send";
        var t = JSON.stringify(a);
        Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
          n(e)
        })
      }
      )
    },
    ajaxPost: function (e, n, t) {
      var a = Email.createCORSRequest("POST", e);
      a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        a.onload = function () {
          var e = a.responseText;
          null != t && t(e)
        }
        ,
        a.send(n)
    },
    ajax: function (e, n) {
      var t = Email.createCORSRequest("GET", e);
      t.onload = function () {
        var e = t.responseText;
        null != n && n(e)
      }
        ,
        t.send()
    },
    createCORSRequest: function (e, n) {
      var t = new XMLHttpRequest;
      return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null,
        t
    }
  };


  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredProjects = projectsData.filter(project => {
    return filter === 'all' || project.tags.includes(filter);
  });

  const handleSend = () => {
    Email.send({
      SecureToken: "a349cbba-9b61-4066-9d92-f460f7110595",
      To: "farfetchdev@hotmail.com",
      From: "farfandavid34@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",
      Attachments: [
        {
          name: "smtpjs.png",
          path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png",
        },
      ],
    }).then((message) => alert(message));
    console.log('Send');
  };

  return (
    <div>
      <div className="filters">
        <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleFilterChange('all')}>All</button>
        <button className={filter === 'reactjs' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleFilterChange('#reactjs')}>#ReactJS</button>
        <button className={filter === 'astro' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleFilterChange('#astro')}>#Astro</button>
        <button className={filter === 'html' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleFilterChange('#html')}>#HTML</button>
        <button className={filter === 'js' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleFilterChange('#js')}>#JavaScript</button>
        <button className={filter === 'js' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleFilterChange('#mongodb')}>#MongoDB</button>
      </div>
      <div className="projects">
        {filteredProjects.map(project => (
          <div className="project" key={project.id} data-tags={project.tags.join(' ')}>
            <h3>{project.title}</h3>
            <img src="" alt={project.title} />
            <p>
              <a href={project.url_github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.url_deploy} target="_blank" rel="noopener noreferrer">Demo</a>
            </p>
          </div>
        ))}
      </div>
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ProjectFilter;