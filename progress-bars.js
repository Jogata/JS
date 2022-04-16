/* ----------------------------------------------  Circular Progress Bar  ---------------------------------------------- */

const bars = document.querySelectorAll('.outher-circle');
const barValue = document.querySelectorAll('.value');
let value = [0, 0, 0];
const maxValues = [65, 40, 89];

let drawProgressBar1 = setInterval(() => {
    value[0]++;
    console.log(value);
    if (value[0] <= maxValues[0]) {
        barValue[0].textContent = value[0];
        console.log(barValue);
        bars[0].style.background = `conic-gradient(rgb(0, 188, 212) ${value[0] * 3.6}deg, transparent 0deg), rgba(0, 188, 212, 0.1)`;
    } else {
        clearInterval(drawProgressBar);
    }
});
let drawProgressBar2 = setInterval(() => {
    value[1]++;
    console.log(value);
    if (value[1] <= maxValues[1]) {
        barValue[1].textContent = value[1];
        console.log(barValue);
        bars[1].style.background = `conic-gradient(rgb(255, 0, 0) ${value[1] * 3.6}deg, transparent 0deg), rgba(255, 0, 0, 0.1)`;
    } else {
        clearInterval(drawProgressBara);
    }
});
let drawProgressBar3 = setInterval(() => {
    value[2]++;
    console.log(value);
    if (value[2] <= maxValues[2]) {
        barValue[2].textContent = value[2];
        console.log(barValue);
        bars[2].style.background = `conic-gradient(rgb(0, 255, 0) ${value[2] * 3.6}deg, transparent 0deg), rgba(0, 255, 0, 0.1)`;
    } else {
        clearInterval(drawProgressBara);
    }
});

/* ==============   HTML   ============== 
<head>
    <link rel="stylesheet" href="./progress-bar.js" />
</head>

    <section class="circular-progress-bars container flex">
        <div class="circular-progress-bar flex">
            <div class="outher-circle">
                <div class="inner-circle flex blue">
                    <span class="value">0</span><span>%</span> 
                </div>
            </div>
            <div class="outher-circle">
                <div class="inner-circle flex red">
                    <span class="value">0</span><span>%</span>
                </div>
            </div>
            <div class="outher-circle">
                <div class="inner-circle flex green">
                    <span class="value">0</span><span>%</span>
                </div>
            </div>
        </div>
    </section>
*/

/* ==============   CSS   ============== 
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 100%;
    height: 100vh;
}
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}

.circular-progress-bars {
    background-color: #111;
}

.circular-progress-bar {
    position: relative;
    flex-wrap: wrap;
    gap: 40px;
}

.outher-circle {
    position: relative;
    width: 160px;
    height: 160px;
    border: 4px solid #111;
    border-radius: 50%;
    box-shadow: 
    10px 10px 10px rgb(0 0 0 / 40%), 
    0px -5px 5px rgb(255 255 255 / 10%), 
    inset -2px -2px 5px rgb(255 255 255 / 20%), 
    inset 10px 10px 10px rgb(0 0 0 / 40%);
    background: conic-gradient(rgb(0, 188, 212) 0deg, transparent 0deg), rgba(0, 188, 212, 0.1);
    transition: all 2s;
    color: green;
}
.inner-circle {
    position: absolute;
    top: 25px;
    left: 25px;
    right: 25px;
    bottom: 25px;
    z-index: 2;
    background: #111;
    border-radius: 50%;
    border: 2px solid #111;
    box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.5),
        inset -2px -2px 5px rgba(255, 255, 255, 0.2);
}

.blue span {
    color: #00bcd4;
    font-weight: bold;
}
.red span {
    color: rgb(255, 0, 0);
    font-weight: bold;
}
.green span {
    color: rgb(0, 255, 0);
    font-weight: bold;
}
*/