const botao = document.querySelector('#btnDados')
const form = document.querySelector('form')

botao.addEventListener('click', () => {
    const campos = []
        const bikes = document.querySelectorAll('.bike')
        console.log(bikes);


        const numeros = []
        bikes.forEach(bike => {

            

            const valorDiaria = Number(bike.querySelector('.diaria').textContent)
            const seguro = Number(bike.querySelector('.seguro').textContent)
            const diasLocados = Number(bike.querySelector('.dias').textContent)
            const locacao = (valorDiaria * diasLocados) + seguro
            
            bike.querySelector('.valor').textContent = parseInt(locacao)

            numeros.push(locacao)

        })

        const maior = Array.max = function(array) {
            return Math.max.apply(Math, array);
        };
        console.log(Array.max(numeros))

        
        
        
    

    


})