


import { Lesson12Container, JokeWrapper, Error } from "./styles"
import axios from "axios";
import Button from "../../components/Button/Button"
import Spinner from "../../components/Spinner/Spinner";

import { useState } from "react";


function Lesson12() {

    const [joke, setJoke] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);

    const [isLoading, setIsLoading] = useState<boolean>(false);

  const JOKE_URL: string = 'https://official-joke-api.appspot.com/random_joke';
  //Пример запроса GET с использованием axios
  const getJoke = async () => {

     //очистка ошибки, при каждом новом запуске функции
     setError(undefined)


    // в блоке try отправляется запрос и обрабатывается успешный результат ответа
    try {
        setIsLoading(true);
      const response = await axios.get(JOKE_URL)
      console.log(response.data);

      const data = response.data;

      setJoke(`${data.setub} - ${data.punchline}`)
    }
    // в блоке catch обрабатывается ошибка (при получении ошибки запроса, информация о ней
    // будет передана в error)
    catch (error:any) {

        console.log(error.massage);



    }
    //в блоке finally прописываются действия, которые должны быть выполнены в любом случае
    //при ошибке или при получении данных
    
    finally {

        console.log('Результат получен');
        setIsLoading(false);
        
    }
  }
  return (
    <Lesson12Container>
      <Button name='GET JOKE' onClick={getJoke} />
      {isLoading && <Spinner />}
      <JokeWrapper>{joke}</JokeWrapper>
      <Spinner />
      <Error>{error}</Error>
    </Lesson12Container>
  )
}
export default Lesson12