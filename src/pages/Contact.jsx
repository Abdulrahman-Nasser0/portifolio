import { TransitionWrapper } from '../components/transition/transition-wrapper';

function Contact() {
  return (
    <TransitionWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold  mb-8">Get In Touch</h1>
        <p className="text-lg  mb-8">
          I'd love to hear from you! Feel free to reach out for collaborations or just a friendly hello.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold  mb-4">Contact Info</h2>
            <div className="space-y-3">
              <p className="">📧 your.email@example.com</p>
              <p className="">📱 +1 (555) 123-4567</p>
              <p className="">📍 Your City, Country</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold  mb-4">Send a Message</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
}

export default Contact;
