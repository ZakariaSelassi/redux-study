import React from 'react'
import IceCreamView from './layout/IceCreamView'
import CakeView from './layout/CakeView'
import UserView from './layout/UserView'
const App = () => {
  return (
    <div>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App