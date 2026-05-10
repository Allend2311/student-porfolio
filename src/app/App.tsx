import { Mail, Github, Linkedin, Code2, Briefcase, Sparkles, Palette, Terminal } from 'lucide-react';
import { Button, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'motion/react';
import profilePhoto from '../imports/image-2.png';
import rkTradingProject from '../imports/image.png';
import trackCoopProject from '../imports/image-1.png';

export default function App() {
  const skills = [
    'JavaScript', 'React', 'TypeScript', 'Node.js',
    'Python', 'HTML/CSS', 'Git', 'MongoDB'
  ];

  const projects = [
    {
      title: 'RK Trading',
      description: 'E-commerce platform for agricultural products with product catalog, pricing, and sales features.',
      tech: ['React', 'Node.js', 'E-Commerce'],
      link: '#',
      image: rkTradingProject
    },
    {
      title: 'TrackCOOP',
      description: 'Intelligent Document Management and Analytics System empowering Natagbu Farmers and Fisherfolks Agriculture Cooperatives through data-driven insights.',
      tech: ['TypeScript', 'React', 'Analytics'],
      link: '#',
      image: trackCoopProject
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Allend Andaya
          </h1>
          <div className="flex gap-8">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</a>
            <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
              <img
                src={profilePhoto}
                alt="Allend Andaya"
                className="relative w-40 h-40 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-purple-400/50"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold text-white mb-4"
          >
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Allend Andaya</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
              <Terminal className="text-purple-400" size={20} />
              <span className="text-gray-300">IT Professional</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
              <Code2 className="text-pink-400" size={20} />
              <span className="text-gray-300">Programmer</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
              <Palette className="text-blue-400" size={20} />
              <span className="text-gray-300">UI Designer</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button
              variant="contained"
              startIcon={<Mail />}
              sx={{
                bgcolor: 'rgb(168, 85, 247)',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': { bgcolor: 'rgb(147, 51, 234)' }
              }}
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              startIcon={<Github />}
              sx={{
                borderColor: 'rgb(168, 85, 247)',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': {
                  borderColor: 'rgb(147, 51, 234)',
                  bgcolor: 'rgba(168, 85, 247, 0.1)'
                }
              }}
            >
              View GitHub
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Sparkles className="text-purple-400" size={32} />
              <h3 className="text-4xl font-bold text-white">About Me</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-purple-500/20 shadow-2xl">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a dedicated IT professional and programmer with a passion for creating intuitive
                  and impactful digital solutions. With expertise in both development and UI design,
                  I bring a unique perspective to building user-centered applications that solve real-world problems.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I specialize in developing agricultural technology solutions, combining technical skills
                  with creative design to empower communities through data-driven platforms and e-commerce systems.
                  I'm committed to continuous learning and creating meaningful impact through technology.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Code2 className="text-purple-400" size={32} />
              <h3 className="text-4xl font-bold text-white">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Chip
                    label={skill}
                    sx={{
                      bgcolor: 'rgba(168, 85, 247, 0.1)',
                      color: 'rgb(216, 180, 254)',
                      fontSize: '1rem',
                      padding: '1.5rem 1rem',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: 'rgb(168, 85, 247)',
                        color: 'white',
                        borderColor: 'rgb(168, 85, 247)'
                      }
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Briefcase className="text-purple-400" size={32} />
              <h3 className="text-4xl font-bold text-white">Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'rgb(30, 41, 59)',
                      border: '1px solid rgba(168, 85, 247, 0.2)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: 'rgb(168, 85, 247)',
                        boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3)'
                      }
                    }}
                  >
                    {project.image && (
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      </div>
                    )}
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <h4 className="text-2xl font-bold mb-3 text-white">{project.title}</h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(168, 85, 247, 0.2)',
                              color: 'rgb(216, 180, 254)',
                              border: '1px solid rgba(168, 85, 247, 0.3)',
                              fontWeight: 500
                            }}
                          />
                        ))}
                      </div>
                      <Button
                        variant="text"
                        sx={{
                          color: 'rgb(168, 85, 247)',
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: 'rgba(168, 85, 247, 0.1)',
                            color: 'rgb(216, 180, 254)'
                          }
                        }}
                        href={project.link}
                      >
                        View Project →
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl font-bold mb-6 text-white">Get In Touch</h3>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                variant="contained"
                startIcon={<Mail />}
                sx={{
                  bgcolor: 'rgb(168, 85, 247)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': { bgcolor: 'rgb(147, 51, 234)' }
                }}
                href="mailto:allend.andaya@email.com"
              >
                Email Me
              </Button>
              <Button
                variant="outlined"
                startIcon={<Github />}
                sx={{
                  borderColor: 'rgb(168, 85, 247)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: 'rgb(147, 51, 234)',
                    bgcolor: 'rgba(168, 85, 247, 0.1)'
                  }
                }}
                href="https://github.com"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<Linkedin />}
                sx={{
                  borderColor: 'rgb(168, 85, 247)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: 'rgb(147, 51, 234)',
                    bgcolor: 'rgba(168, 85, 247, 0.1)'
                  }
                }}
                href="https://linkedin.com"
                target="_blank"
              >
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-purple-500/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2026 Allend Andaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}