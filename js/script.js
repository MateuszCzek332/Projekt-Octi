let btn = document.querySelector("#submit")
let inp1 = document.querySelector("#input1")
let ans = document.querySelector("#answer")
let g = false
//tablice z pytaniami:
let name = ["imie",
      "Jak sie nazywasz", 
      "Kim jestes", 
      "Czyja maskotka jestes", 
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
let fav_city = ["Podaj miasto",
            "podaj miasto",
            "Podaj ulubione miasto", 
            "Podaj swoje ulubione miasto", 
            "Podaj swoja ulubiona miejscowosc", 
            "Jakie jest twoje ulubione miasto", 
            ]
let fav_eat = ["Podaj potrawe",
            "podaj potrawe",
            "Podaj ulubiona potrawe", 
            "Podaj swoje ulubione jedzenie", 
            "Jaka jest twoja ulubiona potrawa", 
            "Jakie jest twoje ulubione jedzenie",
            ]
let fav_aml = ["Podaj zwierze",
            "podaj zwierze",
            "Podaj ulubione zwierzatko", 
            "Podaj swoje ulubione zwierzatko", 
            "Jakie jest twoje ulubione zwierze", 
            "Jakie jest twoje ulubione zwierzatko",
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
let game_q = ["gra",
      "kamien papier nozyce", 
      "kamien, papier, nozyce", 
      "kamień, papier, nożyce", 
            ]

let week = ["Niedziela ",
            "Poniedziałek ",
            "Wtorek ",
            "Środa ",
            "Czwartek ",
            "Piątek ",
            "Sobota ",
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

    if(txt=="stop" || txt=="koniec"){
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
    else if(txt=="Kamień" || txt=="Papier" || txt=="Nożyce" ){

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
        ans.innerHTML = ans.innerHTML
        score.innerHTML = "Ty "+playerpkt+" - "+comppkt+" Octi"
    }
    else
    ans.innerHTML = "Zła wartosc :("
}

function answer (txt){
    //proste pytania
    if(name.includes(txt)){
        ans.innerHTML = "Jestem Octi z Flying Octopus"
    }
    else if(fav_col.includes(txt)){
        ans.innerHTML = "Uwielbiam fioletowy"
    }
    else if(fav_cnt.includes(txt)){
        ans.innerHTML = "Zawsze dobrze wspominam Hiszpanie"
    }
    else if(fav_city.includes(txt)){
        ans.innerHTML = "Zdecydowanie Nowy Jork"
    }
    else if(fav_eat.includes(txt)){
        ans.innerHTML = "Nie mogę powiedzieć nic innego niż pierogi"
    }
    else if(fav_aml.includes(txt)){
        ans.innerHTML = "Popatrz na mnie, czy ty sobie jaja robisz?"
    }// czas
    else if(date_q.includes(txt)){
        data = new Date()
        ans.innerHTML = week[data.getDay()] + data.getDate()+"."+ (data.getUTCMonth()+1)+"."+ data.getFullYear()
    }
    else if(time_q.includes(txt)){
        data = new Date()
        ans.innerHTML = "Jest " + data.toLocaleString().slice(-8, -3)+" czasu polskiego"
    }//funkcje matematyczne
    else if(txt.includes("+") || txt.includes("-") || txt.includes("*") || txt.includes("/") || txt.includes("%")){
        ans.innerHTML = count(txt)
    }
    else if(txt.includes("sqrt")){
        x= parseFloat(txt.slice(4))
        ans.innerHTML = "Pierwiastek z "+x+" wynosi: "+Math.sqrt(x).toFixed(3)
    }//kamien papier nozyce
    else if(game_q.includes(txt)){
        ans.innerHTML = "Dobrze zagrajmy - jak bedziesz gotowy wpisz Kamień, Papier lub Nożyce"
        score.innerHTML = "Ty "+playerpkt+" - "+comppkt+" Octi"
        g = true
    }//else
    else if(txt=="ale es zadanko"){
        ans.innerHTML = "Jeszcze jak"
    }
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