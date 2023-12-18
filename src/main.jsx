import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  )
}

function Experience(){
  return(
    <>
      <OrbitControls />
      <ambientLight />
      <Environment preset="studio" background blur={0.7} />
      
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  )
}