import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-4xl font-bold">About ThahaX</h1>
        <p className="mt-4 text-lg">Reliable Information. Empowered Citizens.</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          ThahaX is a platform dedicated to providing accurate and updated information 
          about government services. Our goal is to make public service information 
          accessible, clear, and trustworthy for everyone.
        </p>
      </section>
    </div>
  );
};

export default About;
