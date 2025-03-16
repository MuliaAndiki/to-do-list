const ubah = () => {
    const edit = document.getElementsByClassName('ubah');
    
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener('click', () => {
            const parent = edit[i].closest('.penampung'); 
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
