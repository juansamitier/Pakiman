imagenes=[]
imagenes["Cauchin"]="vaca.png"
imagenes["Pokacho"]= "pollo.png"
imagenes["Tocinauro"]="cerdo.jpg"


pakibola=[]
pakibola.push(new Pakiman("Cauchin",100,30))
pakibola.push(new Pakiman("Pokacho",80,50))
pakibola.push(new Pakiman("Tocinauro",120,40))

console.log(pakibola)

for(pks of pakibola) // NOTE: in para el inidce(el 0,1,2) y of es para lo q hay dentro.
{
  pks.mostrar()
}

for(x in pakibola[1])
{
  console.log(x)
}
