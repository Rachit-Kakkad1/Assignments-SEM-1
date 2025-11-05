
const canvas = document.getElementById('networkCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = 300;

  const dots = [];
  const numDots = 10;

  function Dot(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 6;
    this.color = Math.random() > 0.5 ? '#f7931a' : '#888';
    this.pulse = 0;
  }

  function drawLine(dot1, dot2) {
    ctx.beginPath();
    ctx.moveTo(dot1.x, dot1.y);
    ctx.lineTo(dot2.x, dot2.y);
    ctx.strokeStyle = 'rgba(200,200,200,0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function initDots() {
    dots.length = 0;
    const step = canvas.width / (numDots - 1);
    for (let i = 0; i < numDots; i++) {
      const yOffset = Math.random() * 40 - 20;
      dots.push(new Dot(i * step, 150 + yOffset));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#121317';
    ctx.beginPath();
    ctx.moveTo(0, 200);
    for (let i = 0; i < dots.length; i++) {
      ctx.lineTo(dots[i].x, dots[i].y + 50);
    }
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();

    for (let i = 0; i < dots.length - 1; i++) {
      drawLine(dots[i], dots[i + 1]);
    }

    dots.forEach((dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 12, 0, Math.PI * 2);
      ctx.strokeStyle = dot.color;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 4 + Math.sin(dot.pulse) * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = dot.color;
      ctx.fill();

      dot.pulse += 0.05;
    });

    requestAnimationFrame(animate);
  }

  initDots();
  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = 300;
    initDots();
  });
}


document.querySelectorAll('.dropdown').forEach(drop => {
  const btn = drop.querySelector('.dropbtn');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    
    document.querySelectorAll('.dropdown').forEach(other => {
      if (other !== drop) other.classList.remove('open');
    });

    
    drop.classList.toggle('open');
  });
});


window.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
});
