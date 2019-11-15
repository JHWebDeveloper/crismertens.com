export const secondsToTC = s => {
  if (typeof s !== 'number') return s

  let tc = new Date(s * 1000)
    .toISOString()
    .substr(11, 8)
    .split(':')
        
  tc[0] = parseInt(tc[0])
  tc[1] = parseInt(tc[1])
  
  if (tc[0] > 0 && tc[1] < 10) tc[1] = `0${tc[1]}`
  if (tc[0] === 0) tc = tc.slice(1)

  return tc.join(':')
}

export const getImageWidth = fixedWidth => {
  const pxr = window.devicePixelRatio || 1
  const win = Math.min(window.innerWidth, 960)

  return (fixedWidth || win) * pxr
}

export const getShape = el => {
  const startShape = el ? el.getBoundingClientRect() : {}
  const { innerWidth, innerHeight } = window
  const { top = 0, left = 0, width = 0, height = 0 } = startShape

  let scale = 0
  let x = '0px'
  let y = '0px'

  if (window.matchMedia('max-aspect-ratio: 16/9')) {
    scale = width / Math.min(960, innerWidth)
  } else {
    scale = height / Math.min(540, innerHeight)
  }

  if (el) {
    x = `${(-innerWidth + width) / 2 + left}px`
    y = `${(-innerHeight + height) / 2 + top}px`
  }

  return {
    scale,
    x,
    y
  }
}

function displace(e) {
  if (e.target === this) return

  let left = true

  this.children.forEach(child => {
    if (left && child !== e.target) {
      child.style.transform = 'translateX(-4%)'
    } else {
      left = false
    }
  })
}

function retract(e) {
  if (e.target === this) return

  this.children.forEach(child => {
    child.style.removeProperty('transform')
  })
}

export const applyDisplacement = el => {
  el.addEventListener('mouseover', displace)
  el.addEventListener('mouseout', retract)

  return () => {
    el.removeEventListener('mouseover', displace)
    el.removeEventListener('mouseout', retract)
  }
}

export const transitionProps = {
  appear: true,
  mountOnEnter: true,
  unmountOnExit: true,
}