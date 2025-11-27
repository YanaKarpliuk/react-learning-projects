import ToggleBtn from "../ToggleBtn.jsx";
import { useState } from "react";

export default function Column({children}) {
  const [isOpen, setIsOpen] = useState(true)

  return (
      <div className='column'>
        <ToggleBtn
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
        {isOpen && children}
      </div>
  )
}
