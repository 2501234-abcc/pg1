let kati = Number(localStorage.getItem('1')) || 0;
let make = Number(localStorage.getItem('2')) || 0;
let hiki = Number(localStorage.getItem('3')) || 0;
let p1 = document.getElementById("syouhai");
out();
function out() {
    p1.textContent = kati + "勝 " + make + "敗 " + hiki + "分";
}
function mainasuKati() {
    if (kati > 0) {
        kati--;
        localStorage.setItem('1', kati);
        out();
    }
}

function mainasuMake() {
    if (make > 0) {
        make--;
        localStorage.setItem('2', make);
        out();
    }
}

function mainasuHiki() {
    if (hiki > 0) {
        hiki--;
        localStorage.setItem('3', hiki);
        out();
    }
}

function purasuKati() {
    kati++;
    localStorage.setItem('1', kati);
    out();
}

function purasuMake() {
    make++;
    localStorage.setItem('2', make);
    out();
}

function purasuHiki() {
    hiki++;
    localStorage.setItem('3', hiki);
    out();
}

function input1() {
    let kiro = document.getElementById("msg").value;
    if (kiro === "") return;

    let list = JSON.parse(localStorage.getItem("kiroku")) || [];
    list.push(kiro);
    localStorage.setItem("kiroku", JSON.stringify(list));

    document.getElementById("msg").value = "";
    loadKiroku();
}

function loadKiroku() {
    let oya = document.getElementById("kiroku");
    oya.innerHTML = "";

    let list = JSON.parse(localStorage.getItem("kiroku")) || [];
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        let row = document.createElement("div");
        row.className = "row";

        let p = document.createElement("p");
        p.textContent = list[i];

        let del = document.createElement("button");
        del.textContent = "削除";

        del.onclick = function () {
            list.splice(i, 1);
            localStorage.setItem("kiroku", JSON.stringify(list));
            loadKiroku();
        };

        row.appendChild(p);
        row.appendChild(del);
        oya.appendChild(row);
    }
}

loadKiroku();