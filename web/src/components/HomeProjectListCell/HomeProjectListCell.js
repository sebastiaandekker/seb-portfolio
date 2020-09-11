import HomeProjectList from '../HomeProjectList/HomeProjectList'

export const QUERY = gql`
  query PROJECTS {
    projects {
      id
      name
      type
      year
      text
      client
      roles
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ projects }) => {
  // return JSON.stringify(projects)
  return <HomeProjectList projects={projects} />
}
