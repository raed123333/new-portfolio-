import { useState, useEffect } from 'react';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
      
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Technology icons data
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '💙' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Git', icon: '📚' },
    { name: 'Figma', icon: '🎯' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-lg py-2 border-b border-gray-800' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center transform rotate-45">
              <span className="text-white font-bold transform -rotate-45">JR</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Jabri Raed
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-all duration-300 hover:text-cyan-400 relative group ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400 font-semibold' : 'text-gray-300'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.toLowerCase() ? 'w-full' : ''
                }`}></span>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1 group-hover:space-y-2 transition-all duration-300">
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg px-4 py-4 border-t border-gray-800">
            {['Home', 'About', 'Services', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 transition-all duration-300 hover:text-cyan-400 border-b border-gray-800 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* NEW HERO SECTION - Completely Different Design */}
      <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 pb-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgata(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgata(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for new projects</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block">Creative</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                    Developer
                  </span>
                </h1>
                <div className="text-xl md:text-2xl text-gray-300 space-y-2">
                  <p>Building digital experiences</p>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-cyan-400">Full Stack Developer</span>
                    <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                    <span>UI/UX Designer</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                I specialize in creating modern, responsive websites and cross-platform mobile applications. 
                With a passion for clean code and beautiful design, I bring ideas to life through digital innovation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10">Start a Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#services" 
                  className="group px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300"
                >
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300">
                    View Work
                  </span>
                </a>
              </div>

              {/* Social Links - UPDATED WITH PROPER BRAND ICONS */}
              <div className="flex space-x-6 pt-4">
                {[
                  { 
                    name: 'YouTube', 
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    ), 
                    color: 'hover:text-red-400 hover:bg-red-400/10', 
                    link: 'https://www.youtube.com/@withrouda' 
                  },
                  { 
                    name: 'Instagram', 
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    ), 
                    color: 'hover:text-pink-400 hover:bg-pink-400/10', 
                    link: 'https://www.instagram.com/with_rouda/' 
                  },
                  { 
                    name: 'LinkedIn', 
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    ), 
                    color: 'hover:text-blue-400 hover:bg-blue-400/10', 
                    link: 'https://tn.linkedin.com/in/jabriraed' 
                  },
                  { 
                    name: 'Facebook', 
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    ), 
                    color: 'hover:text-blue-500 hover:bg-blue-500/10', 
                    link: 'https://www.facebook.com/profile.php?id=100075714396901' 
                  }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg border border-gray-700 flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-gray-800/30 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                
                <div className="space-y-6">
                  {/* Code Preview */}
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="flex space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-mono text-gray-300 space-y-1">
                      <div><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = &#123;</div>
                      <div className="ml-4"><span className="text-cyan-400">name</span>: <span className="text-green-400">"Jabri Raed"</span>,</div>
                      <div className="ml-4"><span className="text-cyan-400">role</span>: <span className="text-green-400">"Full Stack Dev @Lezarts.digital"</span>,</div>
                      <div className="ml-4"><span className="text-cyan-400">passion</span>: <span className="text-green-400">"Creating Digital Magic"</span></div>
                      <div>&#125;;</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400">20+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-2xl font-bold text-purple-400">2+</div>
                      <div className="text-xs text-gray-400">Years Exp</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400">100%</div>
                      <div className="text-xs text-gray-400">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/10 rounded-xl border border-cyan-400/20 backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-xl border border-purple-400/20 backdrop-blur-sm"></div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <span className="text-sm mb-2">Explore More</span>
              <ChevronDownIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* NEW TECHNOLOGY CAROUSEL SECTION */}
      <section className="py-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-y border-gray-700/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-300 mb-2">
              Technologies I Work With
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Modern tools and frameworks that power my digital creations
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900/50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900/50 to-transparent z-10"></div>
            
            {/* Carousel */}
            <div className="flex space-x-8 animate-marquee whitespace-nowrap">
              {[...technologies, ...technologies].map((tech, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 min-w-[100px] transform hover:scale-105 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-sm text-gray-300 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain the same */}
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate Full Stack Developer and Designer based in Beja, Tunisia, 
                dedicated to creating modern digital solutions that blend aesthetics with functionality.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                I work on diverse projects ranging from responsive websites to cross-platform mobile applications, 
                always focusing on delivering exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300">
                I'm always open to new collaborations and exciting projects. Let's create something amazing together!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Web Development', value: '95%' },
                { label: 'UI/UX Design', value: '90%' },
                { label: 'Mobile Apps', value: '85%' },
                { label: 'Content Creation', value: '80%' }
              ].map((skill, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.label}</span>
                    <span className="text-cyan-400">{skill.value}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" 
                      style={{ width: skill.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I offer a comprehensive range of digital services to bring your ideas to life
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <CodeBracketIcon className="w-12 h-12" />,
                title: 'Web Development',
                description: 'Modern, responsive websites built with cutting-edge technologies like React, Next.js, and Tailwind CSS.'
              },
              {
                icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
                title: 'Mobile Apps',
                description: 'Cross-platform mobile applications for iOS and Android using React Native and Flutter.'
              },
              {
                icon: <PaintBrushIcon className="w-12 h-12" />,
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive user interfaces and experiences that engage and convert visitors.'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 transform -translate-x-1/2"></div>
              
              {[
                {
                  year: '2024',
                  title: 'Founder - Club Dreamers ISET Beja',
                  description: 'Established and lead a creative community focused on innovation and digital skills development.'
                },
                {
                  year: '2023',
                  title: 'Media Consultant - JCI Beja',
                  description: 'Provided strategic media consulting services, enhancing digital presence and engagement strategies.'
                }
              ].map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 transform -translate-x-1/2 -translate-y-1"></div>
                  <div className="md:w-1/2 ml-10 md:ml-0 md:px-8">
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="text-cyan-400 font-bold mb-2">{exp.year}</div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <EnvelopeIcon className="w-6 h-6" />,
                    text: 'raedjabriwork@gmail.com',
                    link: 'mailto:raedjabriwork@gmail.com'
                  },
                  {
                    icon: <PhoneIcon className="w-6 h-6" />,
                    text: '93.275.860',
                    link: 'tel:93275860'
                  },
                  {
                    icon: <MapPinIcon className="w-6 h-6" />,
                    text: 'Beja, Tunisia',
                    link: '#'
                  }
                ].map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.link}
                    className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <span className="text-gray-300">{contact.text}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Open for Collaboration</h4>
                <p className="text-gray-400">
                  Whether you need a website, mobile app, or consultation for your digital project, 
                  I'm here to help bring your ideas to life with modern solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Jabri Raed. All rights reserved.
          </p>
        </div>
      </footer>

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 6s ease infinite;
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default App;