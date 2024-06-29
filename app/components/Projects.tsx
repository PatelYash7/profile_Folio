import React from "react";
import { FaGithub,FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  name: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  highlights: string[];
  githubUrl: string;
  deployedUrl: string;
  techStack:{"%oid":string}[];
}

interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => (
  <div className="mt-5 mb-5 p-6 bg-gradient-to-br from-blue-50 to-indigo-300 ">
    <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-300 pb-2 animate-fade-in">
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:scale-105 transition duration-300">
    {projects.map((project, index) => (
      <div 
        key={index} 
        className="mb-10 bg-white rounded-lg overflow-hidden tranform hover:scale-105 transition duration-300 animate-fade-in delay-100"
        // style={{animationDelay:`${index*150}ms`}}
        >
        <div className="p-6">
           <h3 className="text-xl font-semibold mb-2 text-indigo-700">{project.name}</h3>
           <p className="text-gray-600 mb-4">{project.description}</p>
           <h4 className="font-semibold text-indigo-600 mb-2">Key Features:</h4>
           <ul className="list-disc list-inside mb-4 text-gray-600">
             {project.highlights.map((highlight, idx) => (
               <li key={idx} className="mb-2">{highlight}</li>
             ))}
           </ul>  

           <div className="flex mb-4 space-x-4">
            <a
              href={project.githubUrl}
              className="flex items-center text-indigo-500 hover:text-indigo-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            ><FaGithub className="mr-2 size-7"/>
              
            </a>
            <a
              href={project.deployedUrl}
              className="flex items-center text-indigo-500 hover:text-indigo-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="mr-2 size-5" />
          
            </a>
        </div>

        <div className="text-gray-500">
          <h4 className="font-semibold text-indigo-600 mb-2">
            Tech Stack:
          </h4> 
          <div className="">
          {project.techStack.map((tech, idx) => (
            <ul>
               <li key={idx} className="mb-2">
                {tech["%oid"]}
                </li>
            </ul>
               
          ))}
          </div>
        </div>
        </div>
      </div>
    ))}
    </div>
  </div>
);

export default Projects;
