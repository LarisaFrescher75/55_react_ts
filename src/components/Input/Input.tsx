







import './styles.css';
import { InputProps } from './types.ts';

<<<<<<< HEAD

function Input() {
  return < input className='input-component'name ='test' 
  
  placeholder="Enter your name..."
  />
}

export default Input;
=======
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
>>>>>>> 412637179a9dc7ed1268e6510e1ed495ec66758b
