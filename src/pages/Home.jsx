import { TransitionWrapper } from '../components/loading/transition-wrapper';
import { StaggeredSlideUp, ContentSlideUp } from '../components/animation';
import { MagneticButton } from '../components/ui/magnetic-button';

function Home() {
  return (
    <TransitionWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <StaggeredSlideUp staggerDelay={0.15} initialDelay={0.5}>
          <h1 className="text-4xl font-bold  mb-8">Welcome to My Portfolio</h1>
          <p className="text-lg  mb-6">
            This is the home page with a loading transition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MagneticButton 
              to="/about"               
              intensity={0.4}
            >
              <h2 className="text-xl font-semibold mb-2">About Me</h2>
              <p className="">Learn more about my background and skills.</p>
            </MagneticButton>
            <MagneticButton 
              to="/projects" 
              intensity={0.4}
            >
              <h2 className="text-xl font-semibold mb-2">My Projects</h2>
              <p className="">Explore my latest work and projects.</p>
            </MagneticButton>
          </div>
        </StaggeredSlideUp>
        
        {/* Demo content for testing scroll behavior */}
        <ContentSlideUp delay={1}>
          <div className="mt-16 space-y-8">
            <section className="bg-[var(--main-black)] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">About This Portfolio</h2>
              <p className="text-gray-300 mb-4">
                This portfolio showcases my skills in modern web development using React, 
                Framer Motion for animations, and Tailwind CSS for styling.
              </p>
              <p className="text-gray-300">
                Notice how the floating menu button appears when you scroll down and the 
                header is no longer visible. This provides easy access to navigation 
                throughout the site.
              </p>
            </section>
            
            <section className="bg-[var(--main-black)] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Responsive design that works on all devices</li>
                <li>• Smooth animations powered by Framer Motion</li>
                <li>• Floating menu button that appears on scroll</li>
                <li>• Modern offcanvas navigation menu</li>
                <li>• Clean and professional design</li>
              </ul>
            </section>
            
            <section className="bg-[var(--main-black)] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-300 mb-4">
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out if you'd like to work together.
              </p>
              <MagneticButton 
                to="/contact" 
                intensity={0.4}
                className="inline-block bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Contact Me
              </MagneticButton>
            </section>
          </div>
        </ContentSlideUp>
        
      </div>
    </TransitionWrapper>
  );
}

export default Home;
