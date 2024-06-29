// app/page.tsx
import Header from './components/Header';
import Profile from './components/Profile';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import skillsData from '../data/skills.json'; // Assuming you have a local JSON file for skills

interface Props {
  data: any; // Define a proper type based on your JSON structure
  skillsDetails: any[]; // Define a proper type based on your skills JSON structure
}

const Home: React.FC<Props> = async () => {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-4xl p-4'>
         <Header {...data.basics} />
         <Profile {...data.basics} />
         <WorkExperience work={data.work} />
         <Education education={data.education} />
         <Skills skills={data.skills} skillsDetails={skillsData} />
         <Projects projects={data.projects}/>
      </div>
    </div>
  );
};

export default Home;
