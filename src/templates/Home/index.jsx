import './styles.css';
import React, { useEffect, useState, useCallback } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const run = useCallback(() => {
    setResult(null);
    setError(null);
    setStatus('pending');

    return asyncFunction()
      .then((response) => {
        setStatus('settled');
        setResult(response)
      })
      .catch((error) => {
        setStatus('error');
        setError(error);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun)
      run();

  }, [run,shouldRun])

  return [run, result, error, status]
}

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
}

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  useEffect(() => {
    reFetchData();
  }, [])

  if (status === 'idle') {
    return (
      <pre>NADA</pre>
    );
  }

  if (status === 'pending') {
    return (
      <pre>CARREGANDO</pre>
    );
  }

  if (status === 'error') {
    return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
    );
  }

  if (status === 'settled') {
    return (
      <pre>{JSON.stringify(result, null, 2)}</pre>
    );
  }
}
