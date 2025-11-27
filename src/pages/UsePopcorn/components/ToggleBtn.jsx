export default function ToggleBtn({isOpen, setIsOpen}) {
  function handleClick() {
    setIsOpen(prev => !prev)
  }

  return (
      <button
          aria-label={isOpen ? 'Hide the column content' : 'Show the column content'}
          className='toggle-list-btn'
          onClick={handleClick}
      >
        {isOpen ? '-' : '+'}
      </button>
  )
}
