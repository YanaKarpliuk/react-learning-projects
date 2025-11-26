export default function ToggleBtn({isOpen, onClick, listName}) {
  return (
      <button
          aria-label={isOpen ? `Close the ${listName}` : `Show the ${listName}`}
          className='toggle-list-btn'
          onClick={onClick}
      >
        {isOpen ? '-' : '+'}
      </button>
  )
}
