const container = document.getElementById("mainpage"), 
tombolScreen = document.getElementById("tombolScreen");


const resize = () => {
   const isChecked =tombolScreen.checked;
  
   isChecked ? container.classList.remove("container") : container.classList.add("container");
}

// function resize() {
//   if (tombolScreen.checked) {
//     container.classList.remove("container");
//   } else {
//     container.classList.add("container");
//   }
// };



addEventListener("change", resize, false);
