import { TransitionWrapper } from '../components/transition/transition-wrapper';
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
        
        
      </div>
    </TransitionWrapper>
  );
}

export default Home;
