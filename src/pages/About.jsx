import { TransitionWrapper } from '../components/transition/transition-wrapper';
import { StaggeredSlideUp, ContentSlideUp } from '../components/animation';
import { MagneticButton } from '../components/ui/magnetic-button';
import { ImageWithLoader } from '../components/ui/image-with-loader';

function About() {
  return (
    <TransitionWrapper>
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Header Section */}
          <StaggeredSlideUp staggerDelay={0.15} initialDelay={0.5}>
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">About Me</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A passionate Computer Science student with a strong foundation in software engineering 
                and a love for creating innovative web solutions.
              </p>
            </div>
          </StaggeredSlideUp>

          {/* Main Content */}
          <ContentSlideUp delay={1}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
              
              {/* Left Column - Photo and Quick Info */}
              <div className="text-center lg:text-left">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden mx-auto lg:mx-0 mb-8 shadow-lg">
                  <ImageWithLoader 
                    src="/Abdulrahman.jpg" 
                    alt="Abdulrahman Nasser"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-4">Quick Info</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium text-black">Location:</span> Assiut, Egypt</p>
                    <p><span className="font-medium text-black">University:</span> Assiut University</p>
                    <p><span className="font-medium text-black">Major:</span> Software Engineering</p>
                    <p><span className="font-medium text-black">GPA:</span> 3.41/4.0</p>
                  </div>
                </div>
              </div>

              {/* Right Column - About Text */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">My Journey</h2>
                  <p className="text-gray-600 mb-4">
                    I'm currently pursuing a Bachelor's degree in Computer Science at Assiut University, 
                    with a specialization in Software Engineering. My academic journey has been complemented 
                    by hands-on experience in competitive programming and real-world project development.
                  </p>
                  <p className="text-gray-600">
                    With over 900 solved coding problems and experience leading teams in ICPC competitions, 
                    I've developed strong analytical thinking and problem-solving abilities that I apply 
                    to every project I work on.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">What I Do</h2>
                  <p className="text-gray-600 mb-4">
                    I specialize in frontend development with a focus on creating responsive, 
                    user-friendly web applications. My expertise spans from modern React applications 
                    to full-stack solutions using various backend technologies.
                  </p>
                  <p className="text-gray-600">
                    I'm passionate about writing clean, maintainable code and staying up-to-date 
                    with the latest web development trends and best practices.
                  </p>
                </div>
              </div>
            </div>
          </ContentSlideUp>

          {/* Experience Section */}
          <ContentSlideUp delay={1.2}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black text-center mb-12">Experience & Achievements</h2>
              
              <div className="space-y-8">
                {/* ICPC Experience */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-black">ICPC Competition Member</h3>
                    <span className="text-blue-500 font-medium">Mar 2023 – Aug 2023</span>
                  </div>
                  <p className="text-gray-600 mb-3">ECPC 2023, Alexandria, Egypt</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Solved over 900 coding problems, enhancing algorithm optimization skills</li>
                    <li>• Led a team of three colleagues to achieve 58th place among 300+ teams in Egypt</li>
                    <li>• Developed strong collaborative problem-solving and time management skills</li>
                  </ul>
                </div>

                {/* Leadership Experience */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-black">Team Lead - Leadership Development Camp</h3>
                    <span className="text-blue-500 font-medium">Jul 2023 – Sep 2023</span>
                  </div>
                  <p className="text-gray-600 mb-3">Mansurah, Egypt</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Led a team of four colleagues from different universities</li>
                    <li>• Organized development process for startup idea creation</li>
                    <li>• Achieved 11th place out of 50+ competing startup concepts</li>
                  </ul>
                </div>
              </div>
            </div>
          </ContentSlideUp>

          {/* Skills Section */}
          <ContentSlideUp delay={1.4}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black text-center mb-12">Technical Skills</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Programming Languages */}
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold text-black mb-4">Languages</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>JavaScript</p>
                    <p>C++</p>
                    <p>Java</p>
                    <p>Python</p>
                    <p>HTML5 & CSS3</p>
                  </div>
                </div>

                {/* Frameworks */}
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold text-black mb-4">Frameworks</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>React</p>
                    <p>Flask</p>
                    <p>TailwindCSS</p>
                    <p>Vite</p>
                    <p>React Router</p>
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold text-black mb-4">Tools</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Git & GitHub</p>
                    <p>Docker</p>
                    <p>VS Code</p>
                    <p>NPM</p>
                    <p>Command Line</p>
                  </div>
                </div>

                {/* Concepts */}
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold text-black mb-4">Concepts</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Data Structures</p>
                    <p>Algorithms</p>
                    <p>OOP</p>
                    <p>REST APIs</p>
                    <p>Responsive Design</p>
                  </div>
                </div>
              </div>
            </div>
          </ContentSlideUp>

          {/* Call to Action */}
          <ContentSlideUp delay={1.6}>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black mb-4">Let's Work Together</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on interesting projects. 
                Feel free to reach out if you'd like to work together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton 
                  to="/projects" 
                  intensity={0.4}
                  className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  View My Projects
                </MagneticButton>
                <MagneticButton 
                  to="/contact" 
                  intensity={0.4}
                  className="inline-block border-2 border-black text-black px-8 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Get In Touch
                </MagneticButton>
              </div>
            </div>
          </ContentSlideUp>

        </div>
      </div>
    </TransitionWrapper>
  );
}

export default About;
