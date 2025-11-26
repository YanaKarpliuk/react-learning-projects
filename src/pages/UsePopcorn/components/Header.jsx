import Search from "./Search.jsx";
import FoundResults from "./FoundResults.jsx";

export default function Header({results}) {
  return (
      <header>
        <h1 className='app-name'>🍿 usePopcorn</h1>
        <Search/>
        <FoundResults results={results}/>
      </header>
  )
}
