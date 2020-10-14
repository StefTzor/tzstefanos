import React from "react"
import ProjectCard from "../components/project-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, img,  children }) => (
    <ProjectCard link={link} title={title} bg={bg} img={img}>
      {children}
    </ProjectCard>
  ),
}

export default components
