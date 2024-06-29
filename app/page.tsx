// app/page.tsx
import Header from './components/Header';
import Profile from './components/Profile';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import skillsData from '../data/skills.json';

interface Props {
  data: any;
  skillsDetails: any[]; 
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
         <Footer languages={data.languages} interests={data.interests} certificates={data.certificates} />
      </div>
    </div>
  );
};

export default Home;
