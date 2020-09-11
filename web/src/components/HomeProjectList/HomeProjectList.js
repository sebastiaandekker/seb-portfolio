const HomeProjectList = ({ projects }) => {
  const projectsByYear = projects.sort((a, b) => a.year - b.year)
  return (
    <>
      <h2>Work</h2>
      <p>Selected projects</p>
      {projectsByYear.map((project) => (
        <div key={project.id}>
          <ul>
            <li>{project.name}</li>
            <li>{project.type}</li>
            <li>{project.year}</li>
            <li>{project.text}</li>
            <li>Client: {project.client}</li>
            <li>Roles: {project.roles}</li>
          </ul>
        </div>
      ))}
    </>
  )
}

export default HomeProjectList
