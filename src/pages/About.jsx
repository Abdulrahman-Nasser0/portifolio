import { TransitionWrapper } from '../components/transition/transition-wrapper';

function About() {
  return (
    <TransitionWrapper >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        <p className="text-lg text-gray-600 mb-6">
          Learn more about my background and experience.
        </p>
        <div className="space-y-4">
          <p className="text-gray-600">
            I'm a passionate developer with expertise in modern web technologies.
          </p>
          <p className="text-gray-600">
            I love creating beautiful and functional user experiences.
          </p>
        </div>
      </div>
    </TransitionWrapper>
  );
}

export default About;
