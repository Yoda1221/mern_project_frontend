import { Routes, Route } from 'react-router-dom'
import { DashLayout, Layout, Public } from './components'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import UsersList from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>
        </Route>{/* End Dash */}
      </Route>
    </Routes>
  )
}

export default App
