import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
      <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SkillBoost. All rights reserved.</p>
      <p>Enhance your skills and achieve your goals with us.</p>
    </footer>
    </div>
  )
}

export default Footer
