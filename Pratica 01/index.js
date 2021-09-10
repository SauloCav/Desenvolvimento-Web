
let insere = window.document.getElementById('inserir')
let limpa = window.document.getElementById('limpa')

insere.addEventListener('click', function(){

    let imoveisConteiner = window.document.getElementById('imoveisConteiner')
    let titulo = window.document.getElementById('titulo')
    let descricao = window.document.getElementById('descricao')
    let quartos = window.document.getElementById('quartos')
    let vagas_garagem = window.document.getElementById('vagas_garagem')
    let area_terreno = window.document.getElementById('area_terreno')
    let area_construida = window.document.getElementById('area_construida')
    let localidade = window.document.getElementById('localidade')
    let preco = window.document.getElementById('preco')
    let imagem = window.document.getElementById('imagem')

    var ptitulo = window.document.createElement('h2')
    ptitulo.innerText = 'Título: ' + titulo.value
    imoveisConteiner.appendChild(ptitulo)

    var pdescricao = window.document.createElement('h2')
    pdescricao.innerText = 'Descrição: ' + descricao.value
    imoveisConteiner.appendChild(pdescricao)

    var pquartos = window.document.createElement('h2')
    pquartos.innerText = 'Quartos: ' + quartos.value
    imoveisConteiner.appendChild(pquartos)

    var pvagas_garagem = window.document.createElement('h2')
    pvagas_garagem.innerText = 'Vagas na Garagem: ' + vagas_garagem.value
    imoveisConteiner.appendChild(pvagas_garagem)

    var parea_terreno = window.document.createElement('h2')
    parea_terreno.innerText = 'Área Terreno: ' + area_terreno.value + 'm'
    imoveisConteiner.appendChild(parea_terreno)

    var parea_construida = window.document.createElement('h2')
    parea_construida.innerText = 'Área Construída: ' + area_construida.value + 'm'
    imoveisConteiner.appendChild(parea_construida)

    var plocalidade = window.document.createElement('h2')
    plocalidade.innerText = 'Localidade: ' + localidade.value
    imoveisConteiner.appendChild(plocalidade)

    var ppreco = window.document.createElement('h2')
    ppreco.innerText = 'Preço: ' + preco.value + ' R$'
    imoveisConteiner.appendChild(ppreco)

    var img = window.document.createElement('img')
    img.src = imagem.value
    imoveisConteiner.appendChild(img)

    var barra = window.document.createElement('hr')
    barra.innerText = ''
    imoveisConteiner.appendChild(barra)

    limpar_formulario()

})

limpa.addEventListener('click', limpar_formulario)

function limpar_formulario(){

    window.document.getElementById('titulo').value = null
    window.document.getElementById('descricao').value = null
    window.document.getElementById('quartos').value = null
    window.document.getElementById('vagas_garagem').value = null
    window.document.getElementById('area_terreno').value = null
    window.document.getElementById('area_construida').value = null
    window.document.getElementById('localidade').value = null
    window.document.getElementById('preco').value = null
    window.document.getElementById('imagem').value = null
    
}
