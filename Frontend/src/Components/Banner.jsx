import React from 'react';

const Banner = () => {
  const cardsData = [
    { iconClass: 'fas fa-book fa-2x',count:'1000+',heading:'eBooks', description: 'Explore our vast collection of 1000 eBooks, covering a myriad of genres, to fuel your reading passion.' },
    { iconClass: 'fas fa-users fa-2x',count:'10K+',heading:'Users', description: 'Join our community of 10,000 users and dive into a world of literary exploration on our book website.' },
    { iconClass: 'fas fa-pen fa-2x',count:'500+',heading:'Genres', description: 'With over 500 genres to choose from, you\'re bound to find your next favorite eBook here.' },
  ];

  return (
    <div style={{backgroundColor:"oldlace"}}>
      <div className="container ">
      <div className="row " >
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4">
            <div className="card mt-5 mb-5"style={{background:"linear-gradient(to top,rgba(243, 241, 241, 0.856),rgba(231, 218, 218, 0.699))"}} >
              <div className="card-body text-center">
                <div className="card-icon">
                  <i className={card.iconClass} style={{color:" #ea6161"}}></i>
                </div>
                <h3 className="card-text ">{card.count}</h3>
                <h4 className="card-text mt-2 ">{card.heading}</h4>
                <p className="card-text fs-7">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Banner;
