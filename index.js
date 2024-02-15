const createCube = ({ size = 300, rotate = false, rotX = 0, rotY = 0, bgColor = 'black', wireframe = false, imgSrc = null }) => {
  const cubeContainer = document.getElementById("cube-container");
  cubeContainer.style.width = `${size}px`;
  cubeContainer.style.height = `${size}px`;
  cubeContainer.style.perspective = `${size * 2}px`;
  cubeContainer.style.position = 'relative'
  const cube = document.createElement("div");
  cube.style.transformStyle = 'preserve-3d';
  cube.style.transform = "rotateX(-50deg)";
  cube.style.width = `${size}px`;
  cube.style.height = `${size}px`;
  cube.classList.add("cube");
  cubeContainer.appendChild(cube);
  const faces = ["front", "back", "right", "left", "top", "bottom"];
  for (let index = 0; index < faces.length; index++) {
    const face = document.createElement("div");
    face.className = `face ${faces[index]}`;
    face.style.width = '100%';
    face.style.height = '100%';
    face.classList.add("face");
    face.style.position = 'absolute';
    face.style.transformOrigin = 'center'
    cube.appendChild(face);
    wireframe ? face.style.border = '1px solid black' : face.style.border = 'none';
    face.style.backgroundImage = `url(${imgSrc})`;
    face.style.backgroundSize = 'cover';
    face.style.backgroundPosition = 'center';
    face.style.backgroundColor = bgColor;
  }
  const rightFace = document.querySelector(".right");
  rightFace.style.transform = `rotateY(90deg) translateZ(${size / 2}px)`;
  const leftFace = document.querySelector(".left");
  leftFace.style.transform = `rotateY(-90deg) translateZ(${size / 2}px)`;
  const frontFace = document.querySelector(".front");
  frontFace.style.transform = `rotateY(0deg) translateZ(${size / 2}px)`;
  const backFace = document.querySelector(".back");
  backFace.style.transform = `rotateY(180deg) translateZ(${size / 2}px)`;
  const topFace = document.querySelector(".top");
  topFace.style.transform = `rotateX(90deg) translateZ(${size / 2}px)`;
  const bottomFace = document.querySelector(".bottom");
  bottomFace.style.transform = `rotateX(-90deg) translateZ(${size / 2}px)`;
  let options = {
    rotate: {
      x: 0,
      y: 0
    }
  }
  if (rotate) {
    const animation = () => {
      cube.style.transform = `rotateY(${options.rotate.x += rotX}deg) rotateX(${options.rotate.y += rotY}deg)`
      requestAnimationFrame(animation);
    }
    animation()
  }
}
export default createCube;