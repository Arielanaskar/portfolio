import { Navbar, Hero, About, Project, Contact, Footer, ParticleBackground } from "./components"

function App() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />

      {/* Content  */}
      <main>
        
        {/* Hero  */}
        <Hero />

        {/* About  */}
        <About />

        {/* Project  */}
        <Project />

        {/* Contact  */}
        <Contact />

        {/* Footer  */}
        <Footer />

        {/* ParticleBackGround  */}
        <ParticleBackground />
      </main>
    </>
  );
}

export default App;
