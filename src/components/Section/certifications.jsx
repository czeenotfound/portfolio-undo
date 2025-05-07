import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Certifications = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = {
    'Programming & Development': [
      { name: 'JavaScript', file: 'certificate_js.pdf' },
      { name: 'React.js', file: 'certificate_reactjs.pdf' },
      { name: 'Node.js', file: 'certificate_nodejs.pdf' },
      { name: 'PHP Basics', file: 'certificate_phpbbasics.pdf' },
      { name: 'Git', file: 'certificate_git.pdf' },
    ],
    'Cybersecurity': [
      { name: 'Cybersecurity', file: 'certificate_cybersecurity.pdf' },
      { name: 'Cyber Crime', file: 'certificate_cybercrime.pdf' },
      { name: 'Cryptography', file: 'certificate_cryptography.pdf' },
      { name: 'Cloud Security', file: 'certificate_cloudsecurity.pdf' },
    ],
    'Cloud Computing': [
      { name: 'AWS Basics', file: 'certificate_awsbasics.pdf' },
    ],
    'Networking & System Administration': [
      { name: 'Computer Networking', file: 'certificate_computernetworking.pdf' },
      { name: 'DevOps Tools', file: 'certificate_devopstools.pdf' },
    ],
    'Mobile & Web Development': [
      { name: 'Frontend Development', file: 'certificate_frontenddev.pdf' },
      { name: 'Full Stack Development', file: 'certificate_fullstackdev.pdf' },
      { name: 'Flutter', file: 'certificate_flutter.pdf' },
    ],
    'Data Science & AI/ML': [
      { name: 'Data Science', file: 'certificate_datascience.pdf' },
      { name: 'Data Visualization', file: 'certificate_datavisualization.pdf' },
      { name: 'Machine Learning with R', file: 'certificate_machinelearningwithR.pdf' },
      { name: 'TensorFlow', file: 'certificate_tensorflow.pdf' },
    ],
    'Project Management & Soft Skills': [
      { name: 'Excel Basics', file: 'certificate_excelbasics.pdf' },
    ],
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section className="certificate py-20 bg-neutral-900">
      <div className="container mx-auto z-10">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Certifications</h1>

        <div className="max-w-6xl mx-auto relative">
          <div className="space-y-4">
            {Object.entries(categories).map(([category, certificates], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-neutral-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-700 transition-colors"
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {category}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedCategory === category ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-white" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedCategory === category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-900 rounded-lg p-6 hover:bg-neutral-700 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-xl font-semibold text-white">{cert.name}</h4>
                              <a
                                href={`/src/assets/certificates_ojt/${cert.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                View Certificate
                              </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Certifications; 