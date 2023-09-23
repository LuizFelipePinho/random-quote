import Wrapper  from "./Components/wrapper/wrapper"
import getRandomColor from "./service/getRandomColor"
import './app.scss'
function App() {
  let newColor = getRandomColor(); 
  
  return (
    <div id="main" style={{ backgroundColor: newColor }}>
     <Wrapper color={newColor}> 
     </Wrapper>
     
    </div>
  )
}

export default App
