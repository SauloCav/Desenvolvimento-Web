
function insere_form(tit, des, qua, vag, ter, con, loc, pre, ima){

    let imoveisConteiner = window.document.getElementById('imoveisConteiner')

    var ptitulo = window.document.createElement('h5')
    ptitulo.innerText = 'Título: ' + tit
    imoveisConteiner.appendChild(ptitulo)

    var pdescricao = window.document.createElement('h5')
    pdescricao.innerText = 'Descrição: ' + des
    imoveisConteiner.appendChild(pdescricao)

    var pquartos = window.document.createElement('h5')
    pquartos.innerText = 'Quartos: ' + qua
    imoveisConteiner.appendChild(pquartos)

    var pvagas_garagem = window.document.createElement('h5')
    pvagas_garagem.innerText = 'Vagas na Garagem: ' + vag
    imoveisConteiner.appendChild(pvagas_garagem)

    var parea_terreno = window.document.createElement('h5')
    parea_terreno.innerText = 'Área Terreno: ' + ter + 'm'
    imoveisConteiner.appendChild(parea_terreno)

    var parea_construida = window.document.createElement('h5')
    parea_construida.innerText = 'Área Construída: ' + con + 'm'
    imoveisConteiner.appendChild(parea_construida)

    var plocalidade = window.document.createElement('h5')
    plocalidade.innerText = 'Localidade: ' + loc
    imoveisConteiner.appendChild(plocalidade)

    var ppreco = window.document.createElement('h5')
    ppreco.innerText = 'Preço: ' + pre + ' R$'
    imoveisConteiner.appendChild(ppreco)

    var img = window.document.createElement('img')
    img.src = ima
    imoveisConteiner.appendChild(img)

    var barra = window.document.createElement('hr')
    barra.innerText = ''
    imoveisConteiner.appendChild(barra)

}

function clean_form(){

    document.getElementById('imoveisConteiner').innerHTML = "";

}

const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        forms: [],
        titulo: null,
        descricao: null,
        quartos: null,
        vagas_garagem: null,
        area_terreno: null,
        area_construida: null,
        localidade: null,
        preco: null,
        imagem: null
    },
    mounted(){
        if(localStorage.forms){
            this.forms = JSON.parse(localStorage.forms)
        }
    },
    watch: {
        forms: {
            handler(newForms){
                localStorage.forms = JSON.stringify(newForms)
            },
            deep: true
        }
    },
    methods:{
        checkForm: function (e) {
        if (this.titulo && this.descricao && this.quartos && this.vagas_garagem && this.area_terreno && this.       area_construida && this.localidade && this.preco && this.imagem) {    
            insere_form(this.titulo, this.descricao, this.quartos, this.vagas_garagem, this.area_terreno, this.area_construida, this.localidade, this.preco, this.imagem)
        }
    
        this.errors = []
    
        if (!this.titulo) {
            this.errors.push('titulo')
        }
        if (!this.descricao) {
            this.errors.push('descricao')
        }
        if (this.quartos <= 0) {
            this.errors.push('quartos')
        }
        if (this.vagas_garagem <= 0) {
            this.errors.push('vagas_garagem')
        }
        if (this.area_terreno <= 0) {
            this.errors.push('area_terreno')
        }
        if (this.area_construida <= 0) {
            this.errors.push('area_construida')
        }
        if (!this.localidade) {
            this.errors.push('localidade')
        }
        if (this.preco <= 0) {
            this.errors.push('preco')
        }
        if (!this.imagem) {
            this.errors.push('imagem')
        }

        if (this.titulo && this.descricao && this.quartos && this.vagas_garagem && this.area_terreno && this.       area_construida && this.localidade && this.preco && this.imagem) {

            const newForm = {titulo: this.titulo,  descricao: this.descricao, quartos: this.quartos, vagas_garagem: this.vagas_garagem, area_terreno: this.area_terreno, area_construida: this.area_construida, localidade: this.localidade, preco: this.preco, imagem: this.imagem}

            this.forms.push(newForm)

            this.titulo = ""
            this.descricao = ""
            this.quartos = ""
            this.vagas_garagem = ""
            this.area_terreno = ""
            this.area_construida = ""
            this.localidade = ""
            this.preco = ""
            this.imagem = ""
            
        }

        e.preventDefault()
        },

        resetForm: function (e) { 

            this.errors = []

            this.titulo = ""
            this.descricao = ""
            this.quartos = ""
            this.vagas_garagem = ""
            this.area_terreno = ""
            this.area_construida = ""
            this.localidade = ""
            this.preco = ""
            this.imagem = ""

        e.preventDefault()
        },

        carregaForm: function (e) { 

            clean_form()

            var tit = [], des = [], qua = [], vag = [], ter = [], con = [], loc = [], pre = [], ima = []
            var i = 0

            var arr = JSON.parse(localStorage.getItem('forms'))
            arr.forEach(function(obj){
                tit[i] = (obj.titulo)
                des[i] = (obj.descricao)
                qua[i] = (obj.quartos)
                vag[i] = (obj.vagas_garagem)
                ter[i] = (obj.area_terreno)
                con[i] = (obj.area_construida)
                loc[i] = (obj.localidade)
                pre[i] = (obj.preco)
                ima[i] = (obj.imagem)
                i = i + 1
            })

            for (var j = 0; j < i; j++) {
                this.titulo = (tit[j])
                this.descricao = (des[j])
                this.quartos = (qua[j])
                this.vagas_garagem = (vag[j])
                this.area_terreno = (ter[j])
                this.area_construida = (con[j])
                this.localidade = (loc[j])
                this.preco = (pre[j])
                this.imagem = (ima[j])
                if (this.titulo && this.descricao && this.quartos && this.vagas_garagem && this.area_terreno && this.       area_construida && this.localidade && this.preco && this.imagem) {
                    insere_form(this.titulo, this.descricao, this.quartos, this.vagas_garagem, this.area_terreno, this.area_construida, this.localidade, this.preco, this.imagem)
                }
            }

            this.errors = []

            this.titulo = ""
            this.descricao = ""
            this.quartos = ""
            this.vagas_garagem = ""
            this.area_terreno = ""
            this.area_construida = ""
            this.localidade = ""
            this.preco = ""
            this.imagem = ""

        e.preventDefault()
        },

    }
})
