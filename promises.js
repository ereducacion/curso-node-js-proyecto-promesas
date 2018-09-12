const opositores = [{
  id: 1,
  nombre: 'Pepe',
  especialidad: 'Informática'
}, {
  id: 2,
  name: 'Leyre',
  especialidad: 'Sistemas y aplicaciones informáticas'
}]

const notas = [{
  id: 1,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 1,
  prueba: 'Teórica',
  nota: 6.5
}, {
  id: 2,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 2,
  prueba: 'Teórica',
  nota: 6.5
}
]

// crea promesa para obtener los datos del opositor 1
const getOpositor = (id) => {
  return new Promise((resolve, reject) => {
    const opositor = opositores.find((opositor) => opositor.id === id)
    if (opositor) {
      resolve(opositor)
    } else {
      reject(new Error(`No se ha encontrado al opositor con id: ${id}.`))
    }
  })
}

// lo probamos...
getOpositor(1).then((opositor) => {
  console.log(opositor)
}).catch((e) => {
  console.log(e)
})

// crea promesa para obtener las notas del opositor 1
const getNotas = (id) => {
  return new Promise((resolve, reject) => {
    const tempNotas = notas.filter((nota) => nota.id === id)
    if (tempNotas.length) {
      resolve(tempNotas)
    } else {
      reject(new Error(`No se han encontrado las notas del opositor con id: ${id}.`))
    }
  })
}

// lo probamos...
getNotas(1).then((lasNotas) => {
  console.log(lasNotas)
}).catch((e) => {
  console.log(e)
})
// crea promesa para obtener el nombre y las notas del opositor1