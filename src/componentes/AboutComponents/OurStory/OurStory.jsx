import './OurStory.css'
const Story = () => {
  return (
    <>


      <section className="our-story">
        <div className="our-story__header">
          <h2 className="our-story__title">Our story</h2>
          <p className="our-story__subtitle">
            Kave started long before it had a name or a brand.
          </p>
        </div>

        <div className="our-story__body">
          <p className="our-story__main">
            The project emerged from a way of understanding work, relationships
            and commitment. It all started in a small warehouse in Sils, where
            mattresses were distributed to hotels along the Costa Brava. There
            may have been hardly any resources, but there was an unwavering
            commitment to doing things well, working rigorously and flexibly,
            with attention to detail.
          </p>

          <p className="our-story__side">
            What began as a local project spearheaded by Francesc Julià took
            shape thanks to the constant work and effort of all of the people
            who got involved, contributing their time, skills and a shared
            desire to improve every day. And so a culture based on trust,
            curiosity and the desire to leave a long-term mark began to take
            shape. Today, this continues to be the foundation guiding
            everything that we do.
          </p>
        </div>
      </section>
    </>
  )
}

export default Story