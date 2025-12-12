import reactLogo from './assets/react.svg';
import './reactFacts.scss';
import { useEffect } from "react";

export default function ReactFacts() {
  useEffect(() => {
    document.title = 'React Facts'
  }, [])

  return (
      <div className={'react-page'}>
        <header className={'react-header'}>
          <img src={reactLogo} alt={'React logo'} />
          <div>ReactFacts</div>
        </header>
        <main className={'react-main'}>
          <h1>
            Fun facts about React
          </h1>
          <ul className={"facts-list"}>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
          <img src={reactLogo} alt={'React logo'} className={'bg-decoration'} />
        </main>
      </div>
  )
}
