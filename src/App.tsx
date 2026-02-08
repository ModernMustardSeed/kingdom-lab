import GoldStardust from './components/GoldStardust';
import Portfolio from './components/Portfolio';
import About from './components/About';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans">
      {/* Background Layer (Fixed) */}
      <div className="fixed inset-0 z-0">
        <GoldStardust />
        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(0,0,0,0.5)_100%)] z-10" />
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-80 z-20"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 20% 30%, rgba(255, 200, 100, 0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 35% at 75% 60%, rgba(255, 180, 80, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse 70% 50% at 50% 80%, rgba(255, 220, 150, 0.02) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-30 overflow-x-hidden">
        <Navbar />

        <main>
          <Portfolio />
          <About />
          <CurrentlyBuilding />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
