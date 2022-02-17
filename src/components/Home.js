import React from 'react'

function Home() {
  return (
    <div className="col-lg-10 mx-auto">
        <div className="card">
            <div className="card-body text-center">
                <h2 className='mb-0 text-success'>Jayant Raj</h2>
                <a href="tel:+916200500903" className='h6 text-decoration-none text-dark'>+91-6200500903</a><br/>
                <a href="maleto:jayantraj66041@gmail.com" className='h6 text-decoration-none text-dark'>jayantraj66041@gmail.com</a>
                <h3 className='mt-3 text-primary'>Technologies</h3>
                <p className='m-0'>1. Django</p>
                <p className='m-0'>2. Rest Framework</p>
                <p className='m-0'>3. JWT Authorization</p>
                <p className='m-0'>4. React Framework</p>
                <h4>If you want to know more about me? <a href="https://drive.google.com/file/d/16N59oBuDeCSZ0uqLNqBglG5XgDb0g5Ai/view?usp=sharing" target="_blank">Click here</a></h4>
            </div>
        </div>
    </div>
  )
}

export default Home