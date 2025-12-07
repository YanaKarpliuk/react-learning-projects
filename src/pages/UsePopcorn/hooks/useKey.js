import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    function callback (e) {
      if (e.code.toLowerCase() === key.toLowerCase()) action()
    }

    document.addEventListener('keydown', callback)

    // Need to clean up the event because it gets accumulated on the document.
    // The function should be exactly the same.
    return function() {
      document.removeEventListener('keydown', callback)
    }
  }, [key, action])
}
