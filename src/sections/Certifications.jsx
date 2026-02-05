import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, ExternalLink, Shield, Server, Layout, Lock } from 'lucide-react';
import { certifications } from '../data/content';

const certificationIcons = {
  'Security & Compliance Certification': Shield,
  'Backend Development & API Security': Server,
  'Frontend Development Specialization': Layout,
  'Web Application Security': Lock,
};

const CertificationCard = ({ cert, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = certificationIcons[cert.title] || Award;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
        whileHover={{ y: -5 }}
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-cyber-400/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
        
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-cyber-500 flex items-center justify-center text-white shadow-lg">
            <Icon size={28} />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Calendar size={14} />
            {cert.date}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {cert.title}
          </h3>
          
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
            {cert.issuer}
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {cert.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Link if available */}
          {cert.link && (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
              whileHover={{ x: 5 }}
            >
              View Certificate
              <ExternalLink size={14} />
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-800"
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
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-cyber-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in security, backend development, and frontend technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4+', label: 'Certifications' },
            { value: '200+', label: 'Hours of Training' },
            { value: '100%', label: 'Completion Rate' },
            { value: 'Top 5%', label: 'Performance' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;