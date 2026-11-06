import { Link } from 'react-router-dom'

const warnings = [
  {
    title: 'Allergens in the house',
    body: 'Our kitchen handles wheat, dairy, eggs, tree nuts (especially pecans), and soy. Cross-contact is possible on every pie.',
  },
  {
    title: 'Hot fillings burn',
    body: 'Fruit pies leave the oven molten. Cool at least 45 minutes before slicing, or enjoy the theatrical steam at your own risk.',
  },
  {
    title: 'Chilled shipping only',
    body: 'Pies ship overnight with ice packs. Do not leave boxes in sun or vehicles. Refrigerate on arrival; freeze within 24 hours if saving for later.',
  },
  {
    title: 'Flavor intensity',
    body: 'Peppered strawberry, bitter chocolate, smoked pumpkin — our pies lean bold. If you prefer mild diner pie, start with Apple Lattice Riot.',
  },
]

export default function Warning() {
  return (
    <div className="page warning-page">
      <header className="page-header warning-page__header">
        <p className="eyebrow">Important notice</p>
        <h1>Pie Riot Warning Board</h1>
        <p>
          Read before you riot. These aren’t scare tactics — they’re how we keep forks, guts, and crusts safe.
        </p>
      </header>

      <div className="warning-page__banner" role="alert">
        <strong>Contains allergens.</strong> Wheat · Dairy · Eggs · Tree nuts · Soy
      </div>

      <div className="warning-grid">
        {warnings.map((item) => (
          <article key={item.title} className="warning-card">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <div className="section__cta">
        <Link to="/shop" className="btn btn--primary">
          I understand — show me pies
        </Link>
        <Link to="/report" className="btn btn--ghost">
          Report an issue
        </Link>
      </div>
    </div>
  )
}
