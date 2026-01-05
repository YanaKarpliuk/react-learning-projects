import { useEffect, useMemo, useState } from "react";
import Calculator from "./components/Calculator.jsx";
import ToggleSounds from "./components/ToggleSounds.jsx";
import './WorkoutTimer.scss';

// Moved here because doesn't contain any reactive values.
// No need to recreate it on each render.
function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export default function WorkoutTimer() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be AM or PM
  const partOfDay = time.slice(-2);

  // useMemo is used because this is an array.
  const workouts = useMemo(() => {
    return [
      {
        name: "Full-body workout",
        numExercises: partOfDay === "AM" ? 9 : 8,
      },
      {
        name: "Arms + Legs",
        numExercises: 6,
      },
      {
        name: "Arms only",
        numExercises: 3,
      },
      {
        name: "Legs only",
        numExercises: 4,
      },
      {
        name: "Core only",
        numExercises: partOfDay === "AM" ? 5 : 4,
      },
    ]
  }, [partOfDay])

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
      <div className={'workout-timer-page'}>
        <h1>Workout timer</h1>
        <time>For your workout on {time}</time>
        <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound}/>
        <Calculator workouts={workouts} allowSound={allowSound}/>
      </div>
  );
}
