import { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    activeSection: "about",
    projects: [],
    title: "",
    description: "",
    link: "",
  };

  setActiveSection = (section) => {
    this.setState({ activeSection: section });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { title, description, link } = this.state;
    const newProject = {
      title,
      description,
      link,
    };
    this.setState((prevState) => ({
      projects: [...prevState.projects, newProject],
      title: "",
      description: "",
      link: "",
    }));
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleLinkChange = (e) => {
    this.setState({ link: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  render() {
    const { activeSection, projects, title, description, link } = this.state;

    return (
      <div className="App">
        {/* Navigation */}
        <div className="nav-container">
          <h1 className="main-heading">Madelyn Torff</h1>
          <nav>
            <button
              onClick={() => this.setActiveSection("about")}
              className="nav-btn"
            >
              About
            </button>
            <button
              onClick={() => this.setActiveSection("projects")}
              className="nav-btn"
            >
              Projects
            </button>
            <button
              onClick={() => this.setActiveSection("contact")}
              className="nav-btn"
            >
              Contact
            </button>
          </nav>
        </div>
        <div className="content-container">
          <div className="content">
            <p className="designer">UI/UX Designer</p>
            <h1 className="welcome-msg">Hello, my name is Madelyn Torff</h1>
            <p className="description">
              Show text with details about you, what you do or your professional
              career. You can add more information on the about page.
            </p>
            <div className="button-container">
              <button
                className="project-btn"
                onClick={() => this.setActiveSection("projects")}
              >
                Projects
              </button>

              <button className="linkedIn-btn">LinkedIn</button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=600%27"
            alt="girl-img"
            className="girl-img"
          />
        </div>

        {/*}
        <section
          id="about"
          className={activeSection === "about" ? "active" : ""}
        >
          <h1>About Me</h1>
    
        </section> 
                */}

        <section
          id="projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          <h1 className="add-projects">Add Projects</h1>
          {/* Project Form */}
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="form-details">
              <label>Project Name</label>
              <br />
              <input
                type="text"
                value={title}
                onChange={this.handleTitleChange}
              />
              <br />
              <label>Project Link</label>
              <input type="url" value={link} onChange={this.handleLinkChange} />
              <br />
              <label>Description</label>
              <textarea
                value={description}
                onChange={this.handleDescriptionChange}
              />

              <div className="add-btn-container">
                <button type="submit" className="add-btn">
                  Add Project
                </button>
              </div>
            </div>
          </form>

          {/* Projects View */}

          <div>
            <p className="projects-heading">Projects</p>
            {projects.map((project, index) => (
              <div className="project-list" key={index}>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="project-view-btn">view Project</button>
                </div>
                <img src={projects.link} alt="project-img" />
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          
          className="contact-container"
        >
          <h1>Contact Me</h1>
          {/* Add your contact form or information here */}
          <div className="social-icons">
            <img
              src="https://i.pinimg.com/736x/92/d1/db/92d1db1521d374335498624cc95e9554.jpg"
              alt="linkedIn"
              className="social-img"
            />
            
            <img
              src="https://i.pinimg.com/736x/92/d1/db/92d1db1521d374335498624cc95e9554.jpg"
              alt="Message"
              className="social-img"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
