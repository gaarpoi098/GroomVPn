const canvas = document.createElement("canvas");
canvas.id = "snow";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

const flakes = Array.from({length: 150}).map(() => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1,
    s: Math.random()*2+1
}));

function snow() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "white";

    flakes.forEach(f=>{
        ctx.beginPath();
        ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
        ctx.fill();

        f.y+=f.s;
        if(f.y>canvas.height) f.y=0;
    });

    requestAnimationFrame(snow);
}

snow();
