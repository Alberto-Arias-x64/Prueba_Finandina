const Change = () => {
    // Change Text button
    const Text = document.querySelector('button')
    Text.innerHTML='CAMBIAR A CREDITO'

    // Change Color Schema
    const Root_Element = document.querySelector(':root')
    Root_Element.style.setProperty('--principal_gradient_90', 'linear-gradient(90deg, #F7276C, #A703F6)')
    Root_Element.style.setProperty('--principal_gradient_45', 'linear-gradient(135deg, #F7276C, #A703F6)')
    Root_Element.style.setProperty('--principal_color', '#A703F6')

    // Change Images
    const Image = document.querySelector('#phone_img')
    Image.src = './assets/Top/Phone_Red.svg'

    // Hide Elements
    const Team_Blue = document.querySelectorAll('.team_blue')
    const Node_List_Blue = Array.from(Team_Blue)
    Node_List_Blue.map(element => {
        console.log(element)
        element.classList.add('hide')
    })

    // Show Elements
    const Team_Red = document.querySelectorAll('.team_red')
    const Node_List_Red = Array.from(Team_Red)
    Node_List_Red.map(element => {
        console.log(element)
        element.classList.remove('hide')
    })

}