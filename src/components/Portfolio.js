import React from 'react'

const Portfolio = () => {
    const [state] = React.useState([
        {id: 1, image: "/images/01.jpg", name: 'Shakil Khan', expert: 'Flutter'},
        {id: 2, image: "/images/02.jpg", name: 'Fawad', expert: 'React'},
        {id: 3, image: "/images/03.jpg", name: 'Fatma', expert: 'Vue JS'},
    ]);
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__section">
                <div className="row">
                <div className="col-4">
                    <div className="portfolio__content">
                        <h6 className="portfolio__content-h6">EMPLOYEES</h6>
                        <h3 className="portfolio__content-h3">OUR TEAM.</h3>
                    </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {state.map(user => (
                                <div className="col-4 pl-15" key={user.id}>
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={user.image} alt="card"/>
                                 </div>
                            <h5 className="portfolio__card-name">{user.name}</h5>
                            <p className="portfolio__card-expert">{user.expert}</p>
                             </div>
                            </div>
                            ))}
                            
                           
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
