import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import _ from "lodash";
// import "./football.css";

// Debounce function defined outside the component to avoid re-creating it on every render
const debouncedResize = _.debounce((resizeFunc) => resizeFunc(), 50);

const ThreeScene = () => {
  const canvasRef = useRef();
  const [f_size,setFSize] = useState('100vh');
  useEffect(()=>{
    if(window.innerWidth<576){
      setFSize('50vh');
    }else if(window.innerWidth<1024){
      setFSize('60vh');
    }else{
      setFSize('100vh');
    }
  },[window.innerWidth])
  useEffect(() => {
    let width, height;
    let viewAngle = 45,
      aspect,
      near = 0.01,
      far = 10000;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    const camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
    const scene = new THREE.Scene();

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });

    const faceMaterial = new THREE.MeshBasicMaterial({
      color: 0x2c2a35,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });

    let sideLength = 50;
    let lineWidth = 2;

    let a = 0.0;
    let b = 1.0;
    let c = 2.0;
    let d = (1.0 + Math.sqrt(5.0)) / 2.0;
    let e = 3.0 * d;
    let f = 1.0 + 2.0 * d;
    let g = 2.0 + d;
    let h = 2.0 * d;

    a *= sideLength;
    b *= sideLength;
    c *= sideLength;
    d *= sideLength;
    e *= sideLength;
    f *= sideLength;
    g *= sideLength;
    h *= sideLength;

    const cords = [
      [+a, +b, +e],
      [+a, +b, -e],
      [+a, -b, +e],
      [+a, -b, -e],
      [+b, +e, +a],
      [+b, -e, +a],
      [-b, +e, +a],
      [-b, -e, +a],
      [+e, +a, +b],
      [-e, +a, +b],
      [+e, +a, -b],
      [-e, +a, -b],
      [+c, +f, +d],
      [+c, +f, -d],
      [+c, -f, +d],
      [-c, +f, +d],
      [+c, -f, -d],
      [-c, +f, -d],
      [-c, -f, +d],
      [-c, -f, -d],
      [+f, +d, +c],
      [+f, -d, +c],
      [-f, +d, +c],
      [+f, +d, -c],
      [-f, -d, +c],
      [+f, -d, -c],
      [-f, +d, -c],
      [-f, -d, -c],
      [+d, +c, +f],
      [-d, +c, +f],
      [+d, +c, -f],
      [+d, -c, +f],
      [-d, +c, -f],
      [-d, -c, +f],
      [+d, -c, -f],
      [-d, -c, -f],
      [+b, +g, +h],
      [+b, +g, -h],
      [+b, -g, +h],
      [-b, +g, +h],
      [+b, -g, -h],
      [-b, +g, -h],
      [-b, -g, +h],
      [-b, -g, -h],
      [+g, +h, +b],
      [+g, -h, +b],
      [-g, +h, +b],
      [+g, +h, -b],
      [-g, -h, +b],
      [+g, -h, -b],
      [-g, +h, -b],
      [-g, -h, -b],
      [+h, +b, +g],
      [-h, +b, +g],
      [+h, +b, -g],
      [+h, -b, +g],
      [-h, +b, -g],
      [-h, -b, +g],
      [+h, -b, -g],
      [-h, -b, -g],
    ];

    const football = new THREE.Object3D();
    const p0 = new THREE.Vector3(0, 0, 0);
    const radius = new THREE.Vector3(
      cords[0][0],
      cords[0][1],
      cords[0][2]
    ).distanceTo(p0);

    for (let i = 0; i < cords.length; ++i) {
      for (let j = 0; j < cords.length; ++j) {
        if (i === j) continue;

        let p1, p2, p3, distance, mid;

        p1 = new THREE.Vector3(cords[i][0], cords[i][1], cords[i][2]);
        p2 = new THREE.Vector3(cords[j][0], cords[j][1], cords[j][2]);

        distance = p1.distanceTo(p2);

        if (Math.round(distance) > c) continue;

        mid = new THREE.Vector3(
          (cords[i][0] + cords[j][0]) / 2,
          (cords[i][1] + cords[j][1]) / 2,
          (cords[i][2] + cords[j][2]) / 2
        );

        const scale = p1.distanceTo(p0) / mid.distanceTo(p0);
        p3 = new THREE.Vector3(
          mid.x * scale * scale,
          mid.y * scale * scale,
          mid.z * scale * scale
        );

        const curve = new THREE.QuadraticBezierCurve3(p1, p3, p2);

        const tubeGeom = new THREE.TubeGeometry(curve, 8, lineWidth, 4, false);

        football.add(new THREE.Mesh(tubeGeom, material));
      }
    }

    const facesCords = [
      [0, 28, 36, 39, 29],
      [1, 32, 41, 37, 30],
      [2, 33, 42, 38, 31],
      [3, 34, 40, 43, 35],
      [4, 12, 44, 47, 13],
      [5, 16, 49, 45, 14],
      [6, 17, 50, 46, 15],
      [7, 18, 48, 51, 19],
      [8, 20, 52, 55, 21],
      [9, 24, 57, 53, 22],
      [10, 25, 58, 54, 23],
      [11, 26, 56, 59, 27],
    ];

    const indicesOfFaces = [];

    for (let i = 0; i < facesCords.length; ++i) {
      const faceCord = facesCords[i];
      for (let j = 0; j < faceCord.length - 2; ++j) {
        indicesOfFaces.push(faceCord[0]);
        indicesOfFaces.push(faceCord[j + 1]);
        indicesOfFaces.push(faceCord[j + 2]);
      }
    }

    const facesGeom = new THREE.PolyhedronGeometry(
      _.flattenDeep(cords),
      indicesOfFaces,
      radius,
      2
    );

    football.add(new THREE.Mesh(facesGeom, faceMaterial));
    scene.add(football);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;    

    function update() {
      football.rotation.x += 1 / 50;
      football.rotation.y += 1 / 100;
      controls.update();
    }

    function resize() {
      width = canvasRef.current.clientWidth;
      height = canvasRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      update();
    }

    function init() {
      scene.fog = new THREE.Fog(0xfde047, 800, 1300);

      camera.position.z = 1000;
      renderer.setClearColor(0x000000, 0.0);
      renderer.autoClear = false;
      renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);

      // Clear any existing canvas elements to avoid multiple appends
      if (canvasRef.current.hasChildNodes()) {
        canvasRef.current.removeChild(canvasRef.current.firstChild);
      }

      canvasRef.current.appendChild(renderer.domElement);

      window.addEventListener("resize", () => debouncedResize(resize));
      render();
      resize();
    }

    init();

    return () => {
      window.removeEventListener("resize", () => debouncedResize(resize));
      controls.dispose();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <div id="canvas" ref={canvasRef} style={{ width: "100%", height: f_size }} />;
};

export default ThreeScene;
