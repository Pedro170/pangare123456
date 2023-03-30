function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);

  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) != -1;
  const horarioAberto =
    horarioAgora > horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

initFuncionamento()

function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incremeto = Math.floor(total / 100);
    let start = 0;
  
    const timer = setInterval(() => {
      start += incremeto;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
}

initAnimaNumeros()

// function observaScroll() {
//   const conteudo = document.querySelector(".conteudo");
//   if (conteudo) {
//     const windowMetade = window.innerHeight * 0.5;

//     function animaScroll() {
//       const articleTop = conteudo.getBoundingClientRect();
//       const isArticleVisible = articleTop.top - windowMetade < 0;

//       if (isArticleVisible) {
//         conteudo.classList.add("scroll");
        
//       } else if( conteudo.classList.contains('scroll') ) {
//         conteudo.classList.remove("scroll");
//       }

//       const isScroll = conteudo.classList.contains('scroll')
//         if(isScroll) {
//           initAnimaNumeros()
//           console.log('object')
//         }
//     }
//     window.addEventListener("scroll", animaScroll);
//   }
// }

// observaScroll()
