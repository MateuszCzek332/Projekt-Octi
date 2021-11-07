let btn = document.querySelector("#submit")
let inp1 = document.querySelector("#input1")
let ans = document.querySelector("#answer")
//tablice z pytaniami:

let name = ["imie",
      "jak sie nazywasz", 
      "kim jestes", 
      "czyja maskotka jestes", 
   ]
let fav_col = ["Podaj kolor",
                "podaj kolor",
                "Podaj ulubiony kolor", 
                "Podaj swoj ulubiony kolor", 
                "Podaj swój ulubiony kolor", 
                "Jaki jest twoj ulubiony kolor", 
                "Jaki jest twój ulubiony kolor"
            ]
let fav_cnt = ["Podaj kraj",
            "podaj kraj",
            "Podaj ulubiony kraj", 
            "Podaj swoj ulubiony kraj", 
            "Podaj swój ulubiony kraj", 
            "Jaki jest twoj ulubiony kraj", 
            "Jaki jest twój ulubiony kraj"
         ]
let fav_eat = ["Podaj potrawe",
            "podaj potrawe",
            "Podaj ulubiona potrawe", 
            "Podaj swoje ulubione jedzenie", 
            "Jaki jest twoja ulubiona potrawe", 
            "Jaki jest twoją ulubioną potrawę"
      ]
let date_q = ["Data",
            "data",
            "Podaj date", 
            "Ktory dzis jest", 
            "Jaki mamy dzien", 
            "Jaki mamy dzień", 
            "Co dzis jest", 
      ]
let time_q = ["Godzina",
        "godzina",
         "Podaj godzine", 
         "Ktora jest godzina", 
      ]
let game = ["gra",
      "kamien papier nozyce", 
      "kamien, papier, nozyce", 
      "kamień, papier, nożyce", 
   ]

function count(txt){

    if(txt.indexOf("+")>=0){
        t = txt.indexOf("+")
        x = parseFloat(txt.slice(0,t)) 
        y = parseFloat(txt.slice(t+1))
        if(isFinite(x) && isFinite(y))
        return "Wynik działania "+ txt +" to "+(x+y)
        else
        return "Błędne dane"
    }
    else if(txt.indexOf("-")>=0){
        t = txt.indexOf("-")
        x = parseFloat(txt.slice(0,t)) 
        y = parseFloat(txt.slice(t+1))
        if(isFinite(x) && isFinite(y))
        return "Wynik działania "+ txt +" to "+(x-y)
        else
        return "Błędne dane"
    }
    else if(txt.indexOf("*")>=0){
        t = txt.indexOf("*")
        x = parseFloat(txt.slice(0,t)) 
        y = parseFloat(txt.slice(t+1))
        if(isFinite(x) && isFinite(y))
        return "Wynik działania "+ txt +" to "+(x*y)
        else
        return "Błędne dane"
    }
    else{
        t = txt.indexOf("/")
        x = parseFloat(txt.slice(0,t)) 
        y = parseFloat(txt.slice(t+1))
        if(isFinite(x) && isFinite(y))
        return "Wynik działania "+ txt +" to "+(x/y)
        else
        return "Błędne dane"
    }
}

function time(){
    data = new Date()
    let tydzien
    if(data.getDay()==1){
        tydzien = "Poniedzialek "
    }
    else if(data.getDay()==2){
        tydzien = "Wtorek "
    }
    else if(data.getDay()==3){
        tydzien = "Środa "
    }
    else if(data.getDay()==4){
        tydzien = "Czwartek "
    }
    else if(data.getDay()==5){
        tydzien = "Piątek "
    }
    else if(data.getDay()==6){
        tydzien = "Sobota "
    }
    else {
        tydzien = "Niedziela "
    }
    return tydzien + data.getDate()+"."+ (data.getUTCMonth()+1)+"."+ data.getFullYear()
}

function answer (txt){
    //proste pytania
    if(name.includes(txt)){
        ans.innerHTML = "Jestem Octi z Flying Octopus"
    }
    else if(fav_col.includes(txt)){
        ans.innerHTML = "zielony"
    }
    else if(fav_cnt.includes(txt)){
        ans.innerHTML = "Hiszpania"
    }
    else if(fav_eat.includes(txt)){
        ans.innerHTML = "Pierogi"
    }// czas
    else if(date_q.includes(txt)){
        ans.innerHTML = time()
    }
    else if(time_q.includes(txt)){
        data = new Date()
        ans.innerHTML = data.toLocaleString().slice(-8, -3)
    }//funkcje matematyczne
    else if(txt.includes("+") || txt.includes("-") || txt.includes("*") || txt.includes("/")){
        ans.innerHTML = count(txt)
    }
    else if(txt.includes("sqrt")){
        x= parseFloat(txt.slice(4))
        ans.innerHTML = "Pierwiastek z "+x+" wynosi: "+Math.sqrt(x).toFixed(3)
    }//kamien papier nozyce
    else if(game.includes(txt)){
        console.log("gra")
    }//else
    else if(txt==""){
        ans.innerHTML = "napisz cos"
    }
    else{
        ans.innerHTML = "nie rozumiem"
    }

}

function enter(){
    let txt=inp1.value
    if(txt.includes("\n")){
        txt = txt.slice(0,-1)
        inp1.value = ""
        answer(txt)
    }
}

btn.addEventListener("click", function(){
    let txt=inp1.value
    inp1.value = ""
    answer(txt)
})
