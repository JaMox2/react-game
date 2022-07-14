export default function Card({img, name, func}) {

  return (
    <div className="card" onClick={(e)=>func(e)}>
      <img src={img} alt={name} />
      <span>{name}</span>
    </div>
  )
}
