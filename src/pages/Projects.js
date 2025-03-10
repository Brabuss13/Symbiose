import { Link } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "Projet 1",
    description: "Description rapide du projet 1.",
    details: "Détails complets du projet 1, expliquant en profondeur ce qui a été fait.",
    images: "/media/projet/7.png",
  },
  {
    id: "2",
    title: "Projet 2",
    description: "Description rapide du projet 2.",
    details: "Détails complets du projet 2, expliquant en profondeur ce qui a été fait.",
    images: "/media/projet/7.png",
  },
];

const Projects = () => {
  return (
    <div className="projet-class">
      <div className="projet-class-box">
        <h1>Nos Projets</h1>
        <p>Découvrez nos réalisations</p>
        <button>Voir projets</button>
      </div>
      <div className="projet-class-content">
        <div className="projet-class-content-title">
          <p>Chaque projet est une transformation unique, pensée et
             réalisée avec soin. De la rénovation complète à l'aménagement
              sur mesure, voici quelques-unes de nos créations. D'autres
               réalisations viendront s'ajouter au fil du temps, toujours
                avec la même exigence de qualité et de design
          </p>
        </div>
        <div className="projet-class-content-projet">
          <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <img src={project.images} alt={project.title}></img>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <Link className="link-projet" to={`/projects/${project.id}`}>Voir plus</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
