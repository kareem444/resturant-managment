import React, { useState } from 'react'
import { usePrint } from '../hooks/usePrint'

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
      ref={ref}
    >
      <h1 style={{ fontSize: '14px' }}>Royaa rakamya</h1>
      {/* <img src='logo.jpg' width={120} height={120} style={{ filter: 'grayscale(100%)' }}/> */}
    </div>
  )
})

const Home = () => {
  const [hide, setHide] = useState(true)
  const { preview, startPrint } = usePrint(ComponentToPrint, {
    hide
  })

  return (
    <>
      <h1 style={{ padding: '20px' }}>Home</h1>
      <button style={{ margin: '15px' }} onClick={startPrint}>Print this out!</button>
      <button onClick={() => setHide(!hide)}>Toggle View</button>
      <div style={{ height: '150px', width: '50rem' }} >
        {preview}
      </div>
    </>
  )
}

export default Home
