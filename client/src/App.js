import "./App.css";

function App() {
  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <h1 className="glow-text">Juhi Sinha</h1>
        <h2 className="subtitle">DevOps Engineer</h2>

        <p className="tagline">
          Automating • Deploying • Scaling • Securing Cloud Infrastructure
        </p>

        <div className="glow-line"></div>
      </section>

      {/* CI/CD */}
      <section className="section glass">
        <h3>🚀 CI / CD Pipeline</h3>
        <p>
          Fully automated CI/CD pipeline using GitHub Actions, Docker, and AWS EC2.
          Every commit triggers build, image push to Docker Hub, and deployment.
        </p>
      </section>

      {/* TOOLS */}
      <section className="section">
        <h3>⚙️ DevOps Toolchain</h3>

        <div className="tools">
          <div className="tool glow">Docker</div>
          <div className="tool glow">GitHub Actions</div>
          <div className="tool glow">AWS EC2</div>
          <div className="tool glow">MongoDB Atlas</div>
          <div className="tool glow">React</div>
          <div className="tool glow">Node.js</div>
          <div className="tool glow">Linux</div>
          <div className="tool glow">CI/CD</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>✨ Built & Deployed by Juhi Sinha | DevOps Engineer ✨</p>
      </footer>
    </div>
  );
}

export default App;

