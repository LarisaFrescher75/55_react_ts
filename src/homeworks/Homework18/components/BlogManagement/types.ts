


import { Dispatch, SetStateAction } from "react"

export interface UserData {
  Name: string,
  Surname: string,
  
}

export interface BlogManagementInterface {
  data: UserData | undefined,
  //при типизации функции для изменения state в треугольные скобки дженерика
  //для типа SetStateAction добавляем типизацию state - Dispatch<SetStateAction<типизация state>>
  changeData: (() => void) | Dispatch<SetStateAction<UserData | undefined>>
}