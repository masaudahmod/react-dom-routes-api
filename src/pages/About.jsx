import { useEffect, useState } from 'react';
import aboutImage from '../../public/about.jpg'

const About = () => {
  const [dateTime, setDateTime] = useState(new Date());

  // Update the date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  const formatDateTime = () => {
    return dateTime.toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
    });
  };

  return (
    <section className="bg-gray-100 text-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row mb-10">
          <div className="md:w-1/2 md:pr-6 mb-6">
            <img
              src={aboutImage} // Replace with an actual image URL
              alt="Travel Blogger"
              className="rounded-lg shadow-lg h-[400px] mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Hello, I'm Tanveer!</h2>
            <p className="mb-4">
              I'm a passionate travel blogger and adventure seeker, dedicated to exploring the world and sharing my experiences with fellow travel enthusiasts. From the vibrant streets of Tokyo to the serene beaches of Bali, I believe that every destination has a unique story to tell.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-2">My Journey</h2>
            <p className="mb-4">
              My journey began at a young age when my family took me on my first trip abroad. Since then, I've traveled to over 30 countries, immersing myself in diverse cultures and meeting incredible people along the way. Through this blog, I aim to inspire others to step out of their comfort zones and embark on their own adventures.
            </p>
            <h2 className="text-2xl font-semibold mb-2">What You'll Find Here</h2>
            <p className="mb-4">
              On this blog, you'll find travel guides, tips, and personal stories from my adventures. Whether you're looking for the best places to visit, local cuisine recommendations, or packing tips, I've got you covered! My goal is to provide you with the information you need to create unforgettable memories on your travels.
            </p>
          </div>
        </div>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">Current Date and Time</h2>
          <div className="bg-gray-200 p-5 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-500">{formatDateTime()}</h3>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">Let's Connect!</h2>
          <p className="mb-4">
            I love connecting with fellow travelers and adventurers. Feel free to reach out via social media or drop me an email. Let's share stories and inspire each other to explore the world!
          </p>
          <a
            href="mailto:masaudahmod@gmail.com"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
