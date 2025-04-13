import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const projects = [
    {
      id: "1",
      title: "Hôtel de la Zoologie",
      description: "Description rapide du projet 1.",
      details: "Bordeaux France",
      images: ["/media/projet/hotelZoologie/dfgdtggrt.png", "/media"],
      descri: "text35",
      backgrounds: [
        "/media/projet/hotelZoologie/zz1.avif",
        "/media/projet/hotelZoologie/zz2.avif",
        "/media/rfggrgg.avif",
        "/media/projet/hotelZoologie/zz5.avif",
        "/media/projet/hotelZoologie/zz3.avif",
        "/media/projet/hotelZoologie/zz6.avif",
        "/media/projet/hotelZoologie/zz7.avif",
        "/media/projet/hotelZoologie/zz4.avif",
      ],
    },
    {
      id: "2",
      title: "Sebasto",
      description: "Description rapide du projet 2.",
      details: "Paris France",
      images: ["/media/projet/sebasto/m18.jpg"],
      descri: "text73",
      backgrounds: [
        "/media/projet/sebasto/m1.jpg",
        "/media/projet/sebasto/m2.jpg",
        "/media/projet/sebasto/m3.jpg",
        "/media/projet/sebasto/m4.jpg",
        "/media/projet/sebasto/m10.jpg",
        "/media/projet/sebasto/m5.jpg",
        "/media/projet/sebasto/m9.jpg",
        "/media/projet/sebasto/m8.jpg",
        "/media/projet/sebasto/m7.jpg",
        "/media/projet/sebasto/m6.jpg",
        "/media/projet/sebasto/m11.jpg",
        "/media/projet/sebasto/m12.jpg",
        "/media/projet/sebasto/m13.jpg",
        "/media/projet/sebasto/m14.jpg",
        "/media/projet/sebasto/m15.jpg",
        "/media/projet/sebasto/m16.jpg",
        "/media/projet/sebasto/m17.jpg",
        "/media/projet/sebasto/m18.jpg",
        "/media/projet/sebasto/m19.jpg",
        "/media/projet/sebasto/m21.jpg",
        "/media/projet/sebasto/m22.jpg",
        "/media/projet/sebasto/m20.jpg",
      ],
    },
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
          <p>{t(project.descri)}</p>
        </div>
        <div className="img-listt">

        {(project.backgrounds[0] || project.backgrounds[1]) && (
          <div className="lignall">
            {project.backgrounds[0] && (
              <div className="imgn1"
              style={{ backgroundImage: `url(${project.backgrounds[0]})` }}>
              </div>
            )}
            {project.backgrounds[1] && (
              <div className="imgn2"
              style={{ backgroundImage: `url(${project.backgrounds[1]})` }}>
              </div>
            )}
          </div>
        )}

        {(project.backgrounds[2] || project.backgrounds[3]) && (
          <div className="lignall">
            {project.backgrounds[2] && (
              <div className="imgn1"
              style={{ backgroundImage: `url(${project.backgrounds[2]})` }}>
              </div>
            )}
            {project.backgrounds[3] && (
              <div className="imgn2"
              style={{ backgroundImage: `url(${project.backgrounds[3]})` }}>
              </div>
            )}
          </div>
        )}

        {project.backgrounds[4] && (
          <div className="lign2">
              <div className="imgn2s"
              style={{ backgroundImage: `url(${project.backgrounds[4]})` }}>
              </div>
          </div>
        )}

        {(project.backgrounds[5] || project.backgrounds[7]) && (
          <div className="lignall">
            {project.backgrounds[5] && (
              <div className="imgn1"
              style={{ backgroundImage: `url(${project.backgrounds[5]})` }}>
              </div>
            )}
            {project.backgrounds[7] && (
              <div className="imgn2"
              style={{ backgroundImage: `url(${project.backgrounds[7]})` }}>
              </div>
            )}
          </div>
        )}

        {project.backgrounds[6] && (
          <div className="lign2">
              <div className="imgn2s"
              style={{ backgroundImage: `url(${project.backgrounds[6]})` }}>
              </div>
          </div>
        )}

        {(project.backgrounds[8] || project.backgrounds[9]) && (
          <div className="lignall">
            {project.backgrounds[8] && (
              <div className="imgn1"
              style={{ backgroundImage: `url(${project.backgrounds[8]})` }}>
              </div>
            )}
            {project.backgrounds[9] && (
              <div className="imgn2"
              style={{ backgroundImage: `url(${project.backgrounds[9]})` }}>
              </div>
            )}
          </div>
        )}

        {(project.backgrounds[10] || project.backgrounds[11]) && (
          <div className="lignall">
            {project.backgrounds[10] && (
              <div className="imgn1"
              style={{ backgroundImage: `url(${project.backgrounds[10]})` }}>
              </div>
            )}
            {project.backgrounds[11] && (
              <div className="imgn2"
              style={{ backgroundImage: `url(${project.backgrounds[11]})` }}>
              </div>
            )}
          </div>
        )}

        {project.backgrounds[12] && (
          <div className="lign2">
              <div className="imgn2s"
              style={{ backgroundImage: `url(${project.backgrounds[12]})` }}>
              </div>
          </div>
        )}

        {(project.backgrounds[13] || project.backgrounds[14]) && (
          <div className="lignall">
            {project.backgrounds[13] && (
              <div className="imgn1"
              style={{ backgroundImage: `url(${project.backgrounds[13]})` }}>
              </div>
            )}
            {project.backgrounds[14] && (
              <div className="imgn2"
              style={{ backgroundImage: `url(${project.backgrounds[14]})` }}>
              </div>
            )}
          </div>
        )}

        {(project.backgrounds[15] || project.backgrounds[16]) && (
          <div className="lignall">
            {project.backgrounds[15] && (
              <div className="imgn1"
              style={{ backgroundImage: `url(${project.backgrounds[15]})` }}>
              </div>
            )}
            {project.backgrounds[16] && (
              <div className="imgn2"
              style={{ backgroundImage: `url(${project.backgrounds[16]})` }}>
              </div>
            )}
          </div>
        )}

        {(project.backgrounds[17] || project.backgrounds[18]) && (
          <div className="lignall">
            {project.backgrounds[17] && (
              <div className="imgn1"
              style={{ backgroundImage: `url(${project.backgrounds[17]})` }}>
              </div>
            )}
            {project.backgrounds[18] && (
              <div className="imgn2"
              style={{ backgroundImage: `url(${project.backgrounds[18]})` }}>
              </div>
            )}
          </div>
        )}

        {(project.backgrounds[19] || project.backgrounds[20]) && (
          <div className="lignall">
            {project.backgrounds[19] && (
              <div className="imgn1"
              style={{ backgroundImage: `url(${project.backgrounds[19]})` }}>
              </div>
            )}
            {project.backgrounds[20] && (
              <div className="imgn2"
              style={{ backgroundImage: `url(${project.backgrounds[20]})` }}>
              </div>
            )}
          </div>
        )}

        {project.backgrounds[21] && (
          <div className="lign2">
              <div className="imgn2s"
              style={{ backgroundImage: `url(${project.backgrounds[21]})` }}>
              </div>
          </div>
        )}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;