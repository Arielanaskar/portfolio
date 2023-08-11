import { Navbar, Hero, About, Project, Contact, ParticleBackground } from "./components"

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

        {/* ParticleBackGround  */}
        <ParticleBackground />
      </main>
    </>
  );
}

export default App;
