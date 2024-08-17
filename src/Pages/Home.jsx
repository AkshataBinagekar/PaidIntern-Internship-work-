import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './Home.css'
function Home() {
  return (
    <div>
      <Navbar />
    
<main>
    <div class="main">
  <h1>Welcome to SkillBoost <div class="roller">
    <span id="rolltext">Elevate Your Skills with Our Online Learning Platform,<br/>
    <span id="spare-time">Empower Your Future</span><br/>
    </span>
    </div>
    </h1>   
  </div> 
</main>
<section className='section'>
    <div className='text'>
    Unlock your potential with SkillBoost, your gateway to top-tier online learning. Our platform offers a diverse range of expertly crafted courses designed to enhance your knowledge and skills across various fields. Whether you’re aiming to master technical expertise, fuel your creativity, or advance in personal development, SkillBoost provides the tools and resources you need to achieve your goals and advance your career.
    </div>
    <div className='text1'>
    <img alt='img' src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  
    </div>
</section>
<section className='course_section'>
  <h2>Popular Courses</h2>
  <div className='course_container'>
    <div className='course_card'>
      <img src='https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHwwfHx8Mg%3D%3D' alt='UI/UX Design' />
      <h3>UI/UX Design</h3>
      <p>Master the art of creating intuitive and user-friendly interfaces. This course covers design principles, wireframing, and prototyping to help you create stunning digital experiences.</p>
      <a href='/course-detail/1' className='course_link'>View Details</a>
    </div>
    <div className='course_card'>
      <img src='https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhjZWx8ZW58MHx8MHx8fDI%3D' alt='Excel Mastery' />
      <h3>Excel Mastery</h3>
      <p>Unlock the full potential of Excel with advanced techniques in data analysis, visualization, and automation. Ideal for professionals looking to enhance their productivity.</p>
      <a href='/course-detail/2' className='course_link'>View Details</a>
    </div>
    <div className='course_card'>
      <img src='https://images.unsplash.com/photo-1649180556628-9ba704115795?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB5dGhvbiUyMHByb2dyYW1taW5nfGVufDB8fDB8fHwy' alt='Python Programming' />
      <h3>Python Programming</h3>
      <p>Learn Python from the ground up. This course covers the essentials of programming, data structures, and algorithms, with hands-on projects to solidify your knowledge.</p>
      <a href='/course-detail/3' className='course_link'>View Details</a>
    </div>
    <div className='course_card'>
      <img src='https://images.unsplash.com/photo-1641951820920-c90394aef512?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fDB8fHwy' alt='Digital Marketing' />
      <h3>Digital Marketing</h3>
      <p>Boost your brand's online presence with in-depth knowledge of SEO, social media strategies, and content marketing. Perfect for aspiring digital marketers and entrepreneurs.</p>
      <a href='/course-detail/4' className='course_link'>View Details</a>
    </div>
    <div className='course_card'>
      <img src='https://media.istockphoto.com/id/1210565724/photo/reviewing-a-financial-reports-in-returning-on-investment-analysis.webp?b=1&s=170667a&w=0&k=20&c=vv8P6Zm7Ft-6JXak_FXdJF5951sVqkhR92j_3WbX28I=' alt='Financial Analysis' />
      <h3>Financial Analysis</h3>
      <p>Develop critical financial analysis skills. This course covers financial statements, ratio analysis, and forecasting, essential for anyone looking to advance in finance.</p>
      <a href='/course-detail/5' className='course_link'>View Details</a>
    </div>
  </div>
</section>

<section className="ticker-wrapper">
  <div className="ticker">
    <div className="ticker-item">
    <i class="fa-solid fa-brain fa-lg"></i>
     <p>Learn The Essential Skills</p>
    </div>
    <div className="ticker-item">
    <i class="fa-solid fa-award fa-lg"></i>
  
      <p>Earn Certificates And Degrees</p>
    </div>
    <div className="ticker-item">
    <i class="fa-solid fa-certificate fa-lg"></i>
      <p>Master at Different Areas</p>
    </div>
    <div className="ticker-item">
    <i class="fa-solid fa-laptop-code fa-lg"></i>
      <p>Interactive Learning Experience</p>
    </div>
    <div className="ticker-item">
    <i class="fa-regular fa-clock fa-lg"></i>
      <p>Flexible Study Schedule</p>
    </div>
  </div>
</section>

<section className="top-categories">
  <h2>Top Categories</h2>
  <div className="categories-grid">
    <div className="category-item">
    <i class="fa-solid fa-paintbrush fa-xl" style={{color:"#EBD3F8"}}></i>
      <p>Art & Design</p>
    </div>
    <div className="category-item">
    <i class="fa-regular fa-file-code fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Development</p>
    </div>
    <div className="category-item">
    <i class="fa-solid fa-dumbbell fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Lifestyle</p>
    </div>
    <div className="category-item">
    <i class="fa-regular fa-lightbulb fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Personal Development</p>
    </div>
    <div className="category-item">
    <i class="fa-solid fa-business-time fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Business</p>
    </div>
    <div className="category-item">
    <i class="fa-solid fa-coins fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Finance</p>
    </div>
    <div className="category-item">
    <i class="fa-solid fa-rectangle-ad fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Marketing</p>
    </div>
    <div className="category-item">
    <i class="fa-solid fa-camera-retro fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Photography</p>
    </div>
    <div className="category-item">
    <i class="fa-solid fa-server fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Data Science</p>
    </div>
    <div className="category-item">
    <i class="fa-solid fa-heart-pulse fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Health & Fitness</p>
    </div>
    <div className="category-item">
    <i class="fa-solid fa-music fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Music</p>
    </div>
    <div className="category-item">
    <i class="fa-solid fa-person-chalkboard fa-xl"style={{color:"#EBD3F8"}}></i>
      <p>Teaching & Academics</p>
    </div>
  </div>
</section>


<Footer />
</div>

    
 
  )
}

export default Home
