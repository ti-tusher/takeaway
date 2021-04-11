import Head from 'next/head'
import React from 'react';
import Inbanner from '../comps/Inbanner'
const Contact = () => {
    return (
<>
    <Head>
        <title>Contact | Indian Takeaway in Henlow Camp, Henlow SG16 | Henlow Tandoori</title>
        <meta name="description" content="Henlow Tandoori offers Indian food to takeaway. The restaurant address is 302 Hitchin Road, Henlow Camp, Henlow SG16 6DP."></meta>
    </Head>
        <div>
            <Inbanner title="Contact" />
            <section id="google-maps">
                <iframe className="custom-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9823.75776891765!2d-0.304569!3d52.0079814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x51ae77aabc3ce9cf!2sHenlow%20Tandoori!5e0!3m2!1sen!2sbd!4v1616997713013!5m2!1sen!2sbd" height="350"></iframe>
            </section>
        </div>
</>
    );
}
 
export default Contact;