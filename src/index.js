

import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Timeline from './javascript/int_modules/timeline.jsx'
import SurveyComponent from './javascript/int_modules/questions.jsx'

document.addEventListener('DOMContentLoaded', () => {
    const container1 = document.getElementById('timeline-root')
    const root1 = createRoot(container1)
    root1.render(<Timeline />)
  })

document.addEventListener('DOMContentLoaded', () => {
    const container2 = document.getElementById('survey-comp')
    const root2 = createRoot(container2)
    root2.render(<SurveyComponent />)
  })
