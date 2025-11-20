import React, {useState} from "react";
import Draggable from "react-draggable";

export default function TextItem(props) {
  const [edit, setEdit] = useState(false);

  function handleDeleteClick() {
    props.onRemove(props.text.id);
  }

  function handleEditClick(e) {
    setEdit(true);
    e.target.closest('.meme-text-form').querySelector('.textarea').focus();
  }

  function handleSubmitEdit(e) {
    e.preventDefault();

    setEdit(false);

    const text = {
      ...props.text, // previous text
      content: e.target.closest('.meme-text-form').querySelector('.textarea').innerText,
    };

    props.onUpdate(text);
  }

  function handleSaveByKeydown(e) {
    if (e.key === "Enter") {
      handleSubmitEdit(e);
    }
  }

  return (
      <Draggable
          onStop={props.onStop}
          onDrag={props.onDrag}
          nodeRef={props.nodeRef}
          bounds="parent">
        <div
            ref={props.nodeRef}
            className="meme-text"
            style={{top: props.idx * 45}}>
          <form className="meme-text-form" onSubmit={handleSubmitEdit}>
            <div
                className="textarea"
                role="textbox"
                name="content"
                contentEditable={edit}
                tabIndex={edit ? '0' : '-1'}
                suppressContentEditableWarning={true}
                onKeyDown={handleSaveByKeydown}
                >
              {props.text.content}
            </div>
            <div className="actions">
              {edit && (
                  <input
                      type="submit"
                      className="actions-btn save"
                      aria-label="Save the meme text"
                      value='Save'
                  />
              )}
              {!edit && (
                  <button
                      type="button"
                      onClick={handleEditClick}
                      className="actions-btn edit"
                      title="Edit"
                      aria-label="Edit the meme text"
                  >
                    Edit
                  </button>
              )}
              <button
                  type="button"
                  onClick={handleDeleteClick}
                  className="actions-btn delete"
                  title="Delete"
                  aria-label="Delete the meme text"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </Draggable>
  );
}