import { TransitionWrapper } from '../components/transition/transition-wrapper';
import { StaggeredSlideUp, ContentSlideUp } from '../components/animation';
import { MagneticButton } from '../components/ui/magnetic-button';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Turistoe - Travel Booking Platform",
      description: "Responsive travel booking website with 4-step booking flow and payment confirmation system. Features pixel-perfect Figma-to-code conversion with destination browsing and testimonials carousel.",
      technologies: ["React", "Vite", "TailwindCSS", "React Router"],
      date: "Aug 2025",
      highlights: [
        "Mobile-first responsive design",
        "Form validation and Radix UI accessibility",
        "4-step booking flow implementation"
      ]
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "Full-stack Netflix clone with React frontend and Laravel backend. Features movie/TV show browsing, search functionality, and user authentication system.",
      technologies: ["React", "Laravel", "TMDB API", "MySQL", "TailwindCSS"],
      date: "Jul 2025",
      highlights: [
        "API integration for movie data",
        "User authentication and watchlist",
        "Context API state management"
      ]
    },
    {
      id: 3,
      title: "Personal Productivity Hub",
      description: "Flask web application with comprehensive task and note management system. Features user registration, to-do list CRUD functionality, and habit tracking.",
      technologies: ["Flask", "SQLite/PostgreSQL", "JavaScript", "Docker"],
      date: "May 2025",
      highlights: [
        "Docker containerization",
        "6-member team collaboration",
        "Calendar view for task scheduling"
      ]
    }
  ];

  return (
    <TransitionWrapper>
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Header Section */}
          <StaggeredSlideUp staggerDelay={0.15} initialDelay={0.5}>
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                My Projects
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here are some of the projects I've worked on. Each project represents 
                a unique challenge and learning experience in modern web development.
              </p>
            </div>
          </StaggeredSlideUp>

          {/* Projects Grid */}
          <ContentSlideUp delay={1}>
            <div className="space-y-12 mb-16">
              {projects.map((project, index) => (
                <div key={project.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Project Info */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="mb-4">
                      <span className="text-blue-500 font-medium text-sm">{project.date}</span>
                      <h2 className="text-2xl lg:text-3xl font-bold text-black mt-2 mb-4">
                        {project.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-black mb-3">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-black mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Project Visual Placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 lg:h-80 flex items-center justify-center border border-gray-200">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-500 font-medium">{project.title}</p>
                        <p className="text-gray-400 text-sm">Project Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentSlideUp>

          {/* Additional Info Section */}
          <ContentSlideUp delay={1.2}>
            <div className="bg-gray-50 rounded-lg p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">More Projects Coming Soon</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm constantly working on new projects and exploring different technologies. 
                Check out my GitHub profile to see my latest work and contributions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton 
                  href="https://github.com/Abdulrahman-Nasser0"
                  intensity={0.4}
                  className="inline-flex items-center bg-black text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View GitHub Profile
                </MagneticButton>
                
                <MagneticButton 
                  to="/contact" 
                  intensity={0.4}
                  className="inline-block border-2 border-black text-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Let's Work Together
                </MagneticButton>
              </div>
            </div>
          </ContentSlideUp>

        </div>
      </div>
    </TransitionWrapper>
  );
}

export default Projects;
