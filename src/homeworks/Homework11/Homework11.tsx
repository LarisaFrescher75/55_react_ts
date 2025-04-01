

import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Homework11Container,Result } from "./styles";
import Input from "../../components/Input/Input";


function Homework11() {
    const [count, setCount] = useState<number>(0);
  const [showCountClick, setShowCountClick] = useState<number>(-1);

  const plusCount = () => {
    if (count < 15) {
      setCount((prevValue) => prevValue + 1);
    }
  };

  const minusCount = () => {
    if (count > -15) {
    setCount((prevValue) => prevValue - 1);
    }
  };



    

  useEffect(() => {
    setShowCountClick((prevValue) => prevValue + 1)
  }, [count])



  return (
  <Homework11Container>
        <Result >{count}</Result>
      
        <Button name="+" onClick={plusCount} disabled={count === 15} />
        <Button name="-" onClick={minusCount} disabled={count === -15} danger />
        
      
      <Result>Вы кликнули на кнопку {showCountClick === -1? '0' : showCountClick} раз</Result>
  </Homework11Container>
)
}

export default Homework11




