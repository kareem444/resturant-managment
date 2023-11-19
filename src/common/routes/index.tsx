import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { routes } from './routes'

export default function RoutesContainer() {
  return (
    <Router>
      <Routes>
        <Route path={routes.login.path} element={<routes.login.component />} />
        <Route path={routes.forgotPassword.path} element={<routes.forgotPassword.component />} />
        <Route path={routes.register.path} element={<routes.register.component />} />
        <Route path={routes.otp.path} element={<routes.otp.component />} />

        {/* Place new routes over this */}
        <Route path={routes.layout.path} element={<routes.layout.component />} />

        <Route
          path='*'
          element={<Navigate to='/login' replace />}
        />
      </Routes>
    </Router>
  )
}