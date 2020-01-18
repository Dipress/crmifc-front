import {useState} from 'react';

export default (key, initialValue = '') => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialValue);

  const setLocal = newValue => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  return [value, setLocal];
};
