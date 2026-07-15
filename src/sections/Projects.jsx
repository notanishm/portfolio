import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects, personalInfo } from '../data/content';
import BorderGlow from '../components/BorderGlow';

const PROJECT_COLORS = {
  Web: ['#c084fc', '#a78bfa', '#818cf8'],
  App: ['#38bdf8', '#22d3ee', '#67e8f9'],
  'Full Stack': ['#f472b6', '#fb923c', '#fbbf24'],
  ML: ['#34d399', '#a3e635', '#facc15'],
  Security: ['#f87171', '#fb923c', '#fbbf24'],
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <BorderGlow
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="#120F17"
          borderRadius={16}
          glowRadius={30}
          glowIntensity={0.8}
          coneSpread={25}
          animated={false}
          colors={PROJECT_COLORS[project.category] || PROJECT_COLORS.Web}
          fillOpacity={0.4}
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '180px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: '#1a1a1a', border: '1px solid #262626',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: 700, color: '#fff',
                }}>
                  {project.title.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#ededed' }}>{project.title}</div>
                  <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{project.category}</div>
                </div>
              </div>
              <ExternalLink size={14} style={{ color: '#555' }} />
            </div>

            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0, flex: 1 }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.technologies.map((tech, j) => (
                <span key={j} style={{
                  padding: '3px 8px', borderRadius: '6px', fontSize: '11px',
                  fontWeight: 500, background: '#1a1a1a', border: '1px solid #262626', color: '#888',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BorderGlow>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-cyber-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my best work, highlighting expertise in secure development and modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
