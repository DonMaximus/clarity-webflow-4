import"./style.css";import*as THREE from"three";import{GLTFLoader}from"three/examples/jsm/loaders/GLTFLoader.js";import gsap from"gsap";import{ScrollTrigger}from"gsap/ScrollTrigger";const canvas=document.querySelector("canvas.webgl"),scene=new THREE.Scene,gltfLoader=new GLTFLoader,textureLoader=new THREE.TextureLoader,cubeTextureLoader=new THREE.CubeTextureLoader,normalMap=textureLoader.load("textures/normalMap/normalMap3.jpeg"),imgMap=textureLoader.load("textures/textureMap.jpeg"),letterMaterial=new THREE.MeshBasicMaterial(16777215),planeShape=new THREE.PlaneGeometry(5,5),planeMaterial=new THREE.MeshStandardMaterial({map:imgMap}),lightDirectional=new THREE.DirectionalLight(16773341,1);lightDirectional.position.set(0,5,10),scene.add(lightDirectional),gsap.registerPlugin(ScrollTrigger),ScrollTrigger.defaults({scrub:3,ease:"none"});const sections=document.querySelectorAll(".section");gltfLoader.load("/models/letter-c/glTF/Letter_C.gltf",(e=>{e.scene.children[1].castShadow=!0,e.scene.children[1].receiveShadow=!0,e.scene.children[1].material=letterMaterial,e.scene.position.set(-.6,.8,.1),e.scene.rotation.set(2,1,0),e.scene.scale.set(12,12,12),scene.add(e.scene),gsap.from(e.scene.position,{x:-.6,y:.8,z:.1,duration:2,ease:"expo"}),gsap.from(e.scene.rotation,{x:2,y:1,z:0,duration:2,ease:"expo"}),gsap.to(e.scene.position,{x:0,y:0,z:0,scrollTrigger:{trigger:sections[1]}}),gsap.to(e.scene.rotation,{x:0,z:0,y:0,scrollTrigger:{trigger:sections[1]}})})),gltfLoader.load("/models/letter-l/glTF/Letter_L.gltf",(e=>{e.scene.children[1].castShadow=!0,e.scene.children[1].receiveShadow=!0,e.scene.children[1].material=letterMaterial,e.scene.position.set(0,-2,-3),e.scene.rotation.set(1,1,3),e.scene.scale.set(12,12,12),scene.add(e.scene),gsap.from(e.scene.position,{x:0,y:-2,z:-3,duration:2,ease:"expo"}),gsap.from(e.scene.rotation,{x:1,y:1,z:3,duration:2,ease:"expo"}),gsap.to(e.scene.position,{x:1,y:0,z:0,scrollTrigger:{trigger:sections[1]}}),gsap.to(e.scene.rotation,{x:0,z:0,y:0,scrollTrigger:{trigger:sections[1]}})})),gltfLoader.load("/models/letter-a/glTF/Letter_A.gltf",(e=>{e.scene.children[1].castShadow=!0,e.scene.children[1].receiveShadow=!0,e.scene.position.set(5,-1,2),e.scene.rotation.set(2,1,0),e.scene.scale.set(12,12,12),e.scene.children[1].material=letterMaterial,scene.add(e.scene),gsap.from(e.scene.position,{x:5,y:-1,z:2,duration:2,ease:"expo"}),gsap.from(e.scene.rotation,{x:2,y:1,z:0,duration:2,ease:"expo"}),gsap.to(e.scene.position,{x:2,y:0,z:0,scrollTrigger:{trigger:sections[1]}}),gsap.to(e.scene.rotation,{x:0,z:0,y:0,scrollTrigger:{trigger:sections[1]}})})),gltfLoader.load("/models/letter-r/glTF/Letter_R.gltf",(e=>{e.scene.castShadow=!0,e.scene.receiveShadow=!0,e.scene.position.set(6,2,1),e.scene.rotation.set(3,0,1),e.scene.scale.set(12,12,12),e.scene.children[1].material.metalness=0,e.scene.children[1].material=letterMaterial,scene.add(e.scene),gsap.from(e.scene.position,{x:6,y:2,z:1,duration:2,ease:"expo"}),gsap.from(e.scene.rotation,{x:3,y:0,z:1,duration:2,ease:"expo"}),gsap.to(e.scene.position,{x:3,y:0,z:0,scrollTrigger:{trigger:sections[1]}}),gsap.to(e.scene.rotation,{x:0,z:0,y:0,scrollTrigger:{trigger:sections[1]}})})),gltfLoader.load("/models/letter-i/glTF/Letter_I.gltf",(e=>{e.scene.castShadow=!0,e.scene.receiveShadow=!0,e.scene.position.set(-2,-2,-1),e.scene.rotation.set(3,2,0),e.scene.scale.set(12,12,12),e.scene.children[1].material.metalness=0,e.scene.children[1].material=letterMaterial,scene.add(e.scene),gsap.from(e.scene.position,{x:-2,y:-2,z:-1,duration:2,ease:"expo"}),gsap.from(e.scene.rotation,{x:3,y:2,z:0,duration:2,ease:"expo"}),gsap.to(e.scene.position,{x:3.7,y:0,z:0,scrollTrigger:{trigger:sections[1]}}),gsap.to(e.scene.rotation,{x:0,z:0,y:0,scrollTrigger:{trigger:sections[1]}})})),gltfLoader.load("/models/letter-t/glTF/Letter_T.gltf",(e=>{e.scene.castShadow=!0,e.scene.receiveShadow=!0,e.scene.position.set(5,-2,-3),e.scene.rotation.set(3,1,1),e.scene.scale.set(12,12,12),e.scene.children[1].material.metalness=0,e.scene.children[1].material=letterMaterial,scene.add(e.scene),gsap.from(e.scene.position,{x:5,y:-2,z:-3,duration:2,ease:"expo"}),gsap.from(e.scene.rotation,{x:3,y:1,z:1,duration:2,ease:"expo"}),gsap.to(e.scene.position,{x:4.4,y:0,z:0,scrollTrigger:{trigger:sections[1]}}),gsap.to(e.scene.rotation,{x:0,z:0,y:0,scrollTrigger:{trigger:sections[1]}})})),gltfLoader.load("/models/letter-y/glTF/Letter_Ygltf.gltf",(e=>{e.scene.castShadow=!0,e.scene.receiveShadow=!0,e.scene.position.set(-2.5,4.5,-1),e.scene.rotation.set(2,3,0),e.scene.scale.set(12,12,12),e.scene.children[1].material.metalness=0,e.scene.children[1].material=letterMaterial,scene.add(e.scene),gsap.from(e.scene.position,{x:-2.5,y:4.5,z:-1,duration:2,ease:"expo"}),gsap.from(e.scene.rotation,{x:2,y:3,z:0,duration:2,ease:"expo"}),gsap.to(e.scene.position,{x:5.45,y:0,z:0,scrollTrigger:{trigger:sections[1]}}),gsap.to(e.scene.rotation,{x:0,z:0,y:0,scrollTrigger:{trigger:sections[1]}})}));const directionalLight=new THREE.DirectionalLight(16767681,5.5);directionalLight.castShadow=!0,directionalLight.shadow.mapSize.set(1024,1024),directionalLight.position.set(-5,0,0),scene.add(directionalLight);const sizes={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,camera.aspect=sizes.width/sizes.height,camera.updateProjectionMatrix(),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height,.1,100);camera.position.set(2.7,.4,3),scene.add(camera);const renderer=new THREE.WebGLRenderer({canvas,alpha:!0});renderer.shadowMap.enabled=!0,renderer.shadowMap.type=THREE.PCFSoftShadowMap,renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),window.addEventListener("scroll",(()=>{scrollY=window.scrollY,console.log(scrollY)}));const clock=new THREE.Clock;let previousTime=0;const tick=()=>{const e=clock.getElapsedTime();previousTime=e,renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick();