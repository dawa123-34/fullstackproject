import React from 'react'

const About = () => {
  return (
          <div className="bg-gray-100">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white text-center py-16">
              <h1 className="text-4xl font-bold">About Us</h1>
              <p className="mt-2 text-lg">We are dedicated to delivering innovative solutions.</p>
            </section>
      
            {/* About Content */}
            <section className="container mx-auto px-6 py-12 text-center">
              <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
              <p className="mt-4 text-lg text-gray-600">
                We are a passionate team focused on providing the best solutions for our customers.
              </p>
            </section>
      
            {/* Team Section */}
            <section className="bg-white py-12">
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                      <img src={member.image} alt={member.name} className="mx-auto h-24 w-24 rounded-full" />
                      <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Call to Action */}
            <section className="bg-blue-600 text-white text-center py-12">
              <h2 className="text-3xl font-semibold">Want to work with us?</h2>
              <p className="mt-2 text-lg">Join us in our journey to create impactful solutions.</p>
              <a href="#" className="mt-4 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-200">
                Contact Us
              </a>
            </section>
          </div>
        );
      }
      
      // Sample Team Data
      const teamMembers = [
        {
          name: "John Doe",
          role: "CEO & Founder",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Jane Smith",
          role: "Lead Developer",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Alex Johnson",
          role: "UI/UX Designer",
          image: "https://via.placeholder.com/150",
        },
      ];
      
  


export default About