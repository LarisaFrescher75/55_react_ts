

import { EmployeeCardProps } from "./types"
import './styles.css'
function EmployeeCard({ name, position, department, img }: EmployeeCardProps) {
  return (
    <div className="employee-card-container">
      <h2>{name}</h2>
      <img src={img}/>
      <div>{position}</div>
      <div>{department}</div>
    </div>
  )
}
export default EmployeeCard