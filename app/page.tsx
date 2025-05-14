"use client";

import {
  ArrowDownCircle,
  Mail,
  Menu,
  X,
  Award,
  ExternalLink,
  ChevronRight,
  Linkedin,
  Search,
  CheckCircle2,
  Globe,
  Clock,
} from "lucide-react";
import { Mail as MailIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProjectSection from "./components/ProjectSection";
import TimelineSection from './components/TimelineSection';
import { useContactFadeIn } from "../hooks/contactAnimation";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useContactFadeIn();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 🚀 Fix video error type definitively
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Erreur video:", e);
  };
  

  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const handleMouseEnter = (card: HTMLDivElement) => {
    if (!card.classList.contains("active")) {
      const overlay = card.querySelector(".overlay") as HTMLDivElement | null;
      const text = card.querySelector(".text-content") as HTMLElement | null;

      if (overlay && text) {
        overlay.style.width = "33%";
        text.style.color = "#000";
      }
    }
  };

const handleMouseLeave = (card: HTMLDivElement) => {
    if (!card.classList.contains("active")) {
      const overlay = card.querySelector(".overlay") as HTMLDivElement | null;
      const text = card.querySelector(".text-content") as HTMLElement | null;

      if (overlay && text) {
        overlay.style.width = "0";
        text.style.color = "transparent";
      }
    }
  };

  const handleStepClick = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  const services = [
    { id: 1, icon: "WWW", title: "Website Creation", link: "#" },
    { id: 2, icon: "SEO", title: "Search Engine Optimization & Local SEO", link: "#" },
    { id: 3, icon: "ADS", title: "Google ADS Campaign", link: "#" },
    { id: 4, icon: "EMAIL", title: "Emailing & Copywriting", link: "#" },
  ];

  const designProcess = [
    {
      number: "01.",
      title: "Website Creation",
      context: "Developed for Alpes3D.com when I was student, I am also working every day on a Worpress for WineEmotion USA.",
      description:
        "I've designed and developed clean, responsive websites with a focus on user experience and conversion. By implementing intuitive navigation, high quality images, fast-loading pages, and clear CTAs. I've used the CMS Wordpess for this. I've added lead magnets and functionality to improver the user experiences as ROI Calculator, Map of the customers.",
      keywords: ["Local SEO", "Competitor Analysis", "Market Research"],
    },
    {
      number: "02.",
      title: "Local SEO",
      context: "Developed for Alpes3D, a small local company in the field of pest control.",
      description:
        "I enhanced the company's local search presence by fully optimizing their Google My Business profile with accurate business details, high-quality images, and strategic keywords. I also encouraged satisfied customers to leave positive reviews, boosting local ranking and trust (+210 reviews with cards that send directly to the Google my business) Additionally. These efforts increased local search impressions by 40% and boosted customer calls and website visits by 25% within three months.",
      keywords: ["Wordpress", "CMS", "Development"],
    },
    {
      number: "03.",
      title: "SEO",
      context:
        "For Alpes3D, small local company in the field of pest control and currently for WineEmotion USA.",
      description:
        "I've created pages for every services offer by Alpes3D that targeted business keywords + city. These pages were on 1st page of Google, and some on Top 3. For WineEmotion USA, I've wrote high quality content pages for SEO to target business keywords and blog posts. I've get new backlinks from our partners and press releases. I took care of the speed of the website to be very functionnal. Results: SEO is the main channel of acquisition with + 1.5K clicks per months.",
      keywords: ["Redaction SEO", "Netlinking", "Technical SEO"],
    },
    {
      number: "04.",
      title: "Google ADS",
      context: "Currently working on a campaign for WineEmotion USA + wrote Ads for Alpes3D",
      description:
        "I wrote the campaign and learn how to run a Google Ads Campaign with an expert that worked in agency. Currently, I am setting up a campaign for WineEmotion USA.",
      keywords: ["Campaign", "Paid Marketing", "Ads"],
    },
    {
      number: "05.",
      title: "Emailing",
      context: "For WineEmotion USA, using MailChimp",
      description:
        "I launched sveral campaign to target more than 5000 contacts. I've warmed up the domain and clean the datas. Results: 98% Successful Deliveries, 43% Open Rate",
      keywords: ["Emailing", "Open Rate"],
    },
  ];

  const CardIcon = () => (
    <div className="relative w-6 h-6">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2" />
      <div className="absolute top-0 left-1/2 h-full w-0.5 bg-white transform -translate-x-1/2" />
    </div>
  );

  const steps = [
    {
      title: "Master Communication & Digital Marketing",
      date: "2021 – 2023",
      image: "/Logo_Step_1.png",
      description:
        "2 ans en alternance à PPA Business School. Je découvre le SEO et décide d'appliquer ce que j'ai appris en théorie dans mon entreprise d'alternance. Des résultats rapides sur des requêtes SEO local, je découvre alors le pouvoir du SEO. Je me penche ensuite sur le Growth, je veux tout comprendre sur le sujet. Je décide de suivre une formation en Growth marketing en ligne. Je développe mes skills en SEO (avec Greg d'Aboville) et en SEA (avec Brice de Soras), entre autres.",
    },
    {
      title: "Marketing Manager – USA",
      date: "2023 – 2024",
      image: "/Logo_Step_2.png",
      description:
        "18 mois aux États-Unis chez WineEmotion USA où je travaille sur les sujets SEO, SEA, emailing, prospection, amélioration de la conversion, et je commenc à coder. Sans oublier l'anglais !",
    },
    {
      title: "Retour en France - Je candidate chez Primelis Agency",
      date: "2024 – Aujourd’hui",
      image: "/Logo_Step_3.png",
      description:
        "Après 18 mois aux USA à piloter des projets SEO/SEA, je suis revenu à Paris avec une seule ambition : rejoindre une agence comme Primelis. En retour, vous gagnez un profil opérationnel, autonome et orienté performance, capable de s’adapter vite.",
    },
  ];

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = timelineRef.current;
      const progress = progressRef.current;

      if (!section || !progress) return;

      const rect = section.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const offsetTop = section.offsetTop;
      const height = section.offsetHeight;

      const scrolled = Math.min(height, Math.max(0, scrollTop + window.innerHeight - offsetTop));
      const percentage = (scrolled / height) * 100;

      progress.style.height = `${percentage}%`;

      stepRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const refTop = ref.getBoundingClientRect().top;
        const refBottom = ref.getBoundingClientRect().bottom;
        if (refTop < window.innerHeight * 0.5 && refBottom > 0) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#1C1C1C] overflow-x-hidden">
      <div
        className="relative"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          backgroundColor: "#1C1C1C",
        }}
      >
        {/* Header avec grille */}
        <header className="z-50">
          <div className="max-w-full md:max-w-[1400px] mx-auto px-4 md:px-12 py-0 mt-8">
            <div className="flex items-center justify-between">
              {/* Bouton Hamburger (visible sur mobile uniquement) */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Navigation */}
              <nav
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } md:flex md:items-center absolute md:static top-0 left-0 w-full md:w-auto bg-[#1C1C1C] md:bg-transparent z-40 px-4 py-0 md:p-0 transition-all duration-300 ease-in-out`}
              >
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                  <li>
  <a
    href="/Resume_Arthur_Blanchard.pdf" // path to your resume file
    download
    className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
    onClick={() => setIsMenuOpen(false)}
  >
    Télécharger Curriculum Vitae
  </a>
</li>
                </ul>
              </nav>

              {/* Icônes et bouton Contact (toujours visibles) */}
              <div className="flex items-center space-x-3">
  <Link
    href="https://linkedin.com/in/arthur-blanchard-345693202"
    target="_blank"
    className="text-gray-300 hover:text-white transition-colors"
  >
    <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
  </Link>

  <Button 
  className="rounded-full bg-gradient-to-br from-[#6464ec]/20 to-[#555bd0]/20 text-white hover:from-[#6464ec]/40 hover:to-[#555bd0]/40 text-xs md:text-base px-4 py-2 md:px-6 md:py-3"
  onClick={() => window.location.href = 'mailto:arthurbld49@gmail.com'}
>
  Envoyer un mail
</Button>
</div>
            </div>
          </div>
        </header>

        {/* Hero Section avec grille */}
        <section className="relative min-h-screen px-4 md:px-12 z-10 border-b border-gray-700 mt-16">
          <div className="max-w-[1400px] mx-auto w-full">
            {/* Line 1 */}
            <div className="flex flex-col md:flex-row items-center h-auto mb-4 md:mb-0">
              <div className="w-full md:w-[70%] mb-2 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl sm:text-6xl md:text-[6rem] lg:text-[8.5rem] xl:text-[9.5rem] font-black text-white uppercase tracking-tighter leading-[0.9]"
                  style={{ fontStretch: "condensed" }}
                >
                  Hi! I'm Arthur
                </motion.div>
              </div>

              <div className="hidden md:flex w-full md:w-[30%] relative justify-center md:justify-end">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative z-10"
                >
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    playsInline
                    muted
                    onError={handleVideoError}
                    className="w-64 md:w-[30vw] max-w-[300px] rounded-full"
                  >
                    <source src="/memoji.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </div>

  {/* Line 2 */}
  <div className="flex flex-col md:flex-row items-center h-auto mt-4 md:mt-0 mb-8 md:mb-0">
              <div className="hidden md:flex w-full md:w-[20%] mt-2 md:mt-0">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-sm text-gray-400 max-w-[300px] text-center md:text-left"
                >
                Après 18 mois d’expérience en marketing digital aux États-Unis, je cherche à rejoindre une agence ambitieuse comme Primelis pour continuer à faire croître des marques grâce au SEO & Google Ads
                </motion.p>
              </div>

              <div className="w-full md:w-[80%]">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-6xl sm:text-6xl md:text-[6rem] lg:text-[8.5rem] xl:text-[9.5rem] font-black text-white uppercase tracking-tighter leading-[0.9] text-left md:text-right"
                  style={{ fontStretch: "condensed" }}
                >
                  Digital Marketing
                </motion.p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-center"
          >
            <p className="text-sm uppercase tracking-widest mb-2">Scroll</p>
            <ArrowDownCircle className="w-8 h-8 mx-auto animate-bounce" />
          </motion.div>
        </section>
      </div>

      
      
      <ProjectSection /> {/* 👉 maintenant le composant est utilisé */}


<section className="bg-white py-20 px-6 md:px-12 rounded-[2rem] mx-4 md:mx-16 my-20 relative overflow-hidden">
  <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12">

    {/* Bloc photo */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <div className="w-[450px] h-[450px] rounded-[2rem] overflow-hidden shadow-lg border border-gray-200">
        <img
          src="/Photo-NYC.png"
          alt="Arthur Blanchard"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="w-full lg:w-1/2 text-left">
      <h2 className="text-5xl font-black text-[#1C1C1C] mb-6">À propos de moi</h2>
      <p className="text-lg text-gray-800 mb-6 leading-relaxed">
        Je m’appelle <strong>Arthur Blanchard</strong>.<br /><br />
        Après un Master en Communication et Marketing puis une formation en Growth Marketing, J’ai quitté la France pour m’installer aux États-Unis pendant 18 mois. J’ai rejoint WineEmotion USA, une entreprise qui équipe les plus beaux hôtels, bars à vins, lounge, aéroports et stades américains avec des distributeurs de vin haut de gamme.<br /><br />
        J’y ai géré ces leviers digitaux : SEO, campagnes Google Ads, refontes de pages web, emailing, cold emailing, prospection.
        <br /><br />
        Aujourd’hui de retour à Paris, je suis à la recherche d’une opportunité chez Primelis où je pourrai mettre en application mes compétences, apprendre, et contribuer à des projets ambitieux.
      </p>
      <button
  className="mt-4 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-br from-[#6464ec] to-[#555bd0] hover:from-[#6464ec]/90 hover:to-[#555bd0]/90 transition"
  onClick={() => window.location.href = 'mailto:arthurbld49@gmail.com'}
>
  Me contacter
</button>


    </div>
  </div>
</section>


<div className="bg-[#1C1C1C] px-4">
  <div className="max-w-[1400px] mx-auto w-full">
    <TimelineSection />
  </div>
</div>



      {/* Section Services */}
      <section id="WHATIDO" className="py-20 px-4 md:px-8 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter text-center mb-20"
          >    
            Compétences
          </motion.h2>

          <div className="services-container">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.id * 0.2 }}
                className={`service-card ${activeCard === service.id ? "active" : ""}`}
                tabIndex={0}
                onClick={() => handleCardClick(service.id)}
                onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(service.id);
                  }
                }}
              >
                <div className="overlay" />
                <div className="icon">{service.icon}</div>
                <div className="text-content">{service.title}</div>                            
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 px-6 md:px-12 bg-[#1C1C1C]">
  <div className="max-w-[1400px] mx-auto">
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter text-center mb-20">
      Les Outils que j'utilise 
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          name: "Google Search Console",
          category: "SEO",
          description: "Le seul outil dont tu as besoin pour ranker n°1 sur Google.",
          logo: "SearchConsole.png"
        },
        {
          name: "Google Ads",
          category: "SEA",
          description: "Pour générer des leads chauds grâce à des campagnes rentables.",
          logo: "GoogleAdsIcon.png"
        },
        {
          name: "GA4",
          category: "Analytics",
          description: "Suivi des KPIs et analyse du parcours utilisateur complet.",
          logo: "GA4Icon.png"
        },
        {
          name: "WordPress",
          category: "CMS",
          description: "Le CMS que je maîtrise pour créer des pages optimisées.",
          logo: "/WordpressIcon.png"
        },
        {
          name: "Semrush",
          category: "SEO",
          description: "Audit sémantique, suivi des mots-clés et analyse concurrentielle.",
          logo: "/Semrush.png"
        },
        {
          name: "Lemlist",
          category: "Automatisation",
          description: "Pour connecter les outils et automatiser les tâches répétitives.",
          logo: "Lemlist.png"
        },
        {
          name: "Shopify",
          category: "Emailing",
          description: "Création de newsletters, segmentation et envoi à grande échelle.",
          logo: "/Shopify.png"
        },
        {
          name: "Bricks Builder",
          category: "Web Design",
          description: "Création de landing pages flexibles et performantes sur WordPress.",
          logo: "/public/bricks.png"
        },
      ].map((tool, i) => (
        <div key={i} className="relative group">
          {/* Coins en hover */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#555bd0] rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#555bd0] rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#555bd0] rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#555bd0] rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Bloc de contenu */}
          <div className="bg-[#2A2A2A] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
            <div className="mb-4">
              <img src={tool.logo} alt={tool.name} className="w-20 h-20" />
            </div>
            <p className="text-sm text-[#555bd0] uppercase font-medium mb-1">
              {tool.category}
            </p>
            <h3 className="text-xl font-extrabold text-white mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{tool.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="bg-[#1C1C1C] text-white py-20 px-6 md:px-12" id="contact-section">
  <div className="max-w-[800px] mx-auto text-center">
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter text-center mb-20">Envie d’en discuter de vive voix ?</h2>
    <p className="text-lg text-gray-300 mb-8 fade-in">
      Disponible immédiatement – Profil opérationnel capable de piloter l'acquisition SEO/SEA.
    </p>
    <div className="space-y-4">
      <div className="text-lg fade-in delay-1">📧 <strong>Email :</strong> arthur.blanchard@gmail.com</div>
      <div className="text-lg fade-in delay-2">📞 <strong>Téléphone :</strong> +33 7 82 63 17 28</div>
      <div className="text-lg fade-in delay-3">📍 <strong>Address :</strong> 1114 Calanda Ave – 32807 Orlando FL USA</div>
    </div>
  </div>
</section>

<style jsx>{`
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .delay-1 {
    transition-delay: 0.2s;
  }

  .delay-2 {
    transition-delay: 0.4s;
  }

  .delay-3 {
    transition-delay: 0.6s;
  }
`}</style>

    </main>
  );
}
