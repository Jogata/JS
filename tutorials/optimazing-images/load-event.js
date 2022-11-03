const image = document.images[0];
const bigImage = document.createElement("img");

bigImage.onload = function () {
    image.src = this.src;
    image.className = "noblur";
}

// setTimeout will prevent the browser to show loading animation in the tabbar
setTimeout(function () {
    bigImage.src = "big.jpg";
}, 50)

/* ==============   HTML   ============== 
    <img src="small.jpg" class="blur" width="1200">
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
    background-color: black;
}

.blur {
    filter: blur(2px);
    transition: all 1s;
}
.noblur {
    filter: blur(0);
    transition: all 5s;
}
*/