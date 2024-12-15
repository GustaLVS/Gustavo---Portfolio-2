const chk = document.getElementById('chk');
const particle = document.getElementById('particles-js');
const menuLinks = document.querySelectorAll('.menu-icons a'); 
const contIni = document.querySelector('.container-inicio');
const compIni = document.querySelector('.complemento-inicio');
const parIni = document.querySelector('.paragrafo-inicio')
const logo = document.querySelector('.logo img');
const lab = document.querySelector('.label')
const leftSbr = document.querySelector('.left-sobre')
const TxtGrtr = document.querySelector('.complemento-sobre img')
const txtSbr = document.querySelector('.textos-sobre')
const rdsc = document.querySelector('.redes-sociais')
const hedln = document.querySelector('.headline-skills')
const txthed = document.querySelector('.text-headline-skills')
const boskills = document.querySelectorAll('.box-skills')
const services = document.querySelector('.servicos')
const titServ = document.querySelector('.titulo-servicos')
const descServ = document.querySelector('.descricao-servicos')
const cardServ = document.querySelectorAll('.card-servicos')
const cardServLeft = document.querySelectorAll('.card-servicos-left')
const cardTitle = document.querySelectorAll('.card-titulo')
const iconServ = document.querySelectorAll('.card-icon')

let particlesConfig = {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3.945738208161363,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 500,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
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
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
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
  }

  function updateParticlesConfig() {
    particlesJS("particles-js", particlesConfig); //aplica o JSON atualizado
  }

chk.addEventListener('change', () => {
    document.body.classList.toggle('white');
    particle.classList.toggle('white');
    contIni.classList.toggle('white');
    compIni.classList.toggle('white');
    parIni.classList.toggle('white')
    lab.classList.toggle('white')
    leftSbr.classList.toggle('white')
    txtSbr.classList.toggle('white')
    rdsc.classList.toggle('white')
    hedln.classList.toggle('white')
    txthed.classList.toggle('white')
    services.classList.toggle('white')
    titServ.classList.toggle('white')
    descServ.classList.toggle('white')
    

    menuLinks.forEach(link => {
        link.classList.toggle('white');
    });

    boskills.forEach(border => {
      border.classList.toggle('white');
  });

  cardServ.forEach(border => {
    border.classList.toggle('white')
  })

  cardServLeft.forEach(border => {
    border.classList.toggle('white')
  })

  cardTitle.forEach(text => {
    text.classList.toggle('white')
  })

  iconServ.forEach(border => {
    border.classList.toggle('white')
  })

    if (document.body.classList.contains('white')) {
        logo.src = 'assets/img/Logo_GS_preta-removebg-preview.png';
        particlesConfig.particles.color.value = "#000"  
        TxtGrtr.src = 'assets/img/DESENVOLVEDOR_WEB_PRETOHD-removebg.png'
    } else {
        logo.src = 'assets/img/Logo-removebg-preview.png'; 
        particlesConfig.particles.color.value = "#fff"
        TxtGrtr.src = 'assets/img/DESENVOLVEDOR_WEB-removebg.png'
    }

    updateParticlesConfig();
});

console.log(boldSbr)
