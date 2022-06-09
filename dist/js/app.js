// import { Negociacao } from './models/negociacao.js';
// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao.volume)
import { NegociacaoController } from './controllers/negociacao-controller.js';
const negociacaoController = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    negociacaoController.adiciona();
});
