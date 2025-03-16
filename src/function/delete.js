const hapus = () => {
    document.addEventListener("click", (i) =>{
        if(i.target.classList.contains("checkbox")){
            i.target.closest(".penampung").remove();
        }
    })
}

export default hapus;