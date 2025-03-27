import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: "1",
    title: "Hôtel de la Zoologie",
    description: "Bordeaux France",
    details: "Détails complets du projet 1, expliquant en profondeur ce qui a été fait.",
    images: "/media/projet/hotelZoologie/zz3.avif",
  },
  // {
  //   id: "2",
  //   title: "Bientôt disponible",
  //   description: "",
  //   details: "Détails complets du projet 2, expliquant en profondeur ce qui a été fait.",
  //   images: "/media/projet/7.png",
  // },
];

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="projet-class">
      <div data-aos="fade-up" className="projet-class-box">
        <h1>{t("text30")}</h1>
        <p>{t("text31")}</p>
        <button>{t("text32")}</button>
      </div>
      <div data-aos="fade-up" className="projet-class-content">
        <div className="projet-class-content-title">
          <p>{t("text33")}
          </p>
        </div>
        <div className="projet-class-content-projet">
          <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <img src={project.images} alt={project.title}></img>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <Link className="link-projet" to={`/projects/${project.id}`}>{t("text34")}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
