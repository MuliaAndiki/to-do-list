const ubah = () => {
    const editButtons = document.getElementsByClassName('ubah');
    
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', () => {
            const parent = editButtons[i].closest('.penampung'); // Ambil elemen utama
            const text = parent.querySelector('p:nth-child(3)');
            const date = parent.querySelector('p:nth-child(4)');
            
            const div = document.createElement('div');
            const editInput = document.createElement('input');
            const editDate = document.createElement('input');
            const saveBtn = document.createElement('button');
            
            editInput.value = text.textContent;
            editDate.type = 'date';
            editDate.value = date.textContent;
            saveBtn.textContent = 'Simpan';
            
            div.appendChild(editInput);
            div.appendChild(editDate); 
            div.appendChild(saveBtn);
            
            text.parentElement.replaceChild(div, text);
            date.parentElement.replaceChild(editDate, date);

            saveBtn.addEventListener('click', () => {
                text.textContent = editInput.value;
                date.textContent = editDate.value;

                div.parentElement.replaceChild(text, div);
                editDate.parentElement.replaceChild(date, editDate);
            });
        });
    }
};

export default ubah;
