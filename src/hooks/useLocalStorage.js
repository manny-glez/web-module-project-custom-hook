import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    
    // retrieve from localStorage by key, which is "darkMode" in this case
    const item = localStorage.getItem(key);

    // if the key passed in already exists in localStorage, return that value
    // otherwise, return whatever initialValue was (false)
    return item ? JSON.parse(item) : initialValue;
  });

  // To update a key's value in localStorage
  const setValue = value => {

    localStorage.setItem(key, JSON.stringify(value))

    setStoredValue(value);
  };
  
  return [storedValue, setValue];
};

export default useLocalStorage;