
import Button from "../../components/Button/Button";
<<<<<<< HEAD


//пример  именованного импорта по умолчанию (нужно использовать точное название и заключать его 
//в фигурные скобки)

=======
//пример именованного импорта (нужно использовать точное название и заключать его 
//в фигурные скобки)
>>>>>>> 412637179a9dc7ed1268e6510e1ed495ec66758b
import { getAction, TRAFFIC_LIGHT } from "./object_types";

function Lesson06() {
  console.log(getAction(TRAFFIC_LIGHT.GREEN));
  

  return <Button name='Send'/>
}

//Экспорт по умолчанию для компонента Lesson06
export default Lesson06;
