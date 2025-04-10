

import { useState, createContext } from "react"

import Card from "../Card/Card"
import { BlogManagementTitle, BlogManagementWrapper } from "./styles"
import { BlogManagementInterface, UserData } from "./types"

// Шаг 1. Создаём хранилище - контекст, с помощью функции createContext,
// которую нужно импортировать из react
// export const MainCardContext = createContext<undefined | UserData>(undefined)

//Пример передачи функции и данных через контекст
export const BlogManagementContext = createContext<BlogManagementInterface>({
  data: undefined,
  changeData: () => { }
})


function BlogManagement() {
  const [userData, setUserData] = useState<UserData|undefined>({
    Name: 'Paul',
    Surname: 'Gerlach'
    
  })

  return (
    //2 шаг. Создаём обёртку, которая позволит получить значение из контекста
    //в любом компоненте, который будет вложен в компонент с оберткой (внук, правнук и т.д.)
    //Провайдер мы получаем из созданного контекста. Провайдер требует передачи данных
    //в контекст через prop value
    // <MainCardContext.Provider value={userData}>

    //Пример передачи функции и данных через контекст
    <BlogManagementContext.Provider value={{
      data: userData,
      changeData: setUserData
    }}>
      <BlogManagementWrapper>
        <BlogManagementTitle>BlogManagement</BlogManagementTitle>
        {/* Пример с props drilling */}
        {/* <Section data={userData} /> */}
        <Card />
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  )
}

export default BlogManagement