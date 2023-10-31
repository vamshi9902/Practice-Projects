let sideNavBar = document.querySelector(".sidenav");
let menuButton = document.getElementById("menu");
let cross = document.getElementById("cross")

menuButton.addEventListener("click", () => {
    sideNavBar.classList.add("shownav");
});

cross.addEventListener("click", ()=>{
    sideNavBar.classList.remove("shownav")
})


let vechicleModels = [
    {
        model: 'Audi',
        mark: 'A1',
        year: 2012,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Manual',
        fuel: 'Gasoline',
    },
    {
        model: 'Golf 6',
        mark: 'Volkswagen',
        year: 2008,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Manual',
        fuel: 'Diesel',
    },
    {
        model: 'Camry',
        mark: 'Toyota',
        year: 2006,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Automatic',
        fuel: 'Hybrid',
    },
    {
        model: '320',
        mark: 'BMW',
        year: 2012,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Manual',
        fuel: 'Diesel',
    },
    {
        model: 'Benz GLK',
        mark: 'Mercedes',
        year: 2006,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Manual',
        fuel: 'Diesel',
    },
    {
        model: 'Passat CC',
        mark: 'Volkswagen',
        year: 2008,
        doors: '4/5',
        ac: 'Yes',
        transmission: 'Automatic',
        fuel: 'Gasoline',
    },
];

let modelBtns = document.querySelectorAll('.modelbtn');
let carImg = document.getElementById('carImg');
let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
let row4 = document.getElementById('row4');
let row5 = document.getElementById('row5');
let row6 = document.getElementById('row6');
let row7 = document.getElementById('row7');

modelBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const dynamicSrc = btn.getAttribute('data-src');
        carImg.src = dynamicSrc;
        row1.textContent = vechicleModels[index].model;
        row2.textContent = vechicleModels[index].mark;
        row3.textContent = vechicleModels[index].year;
        row4.textContent = vechicleModels[index].doors;
        row5.textContent = vechicleModels[index].ac;
        row6.textContent = vechicleModels[index].transmission;
        row7.textContent = vechicleModels[index].fuel;
    });
});


// FAQ's

let questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    let btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {

        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show")
            }
        });

        question.classList.toggle("show");
    });
});