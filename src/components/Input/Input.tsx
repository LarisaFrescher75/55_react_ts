
AIT logo
Student cabinet
Scheduler
React:_Controlled_and_uncontrolled_components
Cohort 55.1m-fs
Front_end
Lesson Nr: 07
Lecture
Wed, 26.03.2025
Ekaterina Zavertyaeva






import './styles.css';
import { InputProps } from './types';

function Input({
  placeholder,
  name,
  value,
  type = 'text',
  onChange,
  label,
  id
}: InputProps) {
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        className='input-component'
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        id={id}
      />
    </div>
  )
}

export default Input;
