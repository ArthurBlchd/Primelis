import React from 'react';

// Array of portfolio projects with unique content
const portfolioProjects = [
  {
    client: "WineEmotion USA",
    title: "Optimisation SEO & Contenu",
    description: "Lorsque j'ai rejoint WineEmotion USA, le site disposait déjà d'une stratégie SEO, mais il connaissait une perte significative de trafic organique. J'ai identifié les points bloquants, puis j'ai :",
    achievements: [
      "Repositionné le site en un e-commerce pour correspondre à l'évolution de l'intention de recherche",
      "Restructuré l'arborescence pour améliorer le maillage interne",
      "Créé de nouveaux contenus SEO, mise à jour d'ancien posts et pages et ajout de backlinks."
    ],
    results: "Le site a renoué avec la croissance après une chute de traffic, avec un retour progressif sur la première page de Google pour des mots-clés business clés."
  },
  {
    client: "WineEmotion USA",
    title: "Campagne Google Ads",
    description: "Lancement d'une campagne de conversion pour des produits high-tickets dans un marché de niche. Alors très dépendant du SEO, le directeur du dévelopement voulait tester d'autres canaux d'acquisition et surtout augmenter le nombre de ventes",
    achievements: [
      "Création de landing pages optimizées pour maximiser la conversion",
      "Structuration de la campagne par intention de recherche et produits",
      "Copywriting des annonces",
      "Tracking et monitoring des campagnes"
    ],
    results: "+27 leads qualifiés par mois, CTR moyen de 12,45%, coût d’acquisition maîtrisé."
  },
  {
    client: "WineEmotion USA",
    title: "Création de features pour acquérir plus de leads",
    description: "Bon traffic sur le site mais pas assez de leads récupérés par les formulaires.",
    achievements: [
      "Développement d’un ROI Calculator dynamique",
      "Intégration d’une carte interactive des clients installés",
      "Création d'un Lead Magnet téléchargeable sur l'un des tops articles de blog."
    ],
    results: "Acquisition de 12 nouveaux leads chaque mois."
  }
];

const ProjectSection: React.FC = () => {
    return (
        <section id="projects" className="w-full bg-[#1C1C1C] py-24 px-4">
        <div className="max-w-7xl w-full mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-16">
            📊 Ce que j’ai fait dernièrement
          </h2>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {portfolioProjects.map((project, i) => (
              <div key={i} className="relative group">
                {/* Coins hover */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#555bd0] rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#555bd0] rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#555bd0] rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#555bd0] rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
                <div className="bg-[#2A2A2A] rounded-2xl p-6 flex flex-col justify-between min-h-[360px] transition-shadow shadow-md group-hover:shadow-xl">
                  <div>
                    <p className="text-sm text-[#555bd0] mb-2 font-medium">{project.client}</p>
                    <h3 className="text-xl font-extrabold text-white mb-4 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mb-4 text-left">
                      {project.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-300 mt-4">
                      <span className="font-semibold text-white">Résultats :</span> {project.results}
                    </p>
                  </div>
                  <span className="text-right mt-6 text-white text-sm group-hover:text-[#555bd0] transition-colors duration-300">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ProjectSection;