import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './About.css'
function About() {
  return (
    <div className='About'>
    <Navbar />
    <div className='About-Container'>
    <h2>About Our Learning Platform</h2>
<main className='about_us'>
<div className='pic'>
    <img alt='aboutUs' src='https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc=' />
</div>
    <div className='card'>
    <h3>Mission</h3>
    <p>Our mission is to empower individuals and organizations with the knowledge and skills they need to thrive in a rapidly evolving world. We believe in providing accessible, high-quality education that fosters personal and professional growth.</p>
    </div>
    <div className='card'>
<h3>Vision</h3>
<p>Our vision is to become a leading global provider of online learning, connecting learners with exceptional educators and creating a thriving community of knowledge seekers and knowledge sharers.</p>
    </div>
    <div className='card'>
<h3>Values</h3>
<p>Our core values guide our actions and shape our culture. We strive for excellence in everything we do, prioritize student success, foster a collaborative and supportive environment, and promote innovation and creativity.</p>
    </div>
</main>
</div>
 <section className='reviews_section'>
      <h2> Reviews</h2>
      <div className='reviews_slider'>
        <div className='reviews_track'>
          <div className='review_card'>
            <p>"SkillBoost transformed my career! The courses are top-notch."</p>
            <h4>- John Doe</h4>
          </div>
          <div className='review_card'>
            <p>"The instructors are knowledgeable and engaging. Highly recommend!"</p>
            <h4>- Jane Smith</h4>
          </div>
          <div className='review_card'>
            <p>"I learned so much in such a short time. Great platform!"</p>
            <h4>- Alex Johnson</h4>
          </div>
          <div className='review_card'>
            <p>"The flexibility of the courses allowed me to study at my own pace."</p>
            <h4>- Maria Garcia</h4>
          </div>
          <div className='review_card'>
            <p>"Excellent course materials and interactive learning experience."</p>
            <h4>- Chris Lee</h4>
          </div>
        </div>
      </div>
    </section>

 <section className='achievements_offerings'>
          <div className='achievements'>
            <h3>Our Achievements</h3>
            <ul>
              <li className='list'>Over 1 million students enrolled globally.</li>
              <li className='list'>More than 500 courses offered across various domains.</li>
              <li className='list'>Partnerships with top universities and industry leaders.</li>
              <li className='list'>High student satisfaction rate and positive feedback.</li>
            </ul>
          </div>
          <div className='offerings'>
            <h3>Our Offerings</h3>
            <ul>
              <li className='list'>Comprehensive courses in technology, business, arts, and more.</li>
              <li className='list'>Certification programs to boost your career credentials.</li>
              <li className='list'>Interactive learning experiences with practical assignments.</li>
              <li className='list'>Flexible study schedules that fit your lifestyle.</li>
            </ul>
          </div>
        </section>

        <section className='team_members'>
          <h3>Meet Our Team</h3>
          <div className='team_grid'>
            <div className='team_member'>
              <img src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D' alt='Team Member 1' />
              <h4>John Doe</h4>
              <p>CEO & Founder</p>
            </div>
            <div className='team_member'>
              <img src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D' alt='Team Member 2' />
              <h4>Jane Smith</h4>
              <p>Chief Learning Officer</p>
            </div>
            <div className='team_member'>
              <img src='https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZW9wbGV8ZW58MHx8MHx8fDI%3D' alt='Team Member 3' />
              <h4>Michael Johnson</h4>
              <p>Head of Technology</p>
            </div>
            <div className='team_member'>
              <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU4fHxwZW9wbGV8ZW58MHx8MHx8fDI%3D' alt='Team Member 4' />
              <h4>Emily Davis</h4>
              <p>Lead Instructor</p>
            </div>
          </div>
        </section>
       
    <Footer />
    </div>
  )
}

export default About
