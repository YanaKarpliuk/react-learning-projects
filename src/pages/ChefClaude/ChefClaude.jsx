import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import './chefClaude.scss';
import { useEffect } from "react";

export default function ChefClaude() {
  useEffect(() => {
    document.title = 'Chef Claude'

    return function () {
      document.title = 'My React Journey'
    }
  }, [])

  return (
      <div className={'chef-claude-page'}>
        <Header/>
        <Main/>
      </div>
  )
}
