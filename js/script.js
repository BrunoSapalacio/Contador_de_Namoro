function namoro(){
    var ini = document.querySelector('input[type="date"]')
    var res = document.querySelector("div#res")
    var com = document.querySelector("div#com")
    const hj = new Date() // Data de hoje
    const dt = new Date(document.querySelector('input[type="date"]').value) // Outra data no passado
    const diff = Math.abs(hj.getTime() - dt.getTime()) // Subtrai uma data pela outra
    console.log(diff)
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)) // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    let meses = days / 30
    let ano = days / 366
    console.log(parseInt(meses))
    console.log(parseInt(ano))
    console.log(ano)
    var meses2 = parseInt(ano) * 12
    var meses3 = meses - meses2
    console.log(meses3)
    if (days > 30) {
        com.style.display = 'block'
    }
    if (ini.value.length == 0) {
        window.alert('[ERRO]: Digite ou selecione uma data!')
    }
    else {
        res.innerHTML = `Vocês estão juntos por ${days} dias. \u{1F49E}`
        if (days < 30) {
            com.style.display = 'none'
            com.innerHTML = ''
        }
        else if (days < 60) {
            com.innerHTML = `Parabéns, vocês completaram ${parseInt(meses)} mês juntos! &#013;`  
        }
        else if (days < 365) {
            com.innerHTML = `Parabéns, vocês completaram ${parseInt(meses)} meses juntos! &#013;`
        }
        else if (days < 730 & meses3 < 2) {
            com.innerHTML = `Parabéns, vocês completaram ${parseInt(ano)} ano e ${parseInt(meses3)} mês juntos! &#013;`
        }
        else if (days < 730 & meses3 > 1) {
            com.innerHTML = `Parabéns, vocês completaram ${parseInt(ano)} ano e ${parseInt(meses3)} meses juntos! &#013;`
        }
        else if (days >= 730 & meses3 < 2) {
            com.innerHTML = `Parabéns, vocês completaram ${parseInt(ano)} anos e ${parseInt(meses3)} mês juntos! &#013;`
        }
        else if (days >= 730 & meses3 > 1) {
            com.innerHTML = `Parabéns, vocês completaram ${parseInt(ano)} anos e ${parseInt(meses3)} meses juntos! &#013;`
        }
    }
    if(days > 30) {
        com.innerHTML += `\u{1F3C6}`
    }
}