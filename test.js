const pi = 3.14
const yaricap = process.argv[2]

function alanHesapla(yaricap){
    const alan = pi * yaricap * yaricap
    console.log(`Dairenin alanı : ${alan}`)
}

alanHesapla(yaricap)