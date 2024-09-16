// nav and hero Animation is here

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 100
});

sr.reveal('.logo_dragon', { origin: 'left' })
sr.reveal('.nav_links_1', { origin: 'right', distance: '400px' })
sr.reveal('.nav_links_2', { origin: 'right', distance: '400px', delay: 100 })
sr.reveal('.nav_links_3', { origin: 'right', distance: '400px', delay: 300 })
sr.reveal('.nav_links_4', { origin: 'right', distance: '400px', delay: 500 })
sr.reveal('.nav_links_5', { origin: 'right', distance: '400px', delay: 700 })
sr.reveal('#middle', { origin: 'bottom', distance: '400px', delay: 100 })
sr.reveal('#left', { origin: 'left', distance: '400px', delay: 1800 })
sr.reveal('#right', { origin: 'right', distance: '400px', delay: 1600 })
sr.reveal('.description_logo', {origin:'right',distance:'300px'})
sr.reveal('.description_text', {origin:'bottom',delay:100})
sr.reveal('.description_btn')

// ------------------------------------------------


// on hover image description is here

const hero_des = document.querySelector('#middle');

hero_des.addEventListener('mouseenter', () => {

    document.querySelector('.hero_img_des').classList.toggle('invisible')
});

hero_des.addEventListener('mouseleave', () => {
    document.querySelector('.hero_img_des').classList.toggle('invisible')

});

// ------------------------------------------------




// on hover image description is here


const drag_but_l =  document.querySelector('#left_img')
const drag_but_r = document.querySelector('#right_img');

drag_but_l.addEventListener('click', (e) => {

    const l_dragon = drag_but_l.getAttribute('src')
    const main_drag =  document.querySelector('#main_img');
    const main_url = main_drag.getAttribute('src')

    main_drag.setAttribute('src',l_dragon);
    drag_but_l.setAttribute('src', main_url);
    console.log(main_url);
    
});

drag_but_r.addEventListener('click', (e) => {

    const r_dragon = drag_but_r.getAttribute('src')
    const main_drag =  document.querySelector('#main_img');
    const main_url = main_drag.getAttribute('src')

    main_drag.setAttribute('src',r_dragon);
    drag_but_r.setAttribute('src', main_url);
    console.log(main_url);
    
});







/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 180,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#F3FDE8"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#FA7070"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": .5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#F3FDE8",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
