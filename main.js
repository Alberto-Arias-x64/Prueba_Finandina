let Team = false
const Change = () => {

    const Change_To_Red = () => {
        // Change Text button
        const Text = document.querySelector('button')
        Text.innerHTML = 'CAMBIAR A CREDITO'

        // Change Color Schema
        const Root_Element = document.querySelector(':root')
        Root_Element.style.setProperty('--principal_gradient_90', 'linear-gradient(90deg, #A703F6, #F7276C )')
        Root_Element.style.setProperty('--principal_gradient_45', 'linear-gradient(135deg, #A703F6, #F7276C )')
        Root_Element.style.setProperty('--principal_color', '#A703F6')

        // Change Images
        const Image = document.querySelector('#phone_img')
        Image.src = './assets/Top/Phone_Red.svg'

        // Hide Elements
        const Team_Blue = document.querySelectorAll('.team_blue')
        const Node_List_Blue = Array.from(Team_Blue)
        Node_List_Blue.map(element => {
            element.classList.add('hide')
        })

        // Show Elements
        const Team_Red = document.querySelectorAll('.team_red')
        const Node_List_Red = Array.from(Team_Red)
        Node_List_Red.map(element => {
            element.classList.remove('hide')
        })

        //Change Elements
        const Dynamic_Title = document.querySelector('#dynamic_title')
        Dynamic_Title.innerHTML = 'Compra de cartera'
    }

    const Change_To_Blue = () => {
        // Change Text button
        const Text = document.querySelector('button')
        Text.innerHTML = 'CAMBIAR A TARJETA'

        // Change Color Schema
        const Root_Element = document.querySelector(':root')
        Root_Element.style.setProperty('--principal_gradient_90', 'linear-gradient(90deg, #048FF7, #07FAF2 )')
        Root_Element.style.setProperty('--principal_gradient_45', 'linear-gradient(135deg, #048FF7, #07FAF2)')
        Root_Element.style.setProperty('--principal_color', '#07FAF2')

        // Change Images
        const Image = document.querySelector('#phone_img')
        Image.src = './assets/Top/Phone_Blue.svg'

        // Hide Elements
        const Team_Blue = document.querySelectorAll('.team_red')
        const Node_List_Blue = Array.from(Team_Blue)
        Node_List_Blue.map(element => {
            element.classList.add('hide')
        })

        // Show Elements
        const Team_Red = document.querySelectorAll('.team_blue')
        const Node_List_Red = Array.from(Team_Red)
        Node_List_Red.map(element => {
            element.classList.remove('hide')
        })

        //Change Elements
        const Dynamic_Title = document.querySelector('#dynamic_title')
        Dynamic_Title.innerHTML = 'La cuenta a la que te enviaremos el dinero es*'
    }

    Team ? Change_To_Blue() : Change_To_Red()
    Team = !Team
}

function Visit() {
    window.open("https://www.bancofinandina.com/", '_blank');        
}

console.warn('%c⚠️!NO TRATE DE PEGAR NADA AQUI!⚠️', 'color: yellow; font-size: 34px; font-weight: 800')
console.info('%cCualquier intento de modificación🤨 conllevará consecuencias legales👮 con el banco ', 'color: red; font-size: 28px;')
console.info('%cEsta pieza de código fue escrita por X64🃏', 'color: #22c22e; font-size: 22px;')