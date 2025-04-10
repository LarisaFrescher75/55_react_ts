


import { useContext } from 'react'

import { BlogManagementContext } from '../BlogManagement/BlogManagement'
import { CardComponent, DataItem } from "./styles"
import Button from '../../../../components/Button/Button';
// import { ContentProps } from "./types"

function Card() {
  // 3 шаг - Вызываем хук useContext (после импорта из react). В вызов useContext передаём
  // контекст, который был создан на шаге 1 (нужно импортировать). При вызове хук useContext 
  // возвращает данные, которые храняться в контексте

  // const userContentData = useContext(MainCardContext)

  //Пример передачи функции и данных через контекст
  // const userContentData = useContext(MainCardContext)
  // Деструктурирующее присваивание
  const { data, changeData } = useContext(BlogManagementContext)

  const message = () => {
    changeData(undefined)
  }

  return (
    <CardComponent>
      {/* Если переменная может содержать объект или undefined, тогда
      перед обращением к свойству объекта, желательно ставить знак вопроса,
      чтобы избежать случая получения undefined(пустого свойства). То есть
      знак вопроса проверяет является ли переменная слева объектом */}
      <DataItem> Name: {data?.Name}</DataItem>
      <DataItem>Surname: {data?.Surname}</DataItem>
      
      <Button name='Message' onClick={message} />
    </CardComponent>
  )
}

export default Card