import reactLogo from '../assets/react.svg';

export default function Header() {
  return (
      <header className='quiz-header'>
        <img src={reactLogo} alt={'React logo'} />
        <h1>The React Quiz</h1>
      </header>
  )
}
