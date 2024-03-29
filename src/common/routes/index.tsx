import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { routes } from './routes'
import ShowNotificationComponent from '../components/ShowNotificationComponent'

export default function RoutesContainer() {
  return (
    <ShowNotificationComponent>
      <Router>
        <Routes>
          <Route path={routes.login.path} element={<routes.login.component />} />
          <Route path={routes.forgotPassword.path} element={<routes.forgotPassword.component />} />
          <Route path={routes.register.path} element={<routes.register.component />} />
          <Route path={routes.signUser.path} element={<routes.signUser.component />} />
          <Route path={routes.otp.path} element={<routes.otp.component />} />

          {/* Place new routes over this */}
          <Route path={routes.adminLayout.path} element={<routes.adminLayout.component />} />
          <Route path={routes.posLayout.path} element={<routes.posLayout.component />} />

          <Route
            path='*'
            element={<Navigate to={routes.login.path} replace />}
          />
        </Routes>
      </Router>
    </ShowNotificationComponent>
  )
}