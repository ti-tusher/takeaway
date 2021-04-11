import Head from 'next/head'
import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { Col, Container, Row } from 'react-bootstrap';
import Inbanner from '../comps/Inbanner'

const Gallerypage = () => {
  
 
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });
    
    function openLightboxOnSlide(number) {
      setLightboxController({
        toggler: !lightboxController.toggler,
        slide: number
      });
    }

    const photos = [
      './gallery/01.jpg',
      './gallery/02.jpg',
      './gallery/03.jpg',
      './gallery/04.jpg'
    ];

    const styling = {
      objectFit: 'cover',
      cursor: 'pointer'
  }

    return (
      <>
      <Head>
          <title>Henlow Tandoori | Food &amp; Takeaway Gallery</title>           
          <meta name="description" content="Visit photo gallery of Henlow Tandoori, located in Hitchin Road, Henlow Camp, Henlow SG16 6DP, offering the best food to cater for everyone's tastebuds."></meta>        
      </Head>
      <Inbanner title="Gallery" />      
      <div className="gallery">
        <Container>
            <Row>
                <Col>
              <div className="gallery-grid grid">
                {
                  photos.map((elem, ind) => {
                  let num = ind + 1
                  
                  return (
                      <img style={styling}
                      key={ind} 
                      src={elem} 
                      onClick={() => openLightboxOnSlide(num)} 
                      />
                      )
                  })
                }       
              </div>
            </Col>   
          </Row>
        </Container>           
  
        <FsLightbox
          toggler={ lightboxController.toggler }
          sources={ photos }
          slide={ lightboxController.slide }
        />
      </div>  
      </>
    );
}
export default Gallerypage;