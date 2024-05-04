let data = document.getElementById('data');
let form = document.getElementById('form');
let name = document.getElementById('name');
let date = document.getElementById('date');
let ball = document.getElementById('ball');
let btn = document.getElementById('btn');


let editModal = document.getElementById('editModal');
let closeModal = document.querySelector('.modal__close');
let editModalForm = document.querySelector('.edit__todo__form form')
let Input = document.getElementById('editInput')


form.addEventListener('submit', function (event) {
    event.preventDefault();

    if(name.value == "" || date.value == "" || ball.value == "") {
        alert("malumotni to'liq kiriting");
        return;
    }
    create()

});

editModalForm.addEventListener('submit', function(event){
    event.preventDefault();
    const todoId =+editInput.dataset.todoId

    if(editInput.value == ""){
        alert("malumotni to'liq kiriting")
    }

    updateEditedData(editInput.value, todoId)
})

function updateEditedData(editInp, id){
    const todoIndex = data2.findIndex(function (todoid){
        return todoid.id === id
    })

    data2[todoIndex].name = editInp
    console.log(editInp)
    editModal.style.display = "none"
    localStorage.setItem("data2", JSON.stringify(data2));
    read();
}

let data2 = [];

const makeId = (data2) => {
    if (!data2.lenth) {
        return 1;
    }
    else {
        return data2[data2.lenth = 1].id + 1
    }
}

function create() {
    data2.push({
        id: makeId(data2),
        name: name.value,
        date: date.value,
        ball: ball.value,
    });

    localStorage.setItem("data2", JSON.stringify(data2));
    console.log(data2);
    read();
}


function delete1(id) {
    const idx = data2.findIndex(function (todoid) {
        todoid.id === id;
    });
    data2.splice(idx, 1);
    localStorage.setItem("data2", JSON.stringify(data2));
    read();
}


function edit1(id) {
    const editId = data2.find(function (todoid) {
        return todoid.id === id
    });
    
    console.log(editId);
    showModal(editId.name,id);
}

function showModal(todoText, todoId) {
    editModal.style.display = 'flex'
    editInput.value = todoText
    editInput.dataset.todoId = todoId
}


closeModal.addEventListener('click', function () {
    editModal.style.display = 'none'
});





function read() {
    data.innerHTML = "";
    
    data2.sort(function (a,b){
        return b.ball - a.ball;
    });
    data2.map(function (obj, y) {
        return (data.innerHTML += `
        
        <td>${y + 1}</td>
        <td>${obj.name}</td>
        <td>${obj.date}</td>
        <td>${obj.ball}</td>
        <td><i onclick="edit1(${obj.id})" class="fas fa-edit"></i></td>
        <td><i onclick="delete1(${obj.id})" class="fas fa-trash-alt"></i></td>
        `)
    });
    
    name.value = '';
    date.value = '';
    ball.value = '';
}
(() => {
    data2 = JSON.parse(localStorage.getItem("data2")) || [];
    // console.log(data2);
    read();
})();