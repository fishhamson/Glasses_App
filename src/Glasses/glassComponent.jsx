import React, { useState } from 'react'
import dataGlasses from './dataGlasses.json'
import './style.css'

const GlassComponent = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  return (
    <div>
      <div className='position-relative'>
        <img src="./glassesImage/model.jpg" alt="model" style={{ display: 'block', margin: '0 auto' }} />
        {selectedGlasses && (
          <>
            <img
              className='img-fluid position-absolute'
              src={selectedGlasses.url}
              alt={selectedGlasses.name}
              style={{ top: '33%', left: '50.1%', transform: 'translate(-50%, -50%)', width: '13%', opacity: '0.9' }}
            />
            <div id="glasses-info">
              <h3>{selectedGlasses.name}</h3>
              <p>Giá tiền: {selectedGlasses.price}$</p>
              <p>Mô tả: {selectedGlasses.desc}</p>
            </div>
          </>
        )}
      </div>
      <div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
        <div class="carousel-inner">
          {[0, 1, 2].map((slideIndex) => (
            <div key={slideIndex} class={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {dataGlasses.slice(slideIndex * 3, slideIndex * 3 + 3).map((glasses) => (
                  <img
                    key={glasses.id}
                    src={glasses.url}
                    class="d-block w-10"
                    alt={glasses.name}
                    onClick={() => setSelectedGlasses(glasses)}
                    style={{ cursor: 'pointer', width: '400px', height: '132px' }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <i class="fas fa-chevron-left" style={{ color: 'gray', fontSize: '30px' }}></i>
          <span class="visually-hidden" >Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <i class="fas fa-chevron-right" style={{ color: 'gray', fontSize: '30px' }}></i>
          <span class="visually-hidden" >Next</span>
        </button>
      </div>
    </div >
  );
}

export default GlassComponent
