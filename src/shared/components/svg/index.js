import React, { useState } from 'react'

export const SiteLogo = () => (
  <svg role="img" aria-label="crismertens.com logo and homepage link" viewBox="0 0 250 50" focusable="false">
    <title>Cris Mertens | Film Editor</title>
    <path d="M19.945,30.499l3.567,3.603c-2.62,2.805-5.532,4.552-10.446,4.552C5.569,38.653,0,32.866,0,25.55v-0.073
      c0-7.242,5.459-13.175,13.285-13.175c4.804,0,7.68,1.601,10.045,3.931l-3.567,4.113c-1.965-1.783-3.967-2.875-6.516-2.875
      c-4.293,0-7.388,3.566-7.388,7.935v0.071c0,4.368,3.021,8.008,7.388,8.008C16.16,33.483,17.943,32.319,19.945,30.499z
      M43.419,29.117l6.224,9.098h-6.551l-5.459-8.152h-4.404v8.152h-5.605V12.738h11.647c3.238,0,5.75,0.91,7.424,2.584
      c1.42,1.419,2.185,3.421,2.185,5.823v0.073C48.879,25.332,46.659,27.915,43.419,29.117z M43.202,21.437
      c0-2.402-1.675-3.639-4.405-3.639h-5.568v7.315h5.678c2.729,0,4.295-1.456,4.295-3.603V21.437z M53.829,38.215h5.604V12.738h-5.604
      V38.215z M103.074,12.986h0.728v25.478H103V14.368L91.548,30.661L80.912,15.496v32.653h-0.805V37.274
      c-1.522,0.852-3.431,1.305-5.605,1.305c-3.858,0-7.753-1.347-10.81-4.076l3.311-3.967c2.293,1.892,4.695,3.093,7.607,3.093
      c2.292,0,3.676-0.908,3.676-2.401v-0.072c0-1.42-0.874-2.147-5.133-3.24c-5.131-1.311-8.443-2.729-8.443-7.789v-0.073
      c0-4.621,3.712-7.678,8.917-7.678c2.39,0,4.551,0.488,6.479,1.388L80.106,1.852h0.805L80.912,14.2l10.654,15.161l11.49-16.351
      L103.074,12.986z M80.107,24.539v-4.751c-2.232-1.535-4.428-2.464-6.551-2.464c-2.148,0-3.277,0.983-3.277,2.221v0.073
      c0,1.673,1.093,2.219,5.497,3.347C77.475,23.409,78.921,23.911,80.107,24.539z M157.52,13.714h9.208h0.001v24.749h0.8V13.714h9.209
      v-0.728H157.52V13.714z M111.808,26.017h15.432v-0.729h-15.432V13.714h16.996v-0.728h-17.797v25.478h17.979v-0.728h-17.179V26.017z
      M241.192,25.18c-6.261-1.274-8.227-2.911-8.227-6.005v-0.073c0-2.984,2.949-5.75,7.426-5.75c3.131,0,5.97,1.127,8.225,2.838
      l0.512-0.654c-2.331-1.784-5.315-2.912-8.663-2.912c-4.804,0-8.299,2.948-8.299,6.515v0.073c0,3.565,2.401,5.422,8.698,6.696
      c6.443,1.31,8.335,2.984,8.335,6.115v0.072c0,3.421-3.058,6.005-7.824,6.005c-3.713,0-6.988-1.42-9.571-3.931l-0.584,0.582
      c2.73,2.584,6.188,4.076,10.083,4.077c5.385,0,8.697-2.983,8.697-6.771v-0.071C250,28.529,247.816,26.526,241.192,25.18z
      M224.887,37.154l-19.362-24.168h-0.691v25.477h0.764V14.296l19.362,24.167h0.693V12.986h-0.766V37.154z M181.939,26.017h15.433
      v-0.729h-15.433V13.714h16.998v-0.728H181.14v25.478h17.979v-0.728h-17.18V26.017z M145.909,27.325l8.48,11.138h-0.982
      l-8.443-11.101h-9.463v11.101h-0.802V12.986h10.409c3.312,0,5.751,0.837,7.315,2.402c1.166,1.165,1.82,2.767,1.82,4.732v0.073
      C154.244,24.487,150.824,27.035,145.909,27.325z M153.444,20.229v-0.072c0-4.04-3.131-6.443-8.408-6.443H135.5v12.922h9.208
      C150.604,26.636,153.444,23.833,153.444,20.229z"/>
  </svg>
)

const IMDbTemplate = ({ bgFill, fgFill }) => (
  <>
    <path fill={bgFill} d="M66,30.2V2.7c-0.2-1.4-1.3-2.5-2.7-2.7H2.7C1.2,0.2,0,1.5,0,3.1v26.7C0,31.6,1.4,33,3.2,33h59.7C64.5,33,65.8,31.8,66,30.2z"/>
    <path fill={fgFill} d="M9.1,6.8h5V26h-5V6.8z M24.7,6.8l-1.2,9l-0.7-4.9c-0.2-1.6-0.4-2.9-0.6-4.1h-6.5V26h4.4l0-12.7L22,26
      h3.1l1.7-13l0,13h4.4V6.8H24.7L24.7,6.8z M39.1,10.2c0.2,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.1,0.8,0.1,1.7v7.4c0,1.3-0.1,2.1-0.2,2.3
      c-0.2,0.3-0.6,0.4-1.3,0.4V10.1C38.5,10.1,38.9,10.1,39.1,10.2L39.1,10.2z M39,26c1.2,0,2.1-0.1,2.7-0.2c0.6-0.1,1.1-0.4,1.5-0.7
      c0.4-0.3,0.7-0.8,0.8-1.4s0.3-1.7,0.3-3.5v-6.7c0-1.8-0.1-3-0.2-3.7s-0.4-1.2-0.8-1.7s-1.1-0.9-1.9-1.1c-0.9-0.2-2.2-0.3-4.7-0.3H33
      V26H39L39,26z M52.5,21.3c0,0.9,0,1.5-0.1,1.8c-0.1,0.2-0.5,0.4-0.8,0.4c-0.3,0-0.5-0.1-0.6-0.4c-0.1-0.2-0.1-0.8-0.1-1.6v-5.1
      c0-0.9,0-1.4,0.1-1.6c0.1-0.2,0.3-0.3,0.6-0.3c0.3,0,0.7,0.1,0.8,0.4c0.1,0.2,0.2,0.8,0.2,1.6V21.3L52.5,21.3z M46,6.8V26h4.5
      l0.3-1.2c0.4,0.5,0.9,0.9,1.3,1.1s1.2,0.4,1.8,0.4c0.8,0,1.5-0.2,2-0.6c0.6-0.4,0.9-0.9,1.1-1.5c0.2-0.6,0.2-1.4,0.2-2.6v-5.4
      c0-1.2,0-1.9-0.1-2.3c-0.1-0.4-0.2-0.7-0.5-1.1c-0.3-0.4-0.6-0.7-1.1-0.9c-0.5-0.2-1.1-0.3-1.7-0.3c-0.6,0-1.3,0.1-1.8,0.3
      c-0.5,0.2-0.9,0.6-1.3,1V6.8H46L46,6.8z"/>
  </>
)

export const IMDb = () => (
  <svg viewBox="0 0 66 33">
    <IMDbTemplate bgFill="#fff" fgFill="#323232" />
  </svg>
)

export const IMDbColor = () => (
  <svg viewBox="0 0 66 33">
    <radialGradient id="imdb-gradient" cx="-70.2002" cy="145.5869" r="19.0393" gradientTransform="matrix(1.4095 0 0 -1.4095 131.3908 222.9356)" gradientUnits="userSpaceOnUse">
      <stop  offset="0" style={{ stopColor: '#fbf070' }} />
      <stop  offset="0.99" style={{ stopColor: '#daa628' }} />
    </radialGradient>
    <IMDbTemplate bgFill="url(#imdb-gradient)" fgFill="#000" />
  </svg>
)

export const EmailIcon = () => (
  <svg viewBox="0 0 66 33">
    <path d="M45.5,16.4L65.7,1.7c0.2,0.3,0.3,0.7,0.3,1v27.5c0,0.3-0.1,0.6-0.3,0.9L45.5,16.4z M0.4,1.7
      C0.1,2.1,0,2.6,0,3.1v26.7c0,0.5,0.1,0.9,0.3,1.3l20.2-14.7L0.4,1.7z M34.8,24.2L34.8,24.2c-0.5,0.4-1.2,0.6-1.8,0.6
      c-0.7,0-1.3-0.2-1.8-0.5l0,0l-9-6.6l-20.6,15c0.5,0.2,1,0.4,1.6,0.4h59.7c0.5,0,1-0.1,1.5-0.4l-20.6-15L34.8,24.2z M63.3,0H2.7
      C2.4,0,2.1,0.1,1.8,0.3l30.6,22.3c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2L64.2,0.3C63.9,0.1,63.6,0,63.3,0z"/>
  </svg>
)

export const Hamburger = () => {
  const [ animation, enableAnimation ] = useState(false)

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 26 26"
      className={animation ? 'hamburger' : ''}
      onClick={() => enableAnimation(true)}>
      <rect width="26" height="3" y="2.5"/>
      <rect width="26" height="3" y="11.5"/>
      <rect width="26" height="3" y="20.5"/>
    </svg>
  )
}

export const Loading = () => (
  <svg viewBox="0 0 200 200">
    <rect x="50.367" y="50" width="25" height="100"/>
    <rect x="87.867" y="50" width="25" height="100"/>
    <rect x="125.367" y="50" width="25" height="100"/>
  </svg>
)

export const Play = () => (
  <svg className="play" viewBox="0 0 100 100">
    <path fill="#fff" d="M50,100C22.4,100,0,77.6,0,50S22.4,0,50,0s50,22.4,50,50S77.6,100,50,100z                  M50,7.1C26.4,7.1,7.1,26.4,7.1,50 S26.4,92.9,50,92.9S92.9,73.6,92.9,50S73.6,7.1,50,7.1z"></path>
    <polygon fill="#fff" points="34.5,23.2 81,50 34.5,76.8"></polygon>
  </svg>
)

export const CaretDown = () => (
  <svg className="caret" viewBox="0 0 9 9">
    <polygon points="8.14,2.714 4.501,6.354 0.861,2.713 0,3.574 4.5,8.074 9,3.574 "/>
  </svg>
)

export const CaretLeft = () => (
  <svg viewBox="0 0 12 12">
    <polygon points="10.248,2.497 7.752,0.001 1.752,6 7.75,11.998 10.246,9.502 6.744,6" />
  </svg>
)

export const CaretRight = () => (
  <svg viewBox="0 0 12 12">
    <polygon points="1.752,9.502 4.249,11.998 10.248,5.999 4.25,0.001 1.754,2.497 5.256,5.999" />
  </svg>
)