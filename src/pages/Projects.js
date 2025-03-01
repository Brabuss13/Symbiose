import { Link } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "Projet 1",
    description: "Description rapide du projet 1.",
    details: "Détails complets du projet 1, expliquant en profondeur ce qui a été fait.",
    images: "/media/imagetestp1-1.avif",
  },
  {
    id: "2",
    title: "Projet 2",
    description: "Description rapide du projet 2.",
    details: "Détails complets du projet 2, expliquant en profondeur ce qui a été fait.",
    images: "/media/imagetestp2-1.jpg",
  },
];

const Projects = () => {
  return (
    <div className="projet-class">
      <div className="projet-class-box">
        <h1>Nos Projets</h1>
      </div>
      <div className="projet-class-content">
        <div className="projet-class-content-title">
          <h1>Projets</h1>
        </div>
        <div className="projet-class-content-projet">
          <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <img src={project.images} alt={project.title}></img>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <Link to={`/projects/${project.id}`}>Voir plus</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
