import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, useGLTF, Center, Sparkles, MeshTransmissionMaterial  } from '@react-three/drei'

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
        <h2>i'm will and this is my personal site</h2>
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
        {/* <directionalLight position={[0, 3, 0]} /> */}

        <Center>
            <Model />
            <group position={[0, 0, -.1]}>
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

  const plane = useRef()
  
  useFrame((state, delta) => {
    // console.log(state.clock.getElapsedTime())
    // plane.current.material.thickness = Math.abs(Math.cos(state.clock.getElapsedTime() * Math.PI))
    // plane.current.rotateZ(0.01)
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={plane}
        geometry={nodes.Plane.geometry}
        rotation={[0, -Math.PI / 2, -Math.PI / 2]}
        scale={[1, .2, 2 ]}
      >
        <MeshTransmissionMaterial
          thickness={.5}
          chromaticAberration={.4}
          // clearcoat={1}
          color="white"
        />
        {/* <meshStandardMaterial/> */}
      </mesh>
    </group>
  );
}
useGLTF.preload("/checkeredPlane.glb");
