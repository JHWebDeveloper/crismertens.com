import React from 'react'

const ModalContent = ({ close, children }) => {
  return (
    <>
      <button onClick={close} title="Close">CLOSE</button>
      { children }
      <button title="Back">BACK</button>
    </>
  )
}

export default ModalContent