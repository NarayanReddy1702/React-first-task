import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className='contact-sec'>
      <h1>Let's connect</h1>
            <div className="img-prt">
                <img src="./images/contact-me.svg" alt=""/>
            </div>
            <div class="form-prt">
                <form>
                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <label for="emial">Email</label>
                    <input type="email" name="email" placeholder="Your Email" required />
                    <label for="message">Message</label>
                    <textarea name="message" placeholder="Your Message" required ></textarea>
                    <button className="btn" type="submit">Send Message</button>
                </form>
            </div>
      </div>
      )
}
