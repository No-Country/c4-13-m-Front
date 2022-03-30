import React from 'react'
import Sidebar from './sidebar/Sidebar'
import ItemListContainer from './container/ItemListContainer'
import '../index.css'
const Main = () => {
  return (
    <div className='main'>
      <div className='d-flex main-container' >
     <div className='left' >
     <Sidebar/>
     </div>
        <div className='right' >
          hay algo aca
          <ItemListContainer/>
        </div>
      </div>
    </div>
  )
}

export default Main
