import { useParams } from "react-router-dom";

const projects = [
    {
      id: "1",
      title: "Projet 1",
      description: "Description rapide du projet 1.",
      details: "Détails complets du projet 1, expliquant en profondeur ce qui a été fait.",
      images: ["/media/projet/hotelZoologie/projetImgZoologie.png", "/media/"],
    },
    {
      id: "2",
      title: "Projet 2",
      description: "Description rapide du projet 2.",
      details: "Détails complets du projet 2, expliquant en profondeur ce qui a été fait.",
      images: ["/media/imagetestp2-1.jpg", "/media/imagetestp2-2.jpg"],
    },
  ];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <h2>Projet non trouvé</h2>;
  }

  return (
    <div className="projet-detail-class" >
      <div className="projet-detail-class-title">
        {project.images.map((img, index) => (
            <img key={index} src={img} alt={`Projet ${project.id} - ${index + 1}`} />
        ))}
        <h1>{project.title}</h1>
        <p>{project.details}</p>
      </div>
      <div className="projet-content">
        {project.images.map((img, index) => (
            <img key={index} src={img} alt={`Projet ${project.id} - ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;