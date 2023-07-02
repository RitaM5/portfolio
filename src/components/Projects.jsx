import React from 'react';
import Card from './Card';
import learnlingo from '../assets/learnlingo.png';
import disney from '../assets/disney.png';
import carrer from '../assets/carrer.png';

const Projects = () => {
 
  const projects = [
    {
      id: 1,
      src: learnlingo,
      details:"This is Language learning platform. It's a classes enrollment project.",
      livesite: "https://summer-camp-client-80c4b.web.app/",
      client: "https://github.com/RitaM5/Learn-Lingo-client",
      server: "https://github.com/RitaM5/Learn-Lingo-server"
    },
    {
      id: 2,
      src: disney,
      details:"This is Disney dolls online shop market single page web application.",
      livesite: "https://disney-toys-client.web.app/",
      client: "https://github.com/RitaM5/Disney-toys-shop-client",
      server: "https://github.com/RitaM5/Disney-toys-shop-server"
    },
    {
      id: 3,
      src: carrer,
      details:"It's a Job applied mini single page web application project",
      livesite: "https://carrer-zone.netlify.app/",
      client: "https://github.com/RitaM5/Carrer-Zone",
      server: "https://github.com/RitaM5/Carrer-Zone"
    },
    
  ];
  const seeDemo = (livesite) => {
    window.location.href = livesite; 
  };
  const handleLink1Click = (client) => {
    window.location.href = client; 
  };

  const handleLink2Click = (server) => {
    window.location.href = server;
  };
  return (
    <>
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-12 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-5">
          {projects.map((project, i) => <Card
           key={project?.id} project={project}
           i={i}
           handleLink1Click={handleLink1Click}
           handleLink2Click={handleLink2Click}
           seeDemo={seeDemo}
           >
           </Card>)}
        </div>
      </div>

    </div>
         
    </>
  );
};

export default Projects;
