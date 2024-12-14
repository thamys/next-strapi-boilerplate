import React from 'react';
import HeroSection from '../components/Hero';
import HistorySection from '../components/History';
import InstructorsSection from '../components/Instructors';
import ValuesSection from '../components/Values';
import GallerySection from '../components/Gallery';
import HighlightsSection from '../components/Highlights';

const About = () => {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <HistorySection />
      <InstructorsSection />
      <ValuesSection />
      <GallerySection />
    </>
  );
};

export default About;