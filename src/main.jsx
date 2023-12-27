import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Text, useGLTF, Center, Lightformer, MeshTransmissionMaterial  } from '@react-three/drei'

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
          position: [ 0, 0, 4.5 ]
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
        <h2>hi there</h2>
        <h2>i'm will, and this is my personal site</h2>
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
        {/* <Environment>
          <Lightformer
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={10} // power level (optional = 1)
            color="blue" // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]} // Target position (optional = undefined)
          />
        </Environment> */}
        {/* <Environment preset="studio" /> */}
        <ambientLight />

        <directionalLight position={[0, 3, 0]} />

        <Center>
            <Model />
            <group position={[0, 0, -.5]}>
              <Text color="#bdb597">
                will.limited
              </Text>
            </group>
        </Center>
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
        scale={[1, 1, 2.5 ]}
      >
        <MeshTransmissionMaterial
          thickness={.5}
          chromaticAberration={.3}
          clearcoat={1}
          color="white"
        />
      </mesh>
    </group>
  );
}
useGLTF.preload("/checkeredPlane.glb");
