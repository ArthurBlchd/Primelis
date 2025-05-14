'use client';

import React from 'react';
import { useTimelineScroll } from '../../hooks/useTimelineScroll';

const steps = [
  {
    date: '2021 - 2023',
    image: '/Logo_Step_1.png',
    title: 'Master Communication et Marketing en alternance',
    description: '2 ans en alternance à PPA Business School. Je découvre le SEO et décide d’appliquer ce que j’apprends en entreprise. Des résultats rapides sur des requêtes SEO local. Puis je me forme aussi au SEA et au Growth Marketing.',
  },
  {
    date: '2023 - 2024',
    image: '/Logo_Step_2.png',
    title: 'Marketing Manager – USA',
    description: '18 mois aux États-Unis chez WineEmotion USA en tant que responsable marketing digital : SEO, SEA, emailing, acquisition. Une expérience aussi exigeante qu’enrichissante, qui m’a fait grandir sur les plans professionnel et personnel. Je reviens en France avec une énergie nouvelle, beaucoup d’envie et d\'ambition.',
  },  
  {
    date: 'Aujourd’hui',
    image: '/Logo_Step_3.png',
    title: 'Retour à Paris – Je candidate chez Primelis',
    description: 'De retour en France avec une vraie expérience terrain, je cherche à intégrer Primelis. Vous gagnez un profil autonome, opérationnel et curieux, déjà formé sur des campagnes concrètes.',
  }
];

const TimelineSection: React.FC = () => {
  const { sectionRef, progressRef, stepRefs, activeIndex } = useTimelineScroll();

  return (
    <section
  ref={sectionRef}
  id="timeline"
  className="relative py-24 px-4 md:px-8 bg-[#1C1C1C] w-full overflow-hidden"
>
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter text-center mb-20">
      Mon parcours
    </h2>

    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-0 md:left-4 top-0 h-full w-1 bg-gray-700">
        <div
          ref={progressRef}
          className="absolute left-0 top-0 w-1 bg-[#6464ec] origin-top transition-all duration-300"
          style={{ height: '0%' }}
        />
      </div>

      <div className="space-y-16 pl-6 md:pl-12">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className="flex flex-col md:flex-row md:items-center gap-6 max-w-full"
          >
            {/* Date */}
            <div
              className={`font-semibold text-sm md:text-base min-w-[120px] ${
                activeIndex === index ? 'text-[#6464ec]' : 'text-gray-400'
              }`}
            >
              {step.date}
            </div>

            {/* Image + contenu */}
            <div className="flex items-center gap-6 max-w-[1000px]">
              <img
                src={step.image}
                alt={step.title}
                className="rounded-xl object-contain w-[100px] h-[100px]"
              />
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-300 max-w-xl">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default TimelineSection;
