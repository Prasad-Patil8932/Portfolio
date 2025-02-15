import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Screenshot (498).png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/Screenshot (499).png";
import chatify from "../../Assets/Projects/Screenshot 2025-02-15 161215.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Screenshot (497).png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Todo App"
              description="Optimized todo app using react hooks like useCallback, useMemo, React.memo and Dynamically import component using React.lazy, Use Redux for state management ."
              ghLink="https://github.com/Prasad-Patil8932/Todos-App-List"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hospital Management System"
              description="Make HMS using MERN Stack Technology, Also yse JWT for authentication and use bcrypt for Password Hashing"
              ghLink="https://github.com/Prasad-Patil8932/Hospital_Management"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Notes App"
              description="Creating Optimized Notes app using Tan-stack query, It is fully Optimized for using a useQuery and useMutate hook and caching data"
              ghLink="https://github.com/Prasad-Patil8932/Notes-app"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Chai Shop"
              description="Chai shop with add to cart functionality, Using Bootstrap and CSS for interactive user interface"
              ghLink="https://github.com/Prasad-Patil8932/Chai-Shop"
              demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="NEWS Web site"
              description="Create simple News Sites."
              ghLink="https://github.com/Prasad-Patil8932/news-website"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card"> */}
            {/* <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Seven Mentor Pune"
              description="."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
