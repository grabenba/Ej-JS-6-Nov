/*
sobre mi
Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: nombre, apellido, edad
Mostrar en consola el objeto sobreMi
*/

let sobreMi = {
    nombre: "Mónica",
    apellido: "Giner",
    edad: 59,
};

console.log ( sobreMi.nombre, sobreMi.apellido, sobreMi.edad);

/*
presentar
Crear una variable llamada user, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: fullname, email, age
Mostrar en consola el objeto user
Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"
*/

let user = {
    fullname: "Graciela Benbassat",
    email: "gbenba13@gmail.com",
    age: 59,
}
console.log (`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años`);

/*
cancion
Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)
*/

var song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV",
  };
  
  var cancion = {
    titulo: "Rock and Roll",
    banda: "Led Zeppelin",
    duracion: 166000 / 1000,
  };
  
  console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }

/*
Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
Los datos que tenemos son un id, email, nombre y teléfono
Crear un objeto para cada persona que nos pasaron
Mostrar por consola todos los objetos creados
*/
