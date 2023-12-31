import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, useGLTF, Sparkles, MeshTransmissionMaterial, Bounds  } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <>
      <Overlay /> 
      <Canvas
        camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
        } }
        >
        <Experience />
      </Canvas>
    </>
  )
}

function Overlay(){
  return(
  <>    
    <div className="welcome">
        <h1>i'm will and this is my personal site</h1>
    </div>
    <div className="navbar">
      <div className="nav-item" id="menu-button">
          <span className ="material-symbols-outlined">
              blur_on
          </span>
          <div className="dropdown-content">
                  <a href="https://experience.will.limited">experience</a>
                  <a href="https://projects.will.limited">projects</a>
                  <a href="https://about.will.limited">personal</a>
          </div>
        </div>
        <div className="nav-item">
            <a href="mailto:willdotlimited@gmail.com">contact</a>
        </div>
      </div>
  </>
  )
}

function Experience()
{
  return(
  <>
      <OrbitControls />
      <ambientLight />
      <Sparkles
        size={3}
        scale={ [ 10, 10, 10 ] }
        speed={ 0.3 }
        count={ 200 }
        position-z={-3}
      />
      <Bounds fit clip observe margin={.9}>
        <Model />
        <Text
          color="#ded5b2"
          position-z={-.1}
          >
          w.l
        </Text>
      </Bounds>
  </>
  )
}

export function Model(props) {
  const { nodes, materials } = useGLTF("/checkeredPlane.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        rotation={[0, -Math.PI / 2, -Math.PI / 2]}
        scale={[1, .2, 1 ]}
      >
        <MeshTransmissionMaterial thickness={.6} chromaticAberration={.5} color="white" />
      </mesh>
    </group>
  );
}
useGLTF.preload("/checkeredPlane.glb");
