import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="page about">
      <header className="page-header">
        <h1>About Pie Riot</h1>
        <p>A bakery that treats dessert like a main event and mildness like a missed opportunity.</p>
      </header>

      <div className="about__content">
        <section className="panel">
          <h2>Born from a burnt lattice</h2>
          <p>
            Pie Riot started when two pastry cooks decided diner pie was too polite. They browned
            the butter harder, spiked the fruit with pepper, and shipped overnight so crusts stayed
            sharp across state lines.
          </p>
          <p>
            Today we bake twelve rotating flavors in small batches — fruit, cream, nut, seasonal,
            and one serious savory for the dinner table.
          </p>
        </section>

        <section className="panel">
          <h2>How we ship</h2>
          <p>
            Every order leaves in insulated packaging with cold packs. Free shipping starts at $75.
            Pies arrive ready to chill, warm, or devour standing at the counter.
          </p>
          <Link to="/warning" className="text-link">
            Read allergen & handling warnings →
          </Link>
        </section>

        <section className="panel">
          <h2>Join the riot</h2>
          <p>Browse the menu, set your shipping profile, and pick a pie with opinions.</p>
          <div className="hero__actions">
            <Link to="/shop" className="btn btn--primary">
              Shop pies
            </Link>
            <Link to="/profile" className="btn btn--secondary">
              Set shipping address
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
