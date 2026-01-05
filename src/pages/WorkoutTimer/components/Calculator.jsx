import { useState, memo } from 'react';
import clickSound from '../assets/ClickSound.m4a';

// Memo won't work here because 'workouts' is an array.
// useMemo should be used for 'workouts'.
export default memo(function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);

  const duration = (number * sets * speed) / 60 + (sets - 1) * durationBreak;
  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  const playSound = function () {
    if (!allowSound) return;
    const sound = new Audio(clickSound);
    sound.play();
  };

  return (
      <>
        <form>
          <div className={'form-row'}>
            <label htmlFor='type'>Type of workout</label>
            <select id='type' value={number} onChange={(e) => setNumber(+e.target.value)}>
              {workouts.map((workout) => (
                  <option value={workout.numExercises} key={workout.name}>
                    {workout.name} ({workout.numExercises} exercises)
                  </option>
              ))}
            </select>
          </div>
          <div className={'form-row'}>
            <label htmlFor='sets'>How many sets?</label>
            <input
                id='sets'
                type='range'
                min='1'
                max='5'
                value={sets}
                onChange={(e) => setSets(e.target.value)}
            />
            <span>{sets}</span>
          </div>
          <div className={'form-row'}>
            <label htmlFor='speed'>How fast are you?</label>
            <input
                id='speed'
                type='range'
                min='30'
                max='180'
                step='30'
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
            />
            <span>{speed} sec/exercise</span>
          </div>
          <div className={'form-row'}>
            <label htmlFor='break'>Break length</label>
            <input
                id='break'
                type='range'
                min='1'
                max='10'
                value={durationBreak}
                onChange={(e) => setDurationBreak(e.target.value)}
            />
            <span>{durationBreak} minutes/break</span>
          </div>
        </form>
        <section>
          <button
              aria-label='Decrease time'
              className='decrease'
              onClick={() => {
              }}
          >–
          </button>
          <p>
            {mins < 10 && '0'}
            {mins}:{seconds < 10 && '0'}
            {seconds}
          </p>
          <button
              aria-label='Increase time'
              className='increase'
              onClick={() => {
              }}
          >+
          </button>
        </section>
      </>
  );
})
