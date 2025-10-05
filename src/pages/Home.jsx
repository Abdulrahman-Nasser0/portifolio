import { PageTransition } from '../components/transitions';

function Home() {
  return (
    <PageTransition duration={1500}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600">
          This is the home page with a loading transition.
        </p>
      </div>
    </PageTransition>
  );
}

export default Home;
