import { db } from 'src/lib/db'

export const projects = () => {
  return db.project.findMany()
}

export const project = ({ id }) => {
  return db.project.findOne({
    where: { id },
  })
}

export const createProject = ({ input }) => {
  const inputConverted = {...input, roles: {set: input.roles}}
  return db.project.create({
    data: inputConverted,
  })
}

export const updateProject = ({ id, input }) => {
  const inputConverted = {...input, roles: {set: input.roles}}
  return db.project.update({
    data: inputConverted,
    where: { id },
  })
}

export const deleteProject = ({ id }) => {
  return db.project.delete({
    where: { id },
  })
}
