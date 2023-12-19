import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Lightformer, useGLTF, Center, ContactShadows, Sparkles } from '@react-three/drei'

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
    return <>
        <ContactShadows position-y={-1.4} blur={4} color="black" />
        <Sparkles
            size={ 3 }
            scale={ [ 5, 5, 5 ] }
            position-y={ 1 }
            speed={ 0.2 }
            count={ 50 }
        />
        <OrbitControls />
        <color attach="background" args={['#06140d']} />
        <Environment resolution={256}>
            <Lightformer form="ring" color="white" intensity={2} scale={2} position={[0, 4, 3]} />
            <Lightformer form="ring" color="red" intensity={10} scale={2} position={[-2, 3, 2]}/>
            <Lightformer form="ring" color="#123524" intensity={10} scale={2} position={[2, 3, 2]}  />
        </Environment>
        <Center>
            <Model />
        </Center>
    </>
}

function Model(props) {
  const group = useRef()
  const { nodes } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf')
  useFrame((state, delta) => {
      group.current.rotation.y += 0.001
  })
  return (
      <group ref={group} {...props} dispose={null} scale={0.1} >
          <mesh geometry={nodes['tree-spruce'].geometry}>
              <meshPhysicalMaterial
                  color={"white"}
                  clearcoatRoughness={0}
                  clearcoat={1.0}
                  roughness={0.2}
                  metalness={0.9}
              />
          </mesh>           
      </group>
  )
}
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf')