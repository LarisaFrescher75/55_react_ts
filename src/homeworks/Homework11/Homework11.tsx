

import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Homework11Container,Result } from "./styles";
import Input from "../../components/Input/Input";


function Homework11() {

  const [note,setNote] = useState<string>('');

  const [additNote, setAdditNote]= 
    
  return(

    <Homework11Container>
      <Input name='note'
       placeholder='Enter your note'
        value=''
        onGhange={()=> {}}/>
        <Result> </Result>
    </Homework11Container>
  )
  };



    

  useEffect(() => {
    setShowCountClick((prevValue) => prevValue + 1)
  }, [count])



  

export default Homework11




