import React from 'react';
import Hero from './Hero';
import CategoryGrid from './CategoryGrid';
import DiscoverSection from './DiscoverSection';
import SupportArtists from './SupportArtists';
import Testimonials from './Testimonials';
import ProjectMembers from './ProjectMembers'; // Ensure the path is correct

const HomePage = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="categories">
        <CategoryGrid />
      </section>
      <DiscoverSection />
      <SupportArtists />
      <Testimonials />
      <ProjectMembers />
    </>
  );
};

export default HomePage;