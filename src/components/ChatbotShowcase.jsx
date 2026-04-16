// src/components/ChatbotShowcase.jsx

import { useNavigate } from "react-router-dom";

const ChatbotShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="container">

        {/* Heading */}
        <h2 className="headline-2 reveal-up">
          AI Chatbot & UI Components
        </h2>

        <p className="text-zinc-400 mt-3 max-w-[60ch] reveal-up">
          Custom-built chatbot integrated into this portfolio website.
          It answers visitor questions instantly, guides users through
          projects, skills, resume, experience and contact details.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Chatbot Card */}
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 reveal-up">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Portfolio Chatbot
            </h3>

            <p className="text-zinc-400 leading-7">
              Helps visitors ask questions like:
            </p>

            <ul className="mt-4 space-y-2 text-zinc-300">
              <li>• Show my projects</li>
              <li>• Download resume</li>
              <li>• Skills & experience</li>
              <li>• Contact details</li>
              <li>• Java / React packages</li>
            </ul>

            <button
              onClick={() => navigate("/chatbot-details")}
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
            >
              Explore Chatbot
            </button>
          </div>

          {/* UI Card */}
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 reveal-up">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Ready UI Components
            </h3>

            <p className="text-zinc-400 leading-7">
              Reusable UI components available for quick development:
            </p>

            <ul className="mt-4 space-y-2 text-zinc-300">
              <li>• Login Forms</li>
              <li>• Dashboard Cards</li>
              <li>• React Components</li>
              <li>• Angular Components</li>
              <li>• Navbar / Hero Sections</li>
            </ul>

            <button
              onClick={() => navigate("/chatbot-details")}
              className="mt-6 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-lg"
            >
              View UI Components
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChatbotShowcase;