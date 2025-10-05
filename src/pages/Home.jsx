import { TransitionWrapper } from '../components/transition/transition-wrapper';
import { StaggeredSlideUp, ContentSlideUp } from '../components/animation';

function Home() {
  return (
    <TransitionWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <StaggeredSlideUp staggerDelay={0.15} initialDelay={0.5}>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-600 mb-6">
            This is the home page with a loading transition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">About Me</h2>
              <p className="text-gray-600">Learn more about my background and skills.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">My Projects</h2>
              <p className="text-gray-600">Explore my latest work and projects.</p>
            </div>
          </div>
        </StaggeredSlideUp>
        
        <ContentSlideUp delay={0.8} duration={0.8} startY={200}>
          <div className="mt-12 p-8 bg-blue-50 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Get In Touch</h3>
            <p className="text-blue-600">Ready to work together? Let's connect!</p>
          </div>
        </ContentSlideUp>
      </div>
    </TransitionWrapper>
  );
}

export default Home;
