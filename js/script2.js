let btn = document.querySelector("#submit")
let inp1 = document.querySelector("#input1")
let ans = document.querySelector("#answer")
let data = new Date()
let g = false        
let week = ["Niedziela ","Poniedziałek ","Wtorek ","Środa ","Czwartek ","Piątek ","Sobota ",]
//tablice z keywordami i odpowiedziami
let game_q = ["gra","kamien papier nozyce", "kamien, papier, nozyce", "kamień, papier, nożyce"]
let questions = [
    name = ["jak masz na imie", "jak sie nazywasz", ],
    color = ["podaj kolor", "jaki jest twoj ulubiony kolor", "podaj ulubiony kolor", "podaj najladniejszy kolor", "jaka jest twoja ulubiona brawa"],
    country = ["podaj kraj", "jaki jest twoj ulubiony kraj", "jakie jest twoje ulubione panstwo"],
    city = ["podaj miasto", "jakie jest twoje ulubione miasto", "jakie miasto najbardziej lubisz"],
    eat = ["podaj jedzenie", "jaka jest twoja ulubiona potrawa", "jakie jest twoje ulubione jedzenie"],
    animal = ["podaj zwierze", "jakie jest twoje ulubione zwierze", "jakie zwierzatko najbardziej lubisz",],
    date = ["data", "ktory dzis jest", "jaki mamy dzien", "co dzis jest"],
    time = ["godzina", "ktora jest godzina", "jaki jest czas"],
]
let answers = [
    "Jestem Octi z Flying Octopus",
    "Uwielbiam fioletowy",
    "Zawsze dobrze wspominam Hiszpanie",
    "Najlepiej bawiłam się w Nowym Jorku",
    "Nie mogę powiedzieć nic innego niż pierogi",
    "Popatrz na mnie, czy ty sobie jaja robisz?",
    week[data.getDay()] + data.getDate()+"."+ (data.getUTCMonth()+1)+"."+ data.getFullYear(),
    "Jest " + data.toLocaleString().slice(-8, -3)+" czasu polskiego",
]

function count(txt){

    if(txt.includes("sqrt")){
        t = txt.indexOf("sqrt") + 4
        x = parseFloat(txt.slice(t)) 
        if(x>=0 && isFinite(x))
        return "Wynik działania "+ txt +" to "+ Math.sqrt(x).toFixed(3)
        else
        return "Błędne dane"
    }
    else if(txt.includes("+")){
        t = txt.indexOf("+")
        x = parseFloat(txt.slice(0,t)) 
        y = parseFloat(txt.slice(t+1))
        if(isFinite(x) && isFinite(y))
        return "Wynik działania "+ txt +" to "+(x+y)
        else
        return "Błędne dane"
    }
    else if(txt.includes("-")){
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
    else if(txt.indexOf("/")>=0){
        t = txt.indexOf("/")
        x = parseFloat(txt.slice(0,t)) 
        y = parseFloat(txt.slice(t+1))
        if(isFinite(x) && isFinite(y) && y!=0)
        return "Wynik działania "+ txt +" to "+(x/y)
        else
        return "Błędne dane"
    }
    else{
        t = txt.indexOf("%")
        x = parseFloat(txt.slice(0,t)) 
        y = parseFloat(txt.slice(t+1))
        if(isFinite(x) && isFinite(y) && y!=0)
        return "Wynik działania "+ txt +" to "+(x%y)
        else
        return "Błędne dane"
    }
}

let score = document.querySelector("#score")
let playerpkt = 0
let comppkt = 0
function game(txt){

    let rock = ["kamień", "kamien", "Kamień", "Kamien"]
    let paper = ["Papier", "papier"]
    let scissors = ["Nożyce", "Nozyce", "nozyce", "nożyce", "nozyczki", "nożyczki", "Nozyczki", "Nożyczki"]


    if(txt.includes("stop") || txt.includes("koniec")){
        if(playerpkt>comppkt)
        ans.innerHTML = "Wygrałeś wynikiem "+playerpkt+" - "+comppkt+". Chcesz jeszcze o coś spytać?"
        else if(playerpkt<comppkt)
        ans.innerHTML = "Przegrałeś wynikiem "+playerpkt+" - "+comppkt+". Chcesz jeszcze o coś spytać?"
        else
        ans.innerHTML = "Gra zakończyła się remisem "+playerpkt+" - "+comppkt+". Chcesz jeszcze o coś spytać?"

        score.innerText = ""
        comppkt = 0
        playerpkt = 0
        g=false
    }
    else if(rock.includes(txt) || paper.includes(txt) || scissors.includes(txt) ){

        if(rock.includes(txt))
            txt="Kamień"
        else if(paper.includes(txt))
            txt="Kamień"
        else   
            txt="Nożyce"

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        let comp = getRandomInt(1,4)
        if(comp==1)
            comp="Kamień"
        else if(comp==2)
            comp="Papier"
        else
            comp="Nożyce"
        
        if(txt==comp){
            ans.innerHTML = comp+" - Remis"
        }
        else if(txt=="Kamień" && comp=="Nożyce"){
            ans.innerHTML = comp+" - Punkt dla ciebie"
            playerpkt++
        }    
        else if(txt=="Kamień" && comp=="Papier"){
            ans.innerHTML = comp+" - Punkt dla mnie"
            comppkt++
        } 
        else if(txt=="Papier" && comp=="Nożyce"){
            ans.innerHTML = comp+" - Punkt dla mnie"
            comppkt++
        }    
        else if(txt=="Papier" && comp=="Kamień"){
            ans.innerHTML = comp+" - Punkt dla ciebie"
            playerpkt++
        } 
        else if(txt=="Nożyce" && comp=="Papier"){
            ans.innerHTML = comp+" - Punkt dla ciebie"
            playerpkt++
        }    
        else if(txt=="Nożyce" && comp=="Kamień"){
            ans.innerHTML = comp+" - Punkt dla mnie"
            comppkt++
        } 
        score.innerHTML = "Ty "+playerpkt+" - "+comppkt+" Octi"
    }
    else
    ans.innerHTML = "Zła wartosc :("
}

function answer (txt){
    //proste pytania + czas
    let n = -1
    for(i=0; i<questions.length; i++){
        for(j=0; j<10; j++){
            if(txt.includes(questions[i][j]))
                n = i
        }
    }
    if(n>=0){
    ans.innerHTML = answers[n]
    }//funkcje matematyczne
    else if(txt.includes("+") || txt.includes("-") || txt.includes("*") || txt.includes("/") || txt.includes("%") || txt.includes("sqrt")){
        ans.innerHTML = count(txt)
    }//kamien papier nozyce
    else if(game_q.includes(txt)){
        ans.innerHTML = "Dobrze zagrajmy - jak bedziesz gotowy wpisz Kamień, Papier lub Nożyce"
        score.innerHTML = "Ty "+playerpkt+" - "+comppkt+" Octi"
        g = true
    }//else
    else if(txt==""){
        ans.innerHTML = "Napisz coś"
    }
    else{
        ans.innerHTML = "Nie rozumiem"
    }
}

function enter(){
    let txt=inp1.value
    if(txt.includes("\n")){
        if(g==true){
            txt = txt.slice(0,-1)
            inp1.value = ""
            game(txt)
        }
        else{        
            txt = txt.slice(0,-1)
            inp1.value = ""
            answer(txt)
        }
    }
}

btn.addEventListener("click", function(){
    let txt=inp1.value
    if(g==true){
        inp1.value = ""
        game(txt)
    }
    else{        
        inp1.value = ""
        answer(txt)
    }   
})