// Menu with Floating Indicator

const links = document.querySelectorAll('.nav-li');
const indicator = document.querySelector('.indicator');

links.forEach(link => {
    link.addEventListener('click', toggleActiveLink);
});

function toggleActiveLink() {
    const activeLink = document.querySelector('.active');
    activeLink.classList.remove('active');
    this.classList.add('active');
    indicator.style = `left: calc(24px + ${this.dataset.index} * 70px);`;
}

/* ==============   HTML   ============== 
    <section class="container flex" id="bg1">
        <nav class="navigation flex">
            <ul class="nav-ul">
                <li class="nav-li active" data-index="0">
                    <a href="#bg1">
                        <span class="icon">
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </span>
                        <span class="text">home</span>
                    </a>
                </li>
                <li class="nav-li" data-index="1">
                    <a href="#bg1">
                        <span class="icon">
                            <i class="fa fa-female" aria-hidden="true"></i>
                        </span>
                        <span class="text">profile</span>
                    </a>
                </li>
                <li class="nav-li" data-index="2">
                    <a href="#bg1">
                        <span class="icon">
                            <i class="fa fa-comment-o" aria-hidden="true"></i>
                        </span>
                        <span class="text">message</span>
                    </a>
                </li>
                <li class="nav-li" data-index="3">
                    <a href="#bg1">
                        <span class="icon">
                            <i class="fa fa-camera-retro" aria-hidden="true"></i>
                        </span>
                        <span class="text">photos</span>
                    </a>
                </li>
                <li class="nav-li" data-index="4">
                    <a href="#bg1">
                        <span class="icon">
                            <i class="fa fa-cogs" aria-hidden="true"></i>
                        </span>
                        <span class="text">settings</span>
                    </a>
                </li>
                <div class="indicator"></div>
            </ul>
        </nav>
    </section>

<script src="../JS/tutorials/hamburger-menu.js"></script>
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
#bg1 {
    background: #222327;
}

.navigation {
    position: relative;
    width: 400px;
    height: 70px;
    background: #fff;
    border-radius: 10px;
}

.nav-ul {
    display: flex;
    width: 350px;
}

.nav-li {
    position: relative;
    width: 70px;
    height: 70px;
    list-style: none;
    z-index: 1;
}

.nav-li a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    color: #222327;
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;
}

.icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5rem;
    text-align: center;
    transition: 0.5s;
}
.nav-li.active a .icon {
    transform: translateY(-35px);
}

.text {
    position: absolute;
    transform: translateY(20px);
    opacity: 0;
    transition: 0.5s;
}
.nav-li.active a .text {
    transform: translateY(10px);
    opacity: 1;
}

.indicator {
    position: absolute;
    top: -50%;
    left: 24px;
    width: 70px;
    height: 70px;
    border: 6px solid #222327;
    border-radius: 50%;
    background: #29f953;
    transition: 0.5s;
}
.indicator::before, 
.indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: #fff;
    box-shadow: 0px -10px 0px 0px #222327;
}
.indicator::before {
    left: -22px;
    border-top-right-radius: 20px;
}
.indicator::after {
    right: -22px;
    border-top-left-radius: 20px;
}
*/


// Radial Menu with Floating Indicator
const radialMenu = document.querySelector('.radial-menu');
const toggleBtn = document.querySelector('.toggle');
const radiaiIndicator = document.querySelector('.radial-indicator');
let currentPosition = document.querySelector('li.active').dataset.i;
console.log(currentPosition);


toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    radialMenu.classList.toggle('active');
})

const radialLinks = document.querySelectorAll('li');

radialLinks.forEach(link => {
    link.addEventListener('click', activeLink);
})

function activeLink() {
    radialLinks.forEach(link => {
        link.classList.remove('active');
        this.classList.add('active');
    })
    let newPosition = this.dataset.i;
    radiaiIndicator.style = `transform: translateX(-103px) rotate(calc(45deg * ${this.dataset.i}));`;
}

/* ==============   HTML   ============== 
    <section class="container flex" id="bg2">
        <ul class="radial-menu flex">
            <div class="toggle flex">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
            
            <li style="--i:0"  data-i="0" class="active">
                <a href="#bg2">
                    <i class="fa fa-home" aria-hidden="true"></i>
                </a>
            </li>
            <li style="--i:1"  data-i="1">
                <a href="#bg2">
                    <i class="fa fa-female" aria-hidden="true"></i>
                </a>
            </li>
            <li style="--i:2" data-i="2">
                <a href="#bg2">
                    <i class="fa fa-comment-o" aria-hidden="true"></i>
                </a>
            </li>
            <li style="--i:3"  data-i="3">
                <a href="#bg2">
                    <i class="fa fa-camera-retro" aria-hidden="true"></i>
                </a>
            </li>
            <li style="--i:4" data-i="4">
                <a href="#bg2">
                    <i class="fa fa-camera-retro" aria-hidden="true"></i>
                </a>
            </li>
            <li style="--i:5"  data-i="5">
                <a href="#bg2">
                    <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                </a>
            </li>
            <li style="--i:6"  data-i="6">
                <a href="#bg2">
                    <i class="fa fa-gamepad" aria-hidden="true"></i>
                </a>
            </li>
            <li style="--i:7"  data-i="7">
                <a href="#bg2">
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                </a>
            </li>
    
            <div class="radial-indicator"></div>
        </ul>
    </section>

<script src="../JS/tutorials/menus.js"></script>
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
#bg2 {
    background: #222327;
}

.radial-menu {
    position: relative;
    width: 300px;
    height: 300px;
    background: #222327;
    border-radius: 10px;
}

.toggle {
    position: absolute;
    width: 75px;
    height: 75px;
    color: #222327;
    font-size: 3rem;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    transition: 0.5s;
}
.toggle.active {
    transform: rotate(315deg);
    color: #fff;
    background: #222327;
    box-shadow: 0 0 0 68px #fff;
}

.radial-menu li {
    position: absolute;
    left: 10px;
    list-style: none;
    transform: rotate(calc(360deg / 8 * var(--i))) translateX(40px);
    transform-origin: 140px;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    z-index: 10;
}
.radial-menu.active li {
    visibility: visible;
    opacity: 1;
}
.radial-menu.active li.active {
    transform: rotate(calc(360deg / 8 * var(--i))) translateX(12px);
}

.radial-menu li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    color: #222327;
    font-size: 1.75rem;
    text-decoration: none;
    transform: rotate(calc(360deg / -8 * var(--i)));
    border-radius: 50%;
}

.radial-indicator {
    position: absolute;
    left: calc(50% + 2.5px);
    transform-origin: right;
    width: 100px;
    height: 1px;
    pointer-events: none;
    transition: 0.5s;
}
.radial-indicator::before {
    content: '';
    position: absolute;
    top: -27.5px;
    left: 72px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #222327;
    box-shadow: 0px 0px 0px 6px #29fd53;
    opacity: 0;
    transition: 0.5s;
}

.radial-menu.active .radial-indicator::before {
    top: -27.5px;
    left: -27.5px;
    background: #29fd53;
    box-shadow: 0px 0px 0px 6px #222327;
    opacity: 1;
}

li:nth-child(2).active ~ .radial-indicator {
    transform: translateX(-103px) rotate(0deg);
}
*/
