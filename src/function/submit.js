import hapus from './delete.js';
import ubah from './edit.js';

export const submit = () => {
    const list = document.getElementById('list');
    const input = document.getElementById('input');
    const date = document.getElementById('date');
    
    const edit = "edit";

    let index = document.getElementsByClassName('penampung').length + 1 ;

    const nampung = [];
    nampung.push(input.value);
    
    list.innerHTML += `
    <div class="penampung flex justify-between p-2 >
        <div class="flex ">
            <input type="checkbox" class="checkbox flex items-center"></input>
            <p class="flex items-center">${index}</p1>
            <p class="flex items-center">${input.value}</p>
            <p class="flex items-center">${date.value}</p>
            <button class="ubah">${edit}</button>
        </div>
    </div>
    `; 

    input.value = '';
    date.value = '';


    hapus();
    ubah();
}
