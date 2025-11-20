import {useState, useEffect, useRef} from "react";
import {Notify} from "notiflix";
import TextItem from "./TextItem.jsx";

const initialMemeTexts = JSON.parse(localStorage.getItem("memeTexts")) || [];

export default function Main() {
  const [memeImage, setMemeImage] = useState('http://i.imgflip.com/1bij.jpg')
  const [allMemeImages, setAllMemeImages] = useState([])
  const [memeTexts, setMemeTexts] = useState(initialMemeTexts);

  // Get all meme images
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
  }, [])

  // Add meme texts to local storage
  useEffect(() => {
    localStorage.setItem("memeTexts", JSON.stringify(memeTexts));
  }, [memeTexts]);

  // Get a random meme image on click
  function getRandomMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemeImages.length)
    setMemeImage(allMemeImages[randomNum].url)
  }

  // Add meme text
  function addMemeText(text) {
    if (text.content === "") {
      Notify.failure("Please enter a meme text");
    } else if (memeTexts.length === 5) {
      Notify.failure("You can add max 5 meme texts");
    } else {
      setMemeTexts((prev) => [...prev, text]);
    }
  }

  function updateMemeText(text) {
    setMemeTexts((prev) => {
      return prev.map((item) => {
        return item.id === text.id ? text : item;
      });
    });
  }

  function removeMemeText(textId) {
    setMemeTexts((prev) => {
      return prev.filter((item) => {
        return item.id !== textId;
      });
    });
  }

  // Submit form
  function handleSubmit(e) {
    e.preventDefault();

    const memeText = {
      id: Math.random(),
      content: e.target.elements.content.value
    };

    e.target.reset();
    addMemeText(memeText);
  }

  // Draggable text
  const isDraggingRef = useRef(false);
  const [currentRotate, setCurrentRotate] = useState(0);
  // Needed to fix the findDOMNode deprecation issue
  const nodeRef = useRef(null);

  function onDrag() {
    isDraggingRef.current = true;
  }

  function onStop() {
    if (!isDraggingRef.current) {
      setCurrentRotate(currentRotate + 90);
    }
    isDraggingRef.current = false;
  }

  return (
      <main>
        <form className="meme-form" onSubmit={handleSubmit}>
          <input
              type="text"
              className="form-input"
              placeholder="Enter text"
              name="content"
              id="content"
          />
          <input className="form-submit" aria-label="Add a new meme text" type="submit" value="+"/>
        </form>
        <button type="button" className="get-meme-btn" onClick={getRandomMemeImage}>Get a new meme image 🖼</button>
        <div className="meme-content">
          <img className='meme-image' src={memeImage}/>
          {memeTexts.map((text, index) => (
              <TextItem
                  key={text.id}
                  text={text}
                  idx={index}
                  onRemove={removeMemeText}
                  onUpdate={updateMemeText}
                  onStop={onStop}
                  onDrag={onDrag}
                  nodeRef={nodeRef}
              />
          ))}
        </div>
      </main>
  )
}
