import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import SectionTitle from "../components/ui/SectionTitle";
import About_OurStory from "../assets/About_OurStory.jpeg";
import AboutTeach from "../assets/About_Teach.jpeg";
import Roy from "../assets/KisholoyRoy.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About Us | LearnWell Academy";
  }, []);

  const team = [
    {
      name: "Kisholoy Roy",
      role: "CTO",
      bio: "With over 5 years of experience in Web Devlopment and SaaS and a MSc in Data Science, Kisholoy founded EduRuz Academy with a vision to transform traditional learning methods.",
      imageUrl: `${Roy}`,
    },
  ];

  const values = [
    {
      icon: <FaUsers className="h-8 w-8 text-primary-500" />,
      title: "Student-Centered",
      description:
        "We put our students at the heart of everything we do, designing programs that cater to diverse learning styles and needs.",
    },
    {
      icon: <FaBookOpen className="h-8 w-8 text-primary-500" />,
      title: "Innovation",
      description:
        "We constantly evolve our teaching methods and curriculum to incorporate the latest industry trends and educational research.",
    },
    {
      icon: <FaAward className="h-8 w-8 text-primary-500" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in our course offerings, ensuring quality education that prepares students for success.",
    },
    {
      icon: <FaGraduationCap className="h-8 w-8 text-primary-500" />,
      title: "Inclusivity",
      description:
        "We create a welcoming environment where diversity is celebrated and every student has equal opportunity to thrive.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={AboutTeach}
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 pt-20 pb-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              About LearnWell Academy
            </h1>
            <p className="text-neutral-300 text-xl mb-8">
              Discover our story, our mission, and the people behind LearnWell's
              commitment to educational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={About_OurStory}
                alt="Our Story"
                className="rounded-lg shadow-elevated w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>

              <p className="text-neutral-700 text-lg mb-4">
                Founded in 2010, LearnWell Academy began with a simple yet
                powerful vision: to provide accessible, high-quality education
                that prepares students for success in a rapidly evolving world.
              </p>

              <p className="text-neutral-700 text-lg mb-4">
                What started as a small team of passionate educators has grown
                into a leading educational institution with a global community
                of learners. Our journey has been defined by a commitment to
                innovation, excellence, and student success.
              </p>

              <p className="text-neutral-700 text-lg mb-4">
                Today, we continue to expand our course offerings and reach,
                while staying true to our founding principles. We believe that
                education has the power to transform lives, and we're dedicated
                to creating learning experiences that empower our students to
                achieve their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Our Values"
            subtitle="These core principles guide our approach to education and shape everything we do"
            centered
          />

          <div className="grid flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-10">
        <div className="container">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The dedicated professionals behind LearnWell's success"
            centered
          />

         
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 max-w-7xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-card hover-lift max-w-sm w-full mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-secondary-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-neutral-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-primary-500">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </motion.h2>

            <motion.p
              className="text-neutral-800 text-xl italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              "To transform lives through exceptional education, fostering a
              community of lifelong learners prepared to thrive in an
              ever-changing world."
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
