// Espera que cargue todo el contenido del HTML.
document.addEventListener('DOMContentLoaded', () => {
// Creo array con todos los escudos.
  const escudosArray = [
    {
      name: 'boca',
      img: 'imagenes/boca.png'
    },
    {
      name: 'river',
      img: 'imagenes/river.png'
    },
    {
      name: 'independiente',
      img: 'imagenes/independiente.png'
    },
    {
      name: 'estudiantes',
      img: 'imagenes/estudiantes.png'
    },
    {
      name: 'colon',
      img: 'imagenes/colon.png'
    },
    {
      name: 'newells',
      img: 'imagenes/newells.png'
    },
    {
      name: 'rosariocentral',
      img: 'imagenes/rosariocentral.png'
    },
    {
      name: 'racing',
      img: 'imagenes/racing.png'
    },
    {
      name: 'sanlorenzo',
      img: 'imagenes/sanlorenzo.png'
    },
    {
      name: 'huracan',
      img: 'imagenes/huracan.png'
    },
    {
      name: 'velez',
      img: 'imagenes/velez.png'
    },
    {
      name: 'talleres',
      img: 'imagenes/talleres.png'
    },
    {
      name: 'boca',
      img: 'imagenes/boca.png'
    },
    {
      name: 'river',
      img: 'imagenes/river.png'
    },
    {
      name: 'independiente',
      img: 'imagenes/independiente.png'
    },
    {
      name: 'estudiantes',
      img: 'imagenes/estudiantes.png'
    },
    {
      name: 'colon',
      img: 'imagenes/colon.png'
    },
    {
      name: 'newells',
      img: 'imagenes/newells.png'
    },
    {
      name: 'rosariocentral',
      img: 'imagenes/rosariocentral.png'
    },
    {
      name: 'racing',
      img: 'imagenes/racing.png'
    },
    {
      name: 'sanlorenzo',
      img: 'imagenes/sanlorenzo.png'
    },
    {
      name: 'huracan',
      img: 'imagenes/huracan.png'
    },
    {
      name: 'velez',
      img: 'imagenes/velez.png'
    },
    {
      name: 'talleres',
      img: 'imagenes/talleres.png'
    }
  
  ]
  
  
  // Declaracion de variables
  const tablero = document.querySelector('.tablero')
  const muestraResultado = document.querySelector('#resultado')
  let escudosElegidos = []
  let escudosElegidosId = []
  let escudosMatcheados = []

  // Creo el tablero
  function creaTablero() {
    // Mezclo los escudos
    escudosArray.sort(() => 0.5 - Math.random())
    for (let i = 0; i < escudosArray.length; i++) {
      const escudo = document.createElement('img')
      escudo.setAttribute('src', 'imagenes/afa.png')
      escudo.setAttribute('datoId', i)
      escudo.addEventListener('click', girarEscudo)
      tablero.appendChild(escudo)
    }
  }

  // Busco parejas
  function buscaPareja() {
    // creo array con todos los escudos
    const escudos = document.querySelectorAll('img')
    const escudo1Id = escudosElegidosId[0]
    const escudo2Id = escudosElegidosId[1]
    // Si selecciono la misma imagen, muestro error y vuelvo a mostrar escudo de afa
    if(escudo1Id == escudo2Id) {
      escudos[escudo1Id].setAttribute('src', 'imagenes/afa.png')
      escudos[escudo2Id].setAttribute('src', 'imagenes/afa.png')
      alert('Seleccionaste la misma imagen!')
    }
    // Si son iguales los escudos, cambio su fondo y apago los eventListener para que no se puedan volver a 
    // seleccionar, luego agrego los escudos al array de escudos matcheados.
    else if (escudosElegidos[0] == escudosElegidos[1]) {
      alert('Encontraste su pareja')
      escudos[escudo1Id].setAttribute('src', 'imagenes/gano.png')
      escudos[escudo2Id].setAttribute('src', 'imagenes/gano.png')
      escudos[escudo1Id].removeEventListener('click', girarEscudo)
      escudos[escudo2Id].removeEventListener('click', girarEscudo)
      escudosMatcheados.push(escudosElegidos)
      // si no son iguales, vuelvo al escudo de afa
    } else {
      escudos[escudo1Id].setAttribute('src', 'imagenes/afa.png')
      escudos[escudo2Id].setAttribute('src', 'imagenes/afa.png')
      alert('Lo siento, intenta de nuevo')
    }
    escudosElegidos = []
    escudosElegidosId = []
    // Voy actualizando el resultado a medida que se seleccionan escudos iguales.
    // El mensaje cambia cuando se llego al total de escudos disponibles.
    muestraResultado.textContent = escudosMatcheados.length
    if  (escudosMatcheados.length === escudosArray.length/2) {
      muestraResultado.textContent = 'Felicitaciones, has ganado!'
    }
  }

  // Funcion para "girar" escudos
  function girarEscudo() {
    let idEscudo = this.getAttribute('datoId')
    escudosElegidos.push(escudosArray[idEscudo].name)
    escudosElegidosId.push(idEscudo)
    this.setAttribute('src', escudosArray[idEscudo].img)
    if (escudosElegidos.length ===2) {
      setTimeout(buscaPareja, 50)
    }
  }

  creaTablero()
  
  
  $("#reinicio").click(function(){
    // pongo tablero a vacio para limpiar pantalla y no generar varios tableros al mismo tiempo.
    tablero.innerHTML = ""
    // vacio el numero de escudos matcheados para reiniciar puntuacion.
    escudosMatcheados = []
    muestraResultado.textContent = escudosMatcheados.length
    creaTablero()
  })
})


