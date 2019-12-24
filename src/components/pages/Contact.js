import React from 'react'

export default function Contact() {
    return (
        <section id="contact-section" class="section section-contact section5"  data-title='Contact'>

        <div class="address" data-title='Contact'>
          <h4 class="address-primary">Current location:&nbsp; </h4>
          <p class="address-secondary">Poznań, Poland ( I don't mind relocating if neccessary :) )</p>
        </div>
        <ul class=" menu menu-contact">
          <li class="menu-contact__item btn"><a href="#" class="menu-contact__link"><i
                class="fab fa-github-square"></i><span class="contact-link">Github</span></a>
          </li>
          <li class="menu-contact__item btn"><a href="#" class="menu-contact__link"><i class="fab fa-linkedin"></i><span
                class="contact-link">LinkedIn</span></a>
          </li>
          <li class="menu-contact__item btn"><a href="#" class="menu-contact__link"><i class="fas fa-envelope"></i><span
                class="contact-link">Email</span></a>
          </li>
          <li class="menu-contact__item btn"><a href="#" class="menu-contact__link"><i
                class="fab fa-facebook-square"></i><span class="contact-link">Facebook</span></a>
          </li>


        </ul>
      </section>
    )
}
