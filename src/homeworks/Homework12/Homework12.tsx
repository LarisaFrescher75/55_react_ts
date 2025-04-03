

import axios from "axios";
import Button from "../../components/Button/Button"
import { Homework12Container, CatsWrapper} from "./styles"
import { useState } from "react";

function Homework12() {

    const [cats, setCats] = useState <string | undefined>(undefined);
    //const [error, setError] = useState<string | undefined>(undefined);
  //const [isLoading, setIsLoading] = useState<boolean>(false);


    const CATS_URL: string ='https://catfact.ninja/fact';

    const getCats= async()=>{

        //setError(undefined)

        try{

            //setIsLoading(true);
            const response = await axios.get(CATS_URL)

            console.log(response.data);

           // const result = response.data;
            
            setCats(CATS_URL)
            
        }catch(error:any){
            console.log(error.message);
            
           }   finally{
            console.log('Запрос завершен успешно!');
            
            }

    }

    return(
        <Homework12Container>

            <Button name="GET MORE FACTS" onClick={getCats}/>
            
                <CatsWrapper>{cats}</CatsWrapper>
             
                
        </Homework12Container>
    )
}

export default Homework12