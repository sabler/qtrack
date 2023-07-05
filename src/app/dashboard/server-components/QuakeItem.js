export default function QuakeItem({ mag, lat, lng }) {
  return (
    <li className="bg-slate-900 p-4 cursor-pointer hover:bg-neutral-900 max-w-xs">
      <div className="text-sm">
        <p>Magnitude: {mag}</p>
        <p>Location: {lat}, {lng}</p>
      </div>
    </li>
  )
}