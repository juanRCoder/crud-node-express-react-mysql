import { createBrowserRouter } from 'react-router-dom'
import { usersRouter } from './modules/users/routes/users.routes.'


export const mainRouter = createBrowserRouter([
  ...usersRouter
])
