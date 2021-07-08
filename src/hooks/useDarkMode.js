import useLocalStorage from './useLocalStorage'

const useDarkMode = initialValue => {
  // the key is "darkMode"
  // the value is the initialValue argument
  const [value, setValue] = useLocalStorage('darkMode', initialValue) 

  return [value, setValue]
} 

export default useDarkMode;