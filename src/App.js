import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Titles from './components/Titles';
import Pagenation from './components/pagenation';

function App() {


  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState(`https://pokeapi.co/api/v2/pokemon`)
  const [prevPage, setPrevPage] = useState(``)
  const [nextPage, setNextPage] = useState(``)
  const [loading, setLoading] = useState(true)

  useEffect(
    () => {
      let cancel;
      setLoading(true)
      axios.get(currentPage, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      })
        .then(res => {
          setLoading(false)
          setPrevPage(res.data.previous)
          setNextPage(res.data.next)
          setPokemon(res.data.results.map(p => p.name))
        })

        .catch(error => console.log(error))

      return () => (cancel())

    }, [currentPage]
  )

  const goToPrevPage = () => {
    setCurrentPage(prevPage)
  }

  const goToNextPage = () => {
    setCurrentPage(nextPage)
  }

  if (loading) {
    return (<div>"loading..."</div>)
  }

  return (
    <div className="App">
      App
      <Titles pokemon={pokemon} />

      <Pagenation
        prevPage={prevPage ? goToPrevPage : null}
        nextPage={nextPage ? goToNextPage : null} />
    </div>
  );
}

export default App;
