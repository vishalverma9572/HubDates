import React from 'react'
import { Icon } from "@iconify/react";
export default function Social() {
  return (
    <div className="social-icons">
              <a
                href="https://github.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  <Icon icon="devicon:github" width="30" />
                  <span>GitHub</span>
                </div>
              </a>
              <a
                href="https://instagram.com/hey_vishalverma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  <Icon icon="skill-icons:instagram" width="30" />
                  <span>Instagram</span>
                </div>
              </a>
              <a href="mailto:example@example.com">
                <div className="icon-container">
                  <Icon icon="logos:google-gmail" />
                  <span>Email</span>
                </div>
              </a>
              <a
                href="https://twitter.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  <Icon icon="devicon:twitter" width="30" />
                  <span>Twitter</span>
                </div>
              </a>
            </div>
  )
}
