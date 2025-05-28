
import React from 'react';
import Header from '../components/Header';
import PersonalInfo from '../components/PersonalInfo';
import FamilyBackground from '../components/FamilyBackground';
import WorkExperience from '../components/WorkExperience';
import PersonalInterests from '../components/PersonalInterests';
import CurrentProjects from '../components/CurrentProjects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <PersonalInfo />
        <FamilyBackground />
        <WorkExperience />
        <PersonalInterests />
        <CurrentProjects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
