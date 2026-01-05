import { memo } from "react";

// Memo works great here because props are primitive values (objects and arrays aren't used)
export default memo(function ToggleSounds({ allowSound, setAllowSound }) {
  return (
      <button
          aria-label={allowSound ? 'Turn off the sound' : 'Turn on the sound'}
          className="btn-sound"
          onClick={() => setAllowSound((allow) => !allow)}
      >
        {allowSound ? "🔈" : "🔇"}
      </button>
  );
})
