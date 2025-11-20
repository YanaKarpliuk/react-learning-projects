import { decode } from 'html-entities';

export default function EmojiButton(
    {
      handleClick,
      emoji,
      index,
      selectedCardEntry,
      matchedCardEntry
    }) {

  const btnStyle =
      matchedCardEntry ? "btn--emoji__back--matched" :
          selectedCardEntry ? "btn--emoji__back--selected" :
              "btn--emoji__front"

  const btnAria =
      matchedCardEntry ? `${emoji.name}. Matched` :
          selectedCardEntry ? `${emoji.name}. Not matched yet` :
              "?. Card upside down"

  return (
      <button
          className={`btn btn--emoji ${btnStyle}`}
          onClick={!selectedCardEntry ? handleClick : null}
          disabled={matchedCardEntry}
          aria-label={`Position ${index + 1}: ${btnAria}. `}
          aria-live='polite'
      >
        {selectedCardEntry || matchedCardEntry ? decode(emoji.htmlCode[0]) : '?'}
      </button>
  )
}
