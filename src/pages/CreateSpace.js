import React from 'react';

const CreateSpace = () => {
    return (
      <div className='creat-space-class'>
        <div className='creat-space-back'>
          <h1>Donnez vie à votre projet</h1>
        </div>

        <div className='creat-space-info'>
          <h1>Que ce soit pour une rénovation complète ou une transformation
             partielle, nous prenons en charge chaque étape de votre projet.
              De la démolition à la finition, nous réalisons tous les travaux
              nécessaires : électricité, carrelage, peinture, placo, parquet…
              Chaque détail est soigneusement pensé pour créer un espace
              harmonieux, fonctionnel et à votre image. Faites-nous part de
              votre projet, et ensemble, donnons-lui vie.
          </h1>
        </div>

        <div className='create-spacelist'>
          <div class="new-section">
            <div class="border-left"></div>

            <div class="new-section-top">
              <div class="image-box">
                <img src='/media/metier/demolition1.jpg' alt=''></img>
              </div>
              <div class="text-box">
                <h1>Démolition</h1>
                <p><strong>Faites place au renouveau</strong><br></br>
                  Avant toute transformation, il faut parfois repartir de zéro.
                  Nous assurons la démolition partielle ou complète de vos espaces
                  en toute sécurité, en préparant le terrain pour votre futur
                  projet. Déconstruction maîtrisée, évacuation des gravats et
                  respect des normes : chaque étape est réalisée avec soin
                  pour un chantier propre et prêt à accueillir votre nouvelle vision.
                </p>
              </div>
            </div>

            <div class="new-section-bottom">
              <div class="image-box">
                <img src='/media/metier/electricien.jpeg' alt=''></img>
              </div>
              <div class="text-box">
                <h1>Électricité</h1>
                <p><strong>Un réseau sûr et performant pour un confort optimal</strong><br></br>
                  L'électricité est au cœur de tout espace moderne. Nous réalisons
                  l'installation et la mise aux normes de votre réseau électrique,
                  en intégrant éclairages, prises, interrupteurs et domotique selon
                  vos besoins. Sécurité, efficacité et adaptabilité : notre expertise
                  garantit un résultat fiable et sur mesure.
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <div className='service-reno'>
            <div class="container-reno">
              <div class="grid">
                <div class="card">
                  <div class="overlay">Expertise & Savoir-Faire</div>
                </div>
                <div class="card">
                  <div class="overlay">Respect des Délais</div>
                </div>
                <div class="card">
                  <div class="overlay">Qualité Garantie</div>
                </div>
                <div class="card">
                  <div class="overlay">Accompagnement Personnalisé</div>
                </div>
                <div class="card">
                  <div class="overlay">Gestion Complète du Chantier</div>
                </div>
                <div class="card">
                  <div class="overlay">Solutions Sur-Mesure</div>
                </div>
              </div>
            </div>
          </div>

          <div className='create-spacelist create-spacelist2'>
          <div class="new-section">
            <div class="border-left border-left1"></div>

            <div class="new-section-top">
              <div class="image-box">
                <img src='/media/metier/carreleur.jpg' alt=''></img>
              </div>
              <div class="text-box text-box1">
                <h1>Carrelage</h1>
                <p><strong>Des sols et murs élégants pour un style unique</strong><br></br>
                  Le carrelage apporte du caractère et de la durabilité à votre intérieur.
                   Que ce soit pour une cuisine, une salle de bain ou un sol complet, nous
                    posons avec précision des carreaux adaptés à vos envies et à votre usage
                    . Motifs, couleurs, formats : chaque détail est pensé pour sublimer votre espace.
                </p>
              </div>
            </div>

            <div class="new-section-bottom">
              <div class="image-box">
                <img src='/media/metier/peintre.jpeg' alt=''></img>
              </div>
              <div class="text-box text-box1">
                <h1>Peinture</h1>
                <p><strong>Une nouvelle couleur pour une nouvelle ambiance</strong><br></br>
                La peinture transforme instantanément un intérieur. Nous vous conseillons sur les
                 teintes et finitions les plus adaptées à votre projet, puis appliquons chaque couche
                  avec soin pour un rendu impeccable. Couleurs tendances, peintures techniques et
                   finitions soignées : chaque mur devient une expression de votre style.
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <div className='create-spacelist create-spacelist2'>
          <div class="new-section">
            <div class="border-left border-left1"></div>

            <div class="new-section-top">
              <div class="image-box">
                <img src='/media/metier/placo.jpeg' alt=''></img>
              </div>
              <div class="text-box text-box1">
                <h1>Placo</h1>
                <p><strong>Faites place au renouveau</strong><br></br>
                Créer, structurer, isoler : le placo est la solution idéale
                 pour repenser un espace. Nous installons cloisons, faux plafonds
                  et isolations pour optimiser votre intérieur selon vos exigences
                   en matière d'acoustique, d'esthétisme et de confort thermique.
                    Une installation rapide et précise pour un résultat harmonieux.
                </p>
              </div>
            </div>

            <div class="new-section-bottom">
              <div class="image-box">
                <img src='/media/metier/parquet.jpg' alt=''></img>
              </div>
              <div class="text-box text-box1">
                <h1>Parquet</h1>
                <p><strong>Chaleur et élégance sous vos pieds</strong><br></br>
                  Le parquet apporte une touche naturelle et intemporelle à votre intérieur.
                  Massif, contrecollé ou stratifié, nous vous conseillons sur le type de
                  bois le plus adapté et assurons une pose soignée pour un sol résistant
                   et esthétique. Un revêtement de caractère, parfait pour une ambiance
                    chaleureuse et raffinée.
                </p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    );
  }
  
  export default CreateSpace;
  