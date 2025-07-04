"use client"

import { useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  Server,
  Palette,
  ArrowRight,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skills = {
    frontend: ["Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    backend: ["PHP", "Laravel", "CodeIgniter", "RESTful APIs"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Sequelize", "Mongoose"],
    tools: ["Git", "Jira", "Supabase", "Firebase"],
  }

  const projects = [
    {
      title: "PoolStore",
      description:
        "UK's leading online retailer for swimming pool and spa supplies, offering a wide range of products from pools to maintenance equipment.",
      url: "https://poolstore.co.uk",
      tech: ["Laravel", "Vue.js", "MySQL"],
      category: "E-commerce",
    },
    {
      title: "IGIVU",
      description:
        "End-to-end XR solutions in VR, AR, and MR, empowering 3,000+ organizations including Stanford with immersive experiences.",
      url: "https://igivu.com",
      tech: ["Next.js", "TypeScript", "3D Graphics"],
      category: "XR Platform",
    },
    {
      title: "Logistivo",
      description:
        "Responsive web interface for a logistics platform connecting customers with carriers, built from Figma designs.",
      url: "https://logistivo.com/en",
      tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
      category: "Logistics",
    },
    {
      title: "Trade In",
      description:
        "Premium, custom uPVC window and door solutions in Pakistan, combining 13+ years of expertise with quality and modern design.",
      url: "https://www.tradeinupvc.com",
      tech: ["Laravel", "Vue.js", "E-commerce"],
      category: "Business",
    },
    {
      title: "The Little Mate",
      description:
        "Charming selection of baby clothes, toys, and essentials—crafted for comfort, quality, and joyful parenting.",
      url: "https://thelittlemate.pk",
      tech: ["Shopify", "Liquid", "E-commerce"],
      category: "E-commerce",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-orange-600 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-slate-900"
            >
              Bilal<span className="text-amber-600">.</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-700 hover:text-amber-600 transition-colors capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-amber-200 text-amber-700 hover:bg-amber-50 bg-transparent"
                onClick={() => setIsResumeModalOpen(true)}
              >
                <Download size={16} className="mr-2" />
                Resume
              </Button>
              <Button
                size="sm"
                className="bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => scrollToSection("contact")}
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-amber-100"
            >
              {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 text-slate-700 hover:text-amber-600 transition-colors capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👋</span>
                  </div>
                  <span className="text-slate-600 font-medium">Hello, I'm Bilal</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="text-slate-900 block">Senior</span>
                  <span className="text-amber-600 block">Software</span>
                  <span className="text-slate-900 block">Engineer</span>
                </h1>

                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  I craft exceptional digital experiences through full-stack development, specializing in modern web
                  technologies and scalable solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      onClick={() => scrollToSection("projects")}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg group"
                    >
                      View My Work
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => scrollToSection("contact")}
                      className="border-2 border-slate-300 text-slate-700 hover:border-amber-600 hover:text-amber-600 px-8 py-4 rounded-full font-semibold text-lg bg-white/80 backdrop-blur-sm"
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-slate-900">3+</div>
                    <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-slate-900">15+</div>
                    <div className="text-sm text-slate-600 font-medium">Projects Completed</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-600 font-medium">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative">
                {/* Background Decoration */}
                <div className="absolute -inset-8 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl opacity-20 blur-2xl"></div>

                {/* Image Container */}
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative z-10">
                  <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
                    {/* Decorative Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-1">
                      <div className="w-full h-full bg-white rounded-3xl p-3">
                        <img
                          src="/images/bilal-profile.jpeg"
                          alt="M. Bilal Iftikhar - Senior Software Engineer"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-amber-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-slate-700">Available for work</span>
                      </div>
                    </motion.div>

                    {/* Tech Stack Floating Elements */}
                    <motion.div
                      animate={{
                        y: [0, 8, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute -bottom-6 -left-6 bg-white rounded-xl p-3 shadow-lg border border-amber-100"
                    >
                      <div className="flex items-center gap-2">
                        <Code className="text-amber-600" size={20} />
                        <span className="text-sm font-medium text-slate-700">Full Stack</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-lg mb-4 block">About Me</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Passionate about creating
              <br />
              <span className="text-amber-600">digital solutions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p className="mb-6">
                  I'm a Full Stack Software Engineer with over 3 years of experience working with Laravel PHP,
                  JavaScript, and modern front-end frameworks like Vue.js and Next.js. I've built and maintained web
                  applications using both MySQL and MongoDB.
                </p>
                <p className="mb-6">
                  I enjoy working across the full stack from crafting APIs and managing databases to creating
                  responsive, user-friendly interfaces. I'm always looking to learn and grow, and I love being part of a
                  team that's building something meaningful.
                </p>
                <p>
                  Right now, I'm looking for opportunities where I can contribute my skills, collaborate with great
                  people, and take on new challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h3 className="font-bold text-slate-900 mb-4 text-xl">Key Strengths</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Star className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Full Stack Development Expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-700">E-commerce & ERP System Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Modern Web Technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Agile Development & Team Collaboration</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-lg mb-4 block">Skills & Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Technologies I work with</h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Code className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl">Frontend</h3>
                </div>
                <div className="space-y-3">
                  {skills.frontend.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Server className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl">Backend</h3>
                </div>
                <div className="space-y-3">
                  {skills.backend.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Database className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl">Database</h3>
                </div>
                <div className="space-y-3">
                  {skills.database.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Palette className="text-orange-600" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl">Tools</h3>
                </div>
                <div className="space-y-3">
                  {skills.tools.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-lg mb-4 block">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on, showcasing my expertise in full-stack development
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-white rounded-2xl border border-amber-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-100 rounded-full text-slate-600 hover:text-amber-600 hover:bg-amber-50 transition-colors group-hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>

                    <h3 className="font-bold text-slate-900 text-xl mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-lg mb-4 block">Experience</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Professional Journey</h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 border border-amber-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Senior Software Engineer</h3>
                  <p className="text-xl font-semibold text-amber-600">Algolix Technologies</p>
                </div>
                <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium w-fit">
                  June 2021 – Present
                </span>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Designed, developed, and maintained scalable web applications using Laravel for the backend and
                    Vue.js/Next.js for dynamic front-end development.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Integrated RESTful APIs and third-party services such as payment gateways, authentication providers,
                    and analytics tools to extend application functionality.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Collaborated closely with product managers and designers to turn business requirements into
                    functional, responsive interfaces with Next.js and Vue.js.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Optimized MySQL database queries, improving performance and reducing load times for high-traffic
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-lg mb-4 block">Education</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Academic Background</h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Bachelor's in Information Technology</h3>
                  <p className="text-xl font-semibold text-amber-600">University of Agriculture Faisalabad</p>
                </div>
                <span className="px-4 py-2 bg-white text-amber-700 rounded-full font-medium w-fit border border-amber-200">
                  2017 – 2021
                </span>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Gained knowledge of system analysis, software architecture, and designing scalable and efficient
                    applications.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Designed and optimized relational and non-relational databases using SQL, Firebase, and MongoDB,
                    focusing on data modeling and query optimization.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-lg mb-4 block">Contact</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Let's work together</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 text-center border border-amber-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                <a href="mailto:bilaliftikhar431@gmail.com" className="text-amber-600 hover:text-amber-700 font-medium">
                  bilaliftikhar431@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 text-center border border-amber-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
                <a href="tel:+923247203309" className="text-amber-600 hover:text-amber-700 font-medium">
                  +92 324 7203309
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 text-center border border-amber-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Location</h3>
                <p className="text-slate-600 font-medium">Lahore, Pakistan</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              <Mail className="mr-2" size={20} />
              Send Message
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-slate-900">
              Bilal<span className="text-amber-600">.</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:bilaliftikhar431@gmail.com"
                className="text-slate-600 hover:text-amber-600 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mbilaliftikhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-amber-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="tel:+923247203309" className="text-slate-600 hover:text-amber-600 transition-colors">
                <Phone size={20} />
              </a>
            </div>

            <p className="text-slate-600">© 2025 M. Bilal Iftikhar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative"
          >
            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="text-amber-600" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Resume</h3>
              <p className="text-slate-600 mb-8">Choose how you'd like to access my resume</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href =
                      "https://gtnntrpfxsftmceezsac.supabase.co/storage/v1/object/public/ruyaat/cv/Bilal_Iftikhar_Resume_Senior_Software_Engineer.pdf"
                    link.download = "Bilal_Iftikhar_Resume.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    setIsResumeModalOpen(false)
                  }}
                  className="bg-amber-600 hover:bg-amber-700 text-white flex-1"
                  size="lg"
                >
                  <Download className="mr-2" size={20} />
                  Download
                </Button>

                <Button
                  onClick={() => {
                    window.open(
                      "https://gtnntrpfxsftmceezsac.supabase.co/storage/v1/object/public/ruyaat/cv/Bilal_Iftikhar_Resume_Senior_Software_Engineer.pdf",
                      "_blank",
                    )
                    setIsResumeModalOpen(false)
                  }}
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:border-amber-600 hover:text-amber-600 flex-1"
                  size="lg"
                >
                  <ExternalLink className="mr-2" size={20} />
                  View Online
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
