import React from 'react'
import "./Donate.css"

const Donate = () => {
  return (
    <section className="donate-section">
      <div className="container">
        <div className="grid">

          <div className="left-col">
            <div className="sticky-heading">
              <h2 className="heading">Donate to D!</h2>
            </div>
          </div>

          <div className="right-col">
            <div className="donate-content">
              <p className="donate-text">
                Design Declares is a CIC and would not exist without our dedicated team of
                co-steers, volunteers, and our passionate community working towards change in the
                creative industry. Your support can go a long way, and helps us to continue the
                valuable work needed in tackling the climate crises. If you believe in the work we
                do, please consider a small donation to help us on our journey for a more equitable
                and just planet.
              </p>
              <div className="donate-buttons">
                <a href="https://wise.com/pay/r/uZ5h3pxRMmTE_pk" target="_blank" className="donate-btn">Donate £10</a>
                <a href="https://wise.com/pay/r/u2IiQNt2ebixruk" target="_blank" className="donate-btn">Donate £20</a>
                <a href="https://wise.com/pay/r/2vqUbqPfU9hvVLE" target="_blank" className="donate-btn">Donate £50</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Donate
