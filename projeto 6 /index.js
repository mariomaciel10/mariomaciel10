const prompt = require("prompt-sync")() 

let num = 1
let days = parseInt(prompt(`Quantos dias serão registrados? `))
let producao = []

while (num <= days) {
    let parts = parseInt(prompt(`Quantas peças foram produzidas no dia ${num}? `))
    producao.push(parts)
    num++
}

let total = 0
for (let i = 0; i <producao.length; i++) {
    total += producao[i]
}

let media = total / producao.length

let maior =producao[0]
let menor = producao[0]
for (let i = 1; i < producao.length; i++) {
    if (producao[i] > maior) maior = producao[i]
    if (producao[i] < menor) menor = producao[i]
}

let crescente = [...producao].sort((a,b) => a - b)
let decrescente = [...producao].sort((a,b) => b - a)

console.log (`--- RELATÓRIO DE PRODUÇÃO ---
Produções registradas: ${producao.join(", ")}
Total produzido: ${total}
Média diária: ${media.toFixed(2)}
Maior produção: ${maior}
Menor produção: ${menor}
Ordem crescente: ${crescente.join(", ")}
Ordem decrescente: ${decrescente.join(", ")}
`)

let metadeDoMaior = maior / 2

if (media >= metadeDoMaior) {
    console.log("Produção estável!")
} else {
    console.log("Produção abaixo do ideal.")
}
