export const schema = gql`
  type Project {
    id: Int!
    name: String!
    type: String!
    year: Int!
    text: String!
    client: String!
    roles: [String]!
  }

  type Query {
    projects: [Project!]!
    project(id: Int!): Project
  }

  input CreateProjectInput {
    name: String!
    type: String!
    year: Int!
    text: String!
    client: String!
    roles: [String]!
  }

  input UpdateProjectInput {
    name: String
    type: String
    year: Int
    text: String
    client: String
    roles: [String]!
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: Int!, input: UpdateProjectInput!): Project!
    deleteProject(id: Int!): Project!
  }
`
