// floating indicator

// const links = document.querySelectorAll('.nav-li');
const indicator = document.querySelector('.indicator');

// links.forEach(link => {
//     link.addEventListener('click', toggleActiveLink);
// });

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


// radial menu with floating indicator
const radialMenu = document.querySelector('.radial-menu');
const toggleBtn = document.querySelector('.toggle');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    radialMenu.classList.toggle('active');
})

const links = document.querySelectorAll('li');

links.forEach(link => {
    link.addEventListener('click', activeLink);
})

function activeLink() {
    links.forEach(link => {
        link.classList.remove('active');
        this.classList.add('active');
    })
}

/* ==============   HTML   ============== 

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
*/
