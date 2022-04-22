const hamburger = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('cross');
});

/* ==============   HTML   ============== 
    <section class="hmcbg container flex">
        <div class="hamburger-menu">
            <div class="bar" id="bar-1"></div>
            <div class="bar" id="bar-2"></div>
            <div class="bar" id="bar-3"></div>
        </div>
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
.hmcbg {
    background: #121212;
}

.hamburger-menu {
    position: relative;
    width: 3rem;
    height: 1.5rem;
}
.bar {
    position: absolute;
    width: 100%;
    height: 2px;
    background: #f7f7f7;
    transition: top 0.25s ease-in-out 0.25s;
}

#bar-1 {
    top: 0;
}
#bar-2 {
    top: 50%;
}
#bar-3 {
    top: 100%;
}

.hamburger-menu.cross #bar-1 {
    top: 50%;
    transform: rotate(-45deg);
    transition: top 0.25s ease-in-out, transform 0.25s ease-in-out 0.25s;
}
.hamburger-menu.cross #bar-2 {
    visibility: hidden;
    transition: 0.25s ease-in-out;
}
.hamburger-menu.cross #bar-3 {
    top: 50%;
    transform: rotate(45deg);
    transition: top 0.25s ease-in-out, transform 0.25s ease-in-out 0.25s;
}
*/
