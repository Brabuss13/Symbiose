import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const projects = [
    {
      id: "1",
      title: "Hôtel de la Zoologie",
      description: "Description rapide du projet 1.",
      details: "Bordeaux France",
      images: ["/media/projet/hotelZoologie/dfgdtggrt.png", "/media/"],
    },
    // {
    //   id: "2",
    //   title: "Projet 2",
    //   description: "Description rapide du projet 2.",
    //   details: "Détails complets du projet 2, expliquant en profondeur ce qui a été fait.",
    //   images: ["/media/imagetestp2-1.jpg", "/media/imagetestp2-2.jpg"],
    // },
  ];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const { t } = useTranslation();
  
  if (!project) {
    return <h2>Projet non trouvé</h2>;
  }
  return (
    <div className="projet-detail-class" >
      <div data-aos="fade-up" className="projet-detail-class-title">
        {project.images.map((img, index) => (
            <img key={index} src={img} alt={`Projet ${project.id} - ${index + 1}`} />
        ))}
        <h1>{project.title}</h1>
        <p>{project.details}</p>
      </div>
      <div data-aos="fade-up" className="projet-content">
        <div className="text-descri">
          <p>{t("text35")}</p>
        </div>
        <div className="img-listt">
          <div className="lignall">
            <div className="imgn1 im1"></div>
            <div className="imgn2 im2"></div>
          </div>
          <div className="lignall">
            <div className="imgn1 im3"></div>
            <div className="imgn2 im4"></div>
          </div>
          <div className="lign2">
            <div className="imgn2s im5"></div>
          </div>
          <div className="lignall">
            <div className="imgn1 im6"></div>
            <div className="imgn2 im7"></div>
          </div>
          <div className="lign2">
            <div className="imgn2s im8"></div>
          </div>
        </div>
        {/* {project.images.map((img, index) => (
            <img key={index} src={img} alt={`Projet ${project.id} - ${index + 1}`} />
        ))} */}
      </div>
    </div>
  );
};

export default ProjectDetails;