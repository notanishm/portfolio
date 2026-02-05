import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, GraduationCap, Award, BookOpen } from 'lucide-react';
import { personalInfo, education, certifications, projects } from '../data/content';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-cyber-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - About Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {personalInfo.summary ? 'Professional Summary' : 'Information'}
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 mb-8"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex-shrink-0">
                <img
                  src="/profile-photo.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/256x256/2f78ff/ffffff?text=AM';
                  }}
                />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">{personalInfo.name}</div>
                <div className="text-gray-600 dark:text-gray-400">
                  {personalInfo.location}
                </div>
              </div>
            </motion.div>

            {personalInfo.summary ? (
              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8"
              >
                {personalInfo.summary}
              </motion.p>
            ) : null}

            {/* Contact Info Grid */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 sm:col-span-2">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Education
            </motion.h3>

            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              {education.map((edu, idx) => (
                <div
                  key={`${edu.institution}-${idx}`}
                  className="bg-gradient-to-br from-primary-50 to-cyber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      {edu.degree ? (
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                      ) : null}
                      <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.institution}</p>
                      {(edu.location || edu.period) ? (
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {[edu.location, edu.period].filter(Boolean).join(' • ')}
                        </p>
                      ) : null}
                      {edu.score ? (
                        <p className="text-gray-600 dark:text-gray-400 mt-2">{edu.score}</p>
                      ) : null}
                    </div>
                  </div>

                  {Array.isArray(edu.relevantCourses) && edu.relevantCourses.length > 0 ? (
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                        <BookOpen size={16} />
                        Relevant Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </motion.div>

            {/* Quick Stats (derived from provided data) */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Award, value: `${certifications.length}`, label: 'Certifications' },
                { icon: BookOpen, value: `${projects.length}`, label: 'Projects' },
                { icon: GraduationCap, value: `${education.length}`, label: 'Education' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800"
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
