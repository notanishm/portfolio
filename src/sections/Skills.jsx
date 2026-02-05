import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '../data/content';

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {skill.name}
        </span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          {skill.level}%
        </span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-cyber-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'security', label: 'Security' },
    { id: 'tools', label: 'Tools' },
  ];

  return (
    <section
      id="skills"
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-cyber-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered throughout my journey
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-600 to-cyber-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Skill Bars */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {tabs.find((t) => t.id === activeTab)?.label} Proficiency
            </h3>
            {skills[activeTab].map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Right - Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Circular Progress */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Skill Distribution
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => {
                  const average = Math.round(
                    skillList.reduce((acc, skill) => acc + skill.level, 0) / skillList.length
                  );
                  
                  return (
                    <motion.div
                      key={category}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-gray-200 dark:text-gray-700"
                          />
                          <motion.circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            className={`text-primary-500 ${
                              activeTab === category ? 'text-cyber-500' : ''
                            }`}
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: average / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            style={{
                              strokeDasharray: 351.86,
                            }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {average}%
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium capitalize">
                        {category}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {skillList.length} technologies
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Skill Tags Cloud */}
            <div className="mt-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies I Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.values(skills)
                  .flat()
                  .map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        skill.level >= 90
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : skill.level >= 80
                          ? 'bg-cyber-100 dark:bg-cyber-900/30 text-cyber-700 dark:text-cyber-300'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;