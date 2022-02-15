import {
  db,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "./firebase.js";

export class Habilidad {
  constructor(tit = "") {
    this.titulo = tit;
  }
  obtenerHabilidades() {
    onSnapshot(collection(db, "habilidades"), (query) => {
      let li = "";
      console.log("query", query);
      // const arreglo = [{descripcion:"ana"},{descripcion:"jose"}]
      // arreglo.forEach((ele)=>{
      //    console.log(ele);
      // })

      query.forEach((doc) => {
        console.log(doc.data());
        const { descripcion } = doc.data();
        li += `
        <li class="skills-skill" >${descripcion}</li>
        `;
      });
      console.log(li);
      document.querySelector(".skills-list").innerHTML = li;
    });
  }
  obtenerHabilidadesTabla(funcionObtener) {
    onSnapshot(collection(db, "habilidades"), funcionObtener);
  }
  eliminarHabilidades(id) {
    deleteDoc(doc(db, "habilidades", id));
  }

  actualizarHabilidades(id, habilidad) {
    updateDoc(doc(db, "habilidades", id), habilidad);
  }

  obtenerHabilidad(id) {
    return getDoc(doc(db, "habilidades", id));
  }

  grabarHabilidades(descrip) {
    addDoc(collection(db, "habilidades"), { descripcion: descrip });
  }
}  
