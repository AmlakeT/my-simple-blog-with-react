import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] =useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const abortConstatnt = new AbortController()

    setTimeout(() => {
      fetch(url, {signal: abortConstatnt.signal})
      .then(result => {
        if(!result.ok){
          throw Error('could not fetch data from that server')
        }
        return  result.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch(err => {
        if(err.name = "AbortError"){
          console.log('fetch Aborted')
        }
        setIsPending(false)
        setError(err.message)

      })
    }, 1000);

    return () => abortConstatnt.abort

   
  }, [url])

return{data,isPending,error}

}
 
export default useFetch;