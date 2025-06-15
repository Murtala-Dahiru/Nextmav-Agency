import React from 'react';
import { CheckCircle, Target, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Driven by Innovation, Powered by Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            NextMav is a forward-thinking agency that stands at the intersection of creativity and technology. 
            We are a team of passionate professionals dedicated to delivering high-value, scalable solutions 
            to businesses worldwide. Our goal is to help you lead in your industry — not follow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                To create world-class solutions that enable businesses to thrive in an ever-evolving digital landscape.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                To redefine what is possible for businesses through technology and innovation.
              </p>
            </div>
          </div>

          <div className="card">
            <Lightbulb className="w-12 h-12 text-blue-600 mb-6" />
            <h4 className="text-2xl font-bold mb-4">Our Vision in Action</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At NextMav, we don't just solve problems — we reimagine how business is done.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're building an elite agency designed for a new class of organizations: adaptive, AI-native, 
              cloud-first, and brand-conscious.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We operate at the intersection of technology, automation, and brand intelligence, helping companies 
              transition from outdated systems to future-ready infrastructures and identities.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: CheckCircle,
              title: 'Innovation',
              description: 'We push the boundaries of technology to provide groundbreaking solutions.',
            },
            {
              icon: CheckCircle,
              title: 'Excellence',
              description: 'We deliver premium, high-impact solutions tailored for success.',
            },
            {
              icon: CheckCircle,
              title: 'Strategic Partnership',
              description: 'We collaborate with our clients to ensure sustained growth and success.',
            },
            {
              icon: CheckCircle,
              title: 'Future-Ready',
              description: 'We build solutions that adapt and scale with your business needs.',
            },
          ].map((value, index) => (
            <div key={index} className="card text-center">
              <value.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;