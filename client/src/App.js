import "./App.css";

function App() {
  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Juhi Sinha</h1>
        <h2>DevOps Engineer</h2>
        <p>
          Automating builds, deployments, and cloud infrastructure using modern
          DevOps practices.
        </p>
      </section>

      {/* CI/CD SECTION */}
      <section className="section">
        <h3>CI / CD Pipeline</h3>
        <p>
          This application is built with a complete CI/CD pipeline using GitHub
          Actions and deployed on AWS EC2 using Docker.
        </p>
      </section>

      {/* TOOLS SECTION */}
      <section className="section">
        <h3>DevOps Tools & Technologies</h3>

        <div className="tools">
          <div className="tool">Docker</div>
          <div className="tool">GitHub Actions</div>
          <div className="tool">AWS EC2</div>
          <div className="tool">MongoDB Atlas</div>
          <div className="tool">React</div>
          <div className="tool">Node.js</div>
          <div className="tool">CI/CD</div>
          <div className="tool">Linux</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Juhi Sinha | DevOps Engineer 🚀</p>
      </footer>
    </div>
  );
}

export default App;

