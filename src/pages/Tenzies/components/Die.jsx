export default function Die(props) {
  return (
      <button
          className={`die-button ${props.isSelected && 'selected'}`}
          onClick={() => props.selectDice(props.id)}
          aria-pressed={props.isSelected}
          aria-label={`Die with value ${props.value}, 
            ${props.isSelected ? "selected" : "not selected"}`}
      >
        {props.value}
      </button>
  )
}
