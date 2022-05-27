const tiltContainer = document.querySelector('.tilt-container');
const tiltElement = document.querySelector('.tilt');

tiltContainer.addEventListener("mousemove", e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 9;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 9;
    tiltElement.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
})

/* ==============   HTML   ============== 
<head>
    <link rel="stylesheet" href="./time-calc-neumorphism.js" />
</head>

    <div class="tilt-container">
        <div class="tilt">
            <h1>title</h1>
        </div>
    </div>
*/
/* ==============   CSS   ============== 
*, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: tomato;
}

.tilt-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 450px;
    margin: 100px auto;
    perspective: 1000px;
}
.tilt {
    width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
    transform-style: preserve-3d;
}
.tilt h1 {
    font-size: 3rem;
    text-transform: capitalize;
}
*/