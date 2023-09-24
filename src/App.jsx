import Wrapper  from "./Components/wrapper/wrapper"
import getRandomColor from "./service/getRandomColor"
import './app.scss'
import { useEffect, useState } from "react";
import getRandomQuote from "./service/getRandomQuote";
function App() {

  const [color, setColor] = useState(""); 
  const [quote, setQuote] = useState(""); 


  useEffect(  () => {
    async function fetchData() {
      try {
        setColor(getRandomColor()); 
        const quoteData = await getRandomQuote();
        setQuote(quoteData); 
      } catch(err) {
        console.error("Ocorreu um erro ao buscar a citação: ", err); 
      }
    }
    fetchData(); 
  }, [])

  const handleColor = async () => {
    setColor(getRandomColor()); 
    const quoteData = await getRandomQuote();
    setQuote(quoteData);

  }

  return (
    <div id="main" style={{ backgroundColor: color }}>
     <Wrapper color={color} handleColor={handleColor} quote={quote}> 
     </Wrapper>
    </div>
  )
}

export default App
