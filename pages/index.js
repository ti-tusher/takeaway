import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Slider from '../comps/Slider'
import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'next/image'

export default function Home() {
  return (
<>
  <Head>
    <title>Henlow Tandoori | Order Indian Takeaway in Henlow Camp, Henlow</title>
    <meta name="description" content="Best Indian Takeaway in Henlow Camp, Henlow. Order authentic Indian food, covering Lower Stondon, Shefford, Shillington, Langford and nearby areas."></meta>
  </Head> 
    <div className="home">
      <Slider />
      <section className={styles.intro}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.h1}>Best Indian Takeaway in Henlow Camp, Henlow</h1>
              <h2 className={styles.h2}>Local Indian Takeaway in Henlow Camp, Henlow SG16 serving near Lower Stondon, Shefford SG17, Shillington SG5 & Langford SG18</h2>
              <div className={styles.divider}></div>
              <p className={styles.text}>
              Henlow Tandoori, top-ranked Indian takeaway in Henlow Camp, offers you a great selection of innovative & mouthwatering dishes. We are currently serving in Lower Stondon, Shefford, Shillington, Langford and providing many traditional and old favorites that will leave you wanting for more.<br/><br/>

              Our chefs at Henlow Tandoori always ensure the fulfillment of your taste bud with the specialties in their field. You can always explore our popular foods namely – Chicken Tikka Balti, Chicken Muli, Dhanya, King Prawn Changasi, Jalfrazy etc. Don’t forget to order online delicious Indian food in Henlow Camp with just a few clicks through our website. Get mesmerized with our specialties today and enjoy delicious food.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Order section */}
      <div className={styles.online_order_section}>
      <div className={styles.order_background}></div>
      <Container>
        
        <Row className={`${styles.offer_div} ${styles.top_offer_div}`}>
          <Col className="text-center">
            <div className={styles.offer_img_div}>
              <Image src="/offer1.jpg" className={styles.offer_image} alt="offer" width={777} height={430}></Image>
            </div>
            <div className={styles.offer_content}>
              <h4 className={styles.offer_slogun}>
                10% Discount
              </h4>
              <p>
                On Orders Over £15
              </p>
              <Link href="#"><a className="btn btn-danger">Get Discount</a></Link>
            </div>
            
          </Col>
        </Row>

        <Row className={styles.offer_div2}>
          <Col className="text-center">
            <div className={styles.offer_img_div2}>
              <Image src="/offer2.jpg" className={styles.offer_image} alt="offer" width={777} height={430}></Image>
            </div>
            <div className={styles.offer_content2}>
              <h4 className={styles.offer_slogun}>
                Order Online
              </h4>
              <p>
                Order Takeaway From Our Menu
              </p>
              <Link href="#"><a className="btn btn-danger">Browse Menu</a></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <section className={styles.notice}>
      <Container>
        <Row>
          <Col className="text-center">
            <h4 className={styles.offer_slogun}>
              Home Delivery
            </h4>
            <p>
              Within 3 miles radius
            </p>
            <Link href="#"><a className="btn btn-danger">Order Now</a></Link>
            
          </Col>

        </Row>
      </Container>
    </section>
      
    </div>
</>
  )
}
