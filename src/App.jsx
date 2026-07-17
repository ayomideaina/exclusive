import "./App.css";
import "./index.css";

export default function App() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-text-primary mb-4">
          Exclusive Website
        </h1>

        <p className="text-text-secondary mb-8">
          Built with React, Vite and Tailwind CSS
        </p>

        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </main>
  );
}