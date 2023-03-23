import './styless.css';

export const TextInput = ({searchValue,handleChange,placeholder}) => {
    return (
        <input 
            className='text-input'
            onChange={handleChange} 
            type="search" 
            value={searchValue}
            placeholder={placeholder}
        />  
    );
}