let you = document.querySelector(".you")
let bot = document.querySelector(".bot")
let nichya = document.querySelector(".nichya")
let input = document.querySelector(".input")
let again = document.querySelector(".again")
let r = document.querySelector(".r")

// Counts:
let cbot = document.querySelector(".Cbot")
let cyou = document.querySelector(".Cyou")
cbot.innerHTML = localStorage.getItem("bla2")
cyou.innerHTML = localStorage.getItem("bla1")
let refresh = document.querySelector(".refresh")
refresh.addEventListener("click", () => {
    localStorage.clear()
    cbot.innerHTML = "0"
    cyou.innerHTML = "0"
    input.value = ""
    r.innerHTML = "bot: "
    you.innerHTML = "you: "
    bot.innerHTML = "bot: "
    nichya.innerHTML = "nichya: "

})

if(cbot.innerHTML === "" && cyou.innerHTML === ""){
    cbot.innerHTML = "0"
    cyou.innerHTML = "0"
}
// peremenniy lost & winner
let youwin = you.innerHTML = "you: winner"
let youlost = you.innerHTML = "you: lost🙁"
let botwin = you.innerHTML = "bot: winner"
let botlost = you.innerHTML = "bot: lost🙁"
again.addEventListener("click", () => {
    input.value = ""
    r.innerHTML = "bot: "
    you.innerHTML = "you: "
    bot.innerHTML = "bot: "
    nichya.innerHTML = "nichya: "
})
r.innerHTML = "bot: "
you.innerHTML = "you: "
bot.innerHTML = "bot: "
nichya.innerHTML = "nichya: "
input.addEventListener("keypress", (e) => {
    if(e.key ==="Enter"){
        don_don_ziki()
    }
})
function don_don_ziki() {
    let arr = ["tosh", "qog'oz", "qaychi"];
    let random = arr[Math.floor(Math.random() * 3)]
    console.log(random);
    if(input.value === "tosh" && random ==="qog'oz" || 
    random === "qaychi" && input.value ==="qogo'z" ||
    random === "tosh" && input.value ==="qaychi"){
        r.innerHTML = `bot: ${random}`
        you.innerHTML = youlost
        bot.innerHTML = botwin
        localStorage.setItem("bla2", ++cbot.innerHTML)
        nichya.innerHTML = "nichya: "
    }else if(input.value === "qog'oz" && random ==="tosh" || 
    random === "qog'oz" && input.value ==="qaychi" ||
    random === "qaychi" && input.value ==="tosh"){
        r.innerHTML =  `bot: ${random}`;
        bot.innerHTML = botlost
        you.innerHTML = youwin
        localStorage.setItem("bla1", ++cyou.innerHTML)
        nichya.innerHTML = "nichya: "
    }
    else if(input.value === "qog'oz" && random ==="qog'oz" || 
    random === "qaychi" && input.value ==="qaychi" ||
    random === "tosh" && input.value ==="tosh"){
        r.innerHTML = `bot: ${random}`
        you.innerHTML = "you: "
        bot.innerHTML = "bot: "
        nichya.innerHTML = "nichya: Winner"
    }
}
