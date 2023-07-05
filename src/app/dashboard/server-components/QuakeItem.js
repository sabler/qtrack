export default function QuakeItem({ mag, lat, lng }) {
  return (
    <li>
      <p>Magnitude: {mag}</p>
      <p>Location: {lat}, {lng}</p>
    </li>
  )
}