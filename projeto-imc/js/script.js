let res = document.createElement('p')
function calcular(){
   
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let div = document.getElementById('res')
    console.log(typeof peso, typeof altura)
    console.log(peso.length, altura.length)

    
    if(peso.length == 0 || altura.length == 0){
        imc = 'Informe os numeros corretamente'
    }else{
        let imc = peso / altura**2
    }

    res.innerHTML = imc
    res.style.background = 'gray'
    res.style.fontSize = '1.2em'
    res.style.display = 'block'
    res.style.fontFamily = 'Arial'
    div.appendChild(res)


    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
}