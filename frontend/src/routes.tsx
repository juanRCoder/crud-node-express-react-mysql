import { createBrowserRouter } from 'react-router-dom'
import { usersRouter } from './modules/users/users.routes.'


export const mainRouter = createBrowserRouter([
  ...usersRouter
])
