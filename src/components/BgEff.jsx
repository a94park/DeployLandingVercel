import { useEffect, useRef, useState } from "react";
import "./BgEff.css";

const ParticleHexagonCanvas = () => {
  const canvasRef = useRef(null);
  const hexagonGridRef = useRef(null);
  const [mouse, setMouse] = useState({ x: null, y: null, radius: 80 });

  const particlesArray = useRef([]);

  // Function to resize canvas and hexagon grid
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const root = canvas.parentElement;
    const rootStyles = getComputedStyle(root);
    const rootWidth = parseFloat(rootStyles.width);
    const rootHeight = parseFloat(rootStyles.height);

    canvas.width = rootWidth;
    canvas.height = rootHeight;

    const hexagonGrid = hexagonGridRef.current;
    hexagonGrid.style.width = `${rootWidth}px`;
    hexagonGrid.style.height = `${rootHeight}px`;
  };

  // Initialize particles
  const initParticles = () => {
    const canvas = canvasRef.current;
    particlesArray.current = [];
    let numberOfParticles = Math.floor((canvas.width * canvas.height) / 18000);

    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 20 + 5;
      let x = Math.random() * (canvas.width - size * 2) + size * 2;
      let y = Math.random() * (canvas.height - size * 2) + size * 2;
      let directionX = Math.random() * 2 - 1;
      let directionY = Math.random() * 2 - 1;
      particlesArray.current.push(
        new Particle(x, y, directionX, directionY, size, "#42c2ff")
      );
    }
  };

  // Particle class
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update(ctx, mouse) {
      if (this.x > ctx.canvas.width || this.x < 0)
        this.directionX = -this.directionX;
      if (this.y > ctx.canvas.height || this.y < 0)
        this.directionY = -this.directionY;

      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius + this.size) {
        if (mouse.x < this.x) this.x += 3;
        if (mouse.x > this.x) this.x -= 3;
        if (mouse.y < this.y) this.y += 3;
        if (mouse.y > this.y) this.y -= 3;
      }

      this.x += this.directionX;
      this.y += this.directionY;

      this.draw(ctx);
    }
  }

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.current.forEach((particle) => particle.update(ctx, mouse));
    requestAnimationFrame(animate);
  };

  // Generate hexagon grid
  const generateHexagonGrid = () => {
    const hexagonGrid = hexagonGridRef.current;
    const container = hexagonGrid.parentElement;

    const wall = {
      width: container.offsetWidth,
      height: container.offsetHeight,
    };

    const rowsNumber = Math.ceil(wall.height / 80);
    const columnsNumber = Math.ceil(wall.width / 100) + 1;

    hexagonGrid.innerHTML = "";

    for (let i = 0; i < rowsNumber; i++) {
      const row = document.createElement("div");
      row.className = "row";
      hexagonGrid.appendChild(row);

      for (let j = 0; j < columnsNumber; j++) {
        const hexagon = document.createElement("div");
        hexagon.className = "hexagon";

        row.appendChild(hexagon);
      }
    }
  };

  // Event handlers
  const handleMouseMove = (event) => {
    setMouse({ ...mouse, x: event.clientX, y: event.clientY });
  };

  const handleMouseOut = () => {
    setMouse({ x: null, y: null, radius: 80 });
  };

  // Initialize effects
  useEffect(() => {
    resizeCanvas();
    initParticles();
    animate();
    generateHexagonGrid();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
      generateHexagonGrid();
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas id="particles" ref={canvasRef} />
      <div id="hexagonGrid" ref={hexagonGridRef} />
    </>
  );
};

export default ParticleHexagonCanvas;
