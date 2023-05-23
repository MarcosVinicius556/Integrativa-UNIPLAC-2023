import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Cards from '../Cards/Cards';
import './writing-carousel.css';

// eslint-disable-next-line react/prop-types
function WritingCarousel({ list }) { 
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(`${carousel.current?.scrollWidth} ${carousel.current?.offsetWidth}`)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRigthClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <>
      <div className="main-carousel">
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}> 
          <motion.div 
          className='inner'
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.8 }}>
              {
                // eslint-disable-next-line react/prop-types
                list.map(obj => (
                                <motion.div key={obj.name}> 
                                    <Cards 
                                        name={obj.name} 
                                        img={obj.img}
                                        type={obj.caseType}
                                        linguage={obj.language}
                                        textOne={obj.aboutOne}
                                        textTwo={obj.aboutTwo} 
                                        className={obj.className}/>
                                    </motion.div>
                                )   
                            )
              }
          </motion.div>
        </motion.div>
      </div>
      <div className="buttons-carousel">
        <button className='btn-carousel voltar' onClick={handleLeftClick}></button>
        <button className='btn-carousel avancar' onClick={handleRigthClick}></button>
      </div>
    </>
  )
}

export default WritingCarousel;