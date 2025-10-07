import { TransitionWrapper } from '../components/loading/transition-wrapper';
import { StaggeredSlideUp, ContentSlideUp, PhotoReveal } from '../components/animation';
import { MagneticButton } from '../components/ui/magnetic-button';
import { ImageWithLoader } from '../components/ui/image-with-loader';
import { AnimatedBackground } from '../components/ui/animated-background';
import { ParallaxElements } from '../components/ui/parallax-elements';
import { AnimatedText } from '../components/ui/animated-text';
import { TypingEffect } from '../components/ui/typing-effect';

function Home() {
  return (
    <TransitionWrapper>
      {/* Hero Section - Gradient Background */}
      <section className="min-h-screen bg-gradient-to-br from-[var(--gray-light)] via-[#5c7796] to-[#7a8287] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        {/* Parallax Elements */}
        <ParallaxElements />
        <div className="max-w-6xl mx-auto relative z-10 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side - Text Content */}
            <div className="text-center lg:text-left">
              <StaggeredSlideUp staggerDelay={0.15} initialDelay={0.5}>
                <div className="mb-6">
                  <p className="text-lg text-gray-300 mb-2">Hello, I'm</p>
                  <AnimatedText 
                    text="Abdulrahman"
                    className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 block"
                    delay={0.8}
                  />
                  <AnimatedText 
                    text="Nasser"
                    className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 block"
                    delay={1.2}
                  />
                </div>
                
                <div className="mb-8">
                  <TypingEffect 
                    text="Frontend Developer"
                    className="text-xl  lg:text-2xl text-white font-light mb-4 tracking-wide"
                    delay={1.8}
                    speed={100}
                  />
                  
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <MagneticButton 
                    to="/projects" 
                    variant='outline'
                    className='text-white p-4'
                  >
                    View My Work
                  </MagneticButton>
                  <MagneticButton 
                    to="/contact" 
                    className='text-white p-4'
                  >
                    Get In Touch
                  </MagneticButton>
                </div>
              </StaggeredSlideUp>
            </div>

            {/* Right side - Photo */}
            <PhotoReveal delay={1.2} duration={1}>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <ImageWithLoader 
                      src="/Abdulrahman.jpg" 
                      alt="Abdulrahman Nasser" 
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white rounded-full opacity-60"></div>
                </div>
              </div>
            </PhotoReveal>
          </div>
        </div>
      </section>

      {/* Content Sections - White Background */}
      <div className="bg-white">
        <ContentSlideUp delay={1.5}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            
            {/* About Preview Section */}
            <section className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold  mb-6">About Me</h2>
              <p className="text-lg  max-w-3xl mx-auto mb-8">
                Computer Science student at Assiut University with a passion for frontend development. 
                I specialize in React, JavaScript, and modern web technologies to create engaging user experiences.
              </p>
              <MagneticButton 
                to="/about" 
                variant='primary'
              >
                Learn More About Me
              </MagneticButton>
            </section>

            {/* Skills Preview */}
            <section className="mb-16">
              <h2 className="text-3xl lg:text-4xl fon text-center mb-12">Skills & Technologies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl fon mb-3">Frontend</h3>
                  <p className="">React, JavaScript, HTML5, CSS3, TailwindCSS, Vite</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl fon mb-3">Backend</h3>
                  <p className="">Flask, Laravel, MySQL, PostgreSQL, REST APIs</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl fon mb-3">Tools & Others</h3>
                  <p className="">Git, Docker, VS Code, Problem Solving, C++, Java</p>
                </div>
              </div>
            </section>

            {/* Projects Preview */}
            <section className="text-center">
              <h2 className="text-3xl lg:text-4xl fon mb-6">Featured Projects</h2>
              <p className="text-lg  max-w-3xl mx-auto mb-8">
                Check out some of my recent work including travel booking platforms, 
                Netflix clones, and productivity applications built with modern technologies.
              </p>
              <MagneticButton 
                to="/projects" 
                intensity={0.4}
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                View All Projects
              </MagneticButton>
            </section>
          </div>
        </ContentSlideUp>
      </div>
    </TransitionWrapper>
  );
}

export default Home;
