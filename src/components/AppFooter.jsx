import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="footer-green px-4">
      <div>
        <a href="https://pict.edu/" target="_blank" rel="noopener noreferrer">
          Carbon Connect
        </a>
        <span className="ms-1">&copy; 2025 @Carbon Coders.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://pict.edu/IT-dept/" target="_blank" rel="noopener noreferrer">
          Carbon Coders developers Limited
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)