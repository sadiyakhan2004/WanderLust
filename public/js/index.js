
let taxSwitch = document.getElementById("flexSwitchCheckDefault");
let filters = document.getElementsByClassName("filter");



for(let filter of filters){
filter.addEventListener("click",()=>{
  // console.dir(e);
  let category = filter.childNodes[3].innerText;
  location.href = `/listings/filters/${category}`;
  })
}

taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (let info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    }
    else {
      info.style.display = "none";
    }
  }
})

