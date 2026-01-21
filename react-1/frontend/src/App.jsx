import react from 'react'
import File1 from './pages/File1'
import File2 from './pages/File2'

const App = ()=>{
    return(
      <div className='p-5'>
        <File2/>
        <File1 name="Mohan" class="BCA"/>
        <File1 name="Sachin" class="BCA"/>
      </div>
    )
}

export default App