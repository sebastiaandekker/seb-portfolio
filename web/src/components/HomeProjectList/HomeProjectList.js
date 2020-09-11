const HomeProjectList = ({ projects }) => {
  return (
    <>
      <h2>Project list component</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <ul>
            <li>{project.name}</li>
            <li>{project.type}</li>
            <li>{project.year}</li>
            <li>{project.text}</li>
            <li>{project.client}</li>
            <li>{project.roles}</li>
          </ul>
        </div>
      ))}
    </>
  )
}

export default HomeProjectList
