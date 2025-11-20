import { data } from '../data/data'

export default function Select({handleChange}) {
  const selectEl = Object.entries(data).map(([key, value]) => {
    return (
        <div className="form__inner-wrapper" key={key}>
          <label htmlFor={key}>
            Select a {key}
          </label>
          <select
              name={key}
              id={key}
              onChange={handleChange}
          >
            {value.map(option => {
              return (
                  <option key={option.value} value={option.value}>{option.name ? option.name : option.value}</option>
              )
            })}
          </select>
        </div>
    )
  })

  return <>{selectEl}</>
}
