import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

export default endpointUrl => {
  const baseUrl = 'http://localhost:8080';

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    axios(baseUrl + endpointUrl, options)
      .then(response => {
        setIsLoading(false);
        setResponse(response.data);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error.response.data);
      });
  }, [isLoading, options, endpointUrl]);

  return [{isLoading, response, error}, doFetch];
};
