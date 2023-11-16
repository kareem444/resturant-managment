import { useEffect } from 'react'
import { themeChange } from 'theme-change'
// import checkAuth from './unUsed/app/auth';
// import initializeApp from './unUsed/app/init';
import RoutesContainer from './common/routes';
import { useTranslate } from './common/hooks/useTranslate';

// Initializing different libraries
// initializeApp()

// Check for login and initialize axios
// const token = checkAuth()

function App() {
  const { dir } = useTranslate()

  useEffect(() => {
    document.body.dir = dir
  }, [dir])

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])


  return (
    <RoutesContainer />
  )
}

export default App
