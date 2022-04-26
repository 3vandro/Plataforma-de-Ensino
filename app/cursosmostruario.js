const cursos = [
    {
        id: "crs0001",
        nome: "Introdução a Gastronomia",
        preco: 19.99,
        imagem: "Introdução a Gastronomia.png",
        categoria: "Gastronomia",
        descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
        quantidade: 0,
    },
    {
        id: "crs0002",
        nome: "Introdução a Gastronomia 2",
        preco: 19.99,
        imagem: "Introdução-a-Gastronomia.png",
        categoria: "Gastronomia",
        descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
        quantidade: 0,
    },
    {
        id: "crs0003",
        nome: "Mestre Churrasqueiro",
        preco: 19.99,
        imagem: "Mestre Churrasqueiro.jpg",
        categoria: "Gastronomia",
        descricao: "Aprenda a preparar o melhor Churrasco.",
        quantidade: 0,
    },
    {
        id: "crs0004",
        nome: "Frutos do Mar",
        preco: 29.99,
        imagem: "Frutos do Mar.jpg",
        categoria: "Gastronomia",
        descricao: "Descubra a essência de preparar excelentes pratos com frutos do mar.",
        quantidade: 0,
    },
    {
        id: "crs0005",
        nome: "Brigadeiro Gourmet",
        preco: 19.99,
        imagem: "Brigadeiro Gourmet.jpg",
        categoria: "Gastronomia",
        descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
        quantidade: 0,
    },
    {
        id: "crs0006",
        nome: "Microsoft Office",
        preco: 39.99,
        imagem: "Microsoft Office.jpg",
        categoria: "Tecnologia",
        descricao: "Aprenda a ferramenta mais utilizada no mercado de trabalho",
        quantidade: 0,
    },
    {
        id: "crs0007",
        nome: "Guia da WEB",
        preco: 9.99,
        imagem: "Guia da WEB.jpg",
        categoria: "Tecnologia",
        descricao: "Aprenda a navegar com segurança na WEB.",
        quantidade: 0,
    },
    {
        id: "crs0008",
        nome: "Curso Básico de HTML5",
        preco: 39.99,
        imagem: "Curso Básico de HTML5.png",
        categoria: "Tecnologia",
        descricao: "Curso Básico de HTML5.",
        quantidade: 0,
    },
    {
        id: "crs0009",
        nome: "Curso Básico de CSS3",
        preco: 39.99,
        imagem: "Curso Básico de CSS3.png",
        categoria: "Tecnologia",
        descricao: "Curso Básico de CSS3.",
        quantidade: 0,
    },
    {
        id: "crs0010",
        nome: "Curso Básico de Javascript",
        preco: 39.99,
        imagem: "Curso Básico de Javascript.png",
        categoria: "Tecnologia",
        descricao: "Curso Básico de Javascript.",
        quantidade: 0,
    },
    {
        id: "crs0011",
        nome: "Foco e Produtividade",
        preco: 25.99,
        imagem: "Foco e Produtividade.png",
        categoria: "Desenvolvimento Pessoal",
        descricao: "Não sofra com a falta de foco e produtividade.",
        quantidade: 0,
    },
    {
        id: "crs0012",
        nome: "Memorização",
        preco: 19.99,
        imagem: "Memorização.png",
        categoria: "Desenvolvimento Pessoal",
        descricao: "Aprenda a utilizar muito mais do seu cerebro.",
        quantidade: 0,
    },
    {
        id: "crs0013",
        nome: "Coaching",
        preco: 74.99,
        imagem: "Coaching.png",
        categoria: "Desenvolvimento Pessoal",
        descricao: "Aprenda técnicas baseada na Programação Neurolinguística.",
        quantidade: 0,
    },
    {
        id: "crs0014",
        nome: "Inteligência Emocional",
        preco: 19.99,
        imagem: "Inteligência Emocional.png",
        categoria: "Desenvolvimento Pessoal",
        descricao: "Aprenda a controlar as emoções e utilizá-las a seu favor.",
        quantidade: 0,
    },
    {
        id: "crs0015",
        nome: "Como Falar Bem em Público",
        preco: 39.99,
        imagem: "Como Falar Bem em Público.png",
        categoria: "Desenvolvimento Pessoal",
        descricao: "Dê um fim na timidez e faça excelentes apresentações.",
        quantidade: 0,
    },
    {
        id: "crs0016",
        nome: "Gestão de Projetos",
        preco: 39.99,
        imagem: "Gestão de Projetos.png",
        categoria: "Negócios",
        descricao: "Gerenciamento de Projetos baseado no PMBoK.",
        quantidade: 0,
    },
    { 
        id: "crs0017",
        nome: "Six Sigma",
        preco: 44.99,
        imagem: "Six Sigma.png",
        categoria: "Negócios",
        descricao: "Seja especialista na melhoria de processos.",
        quantidade: 0,
    },
    {
        id: "crs0018",
        nome: "Gestão de Vendas",
        preco: 44.99,
        imagem: "Gestão de Vendas.png",
        categoria: "Negócios",
        descricao: "Elabore eficientes planos de vendas.",
        quantidade: 0,
    },
    {
        id: "crs0019",
        nome: "LGPD - Lei Geral de Proteção de Dados",
        preco: 59.99,
        imagem: "LGPD - Lei Geral de Proteção de Dados.png",
        categoria: "Negócios",
        descricao: "LGPD - Lei Geral de Proteção de Dados.",
        quantidade: 0,
    },
    {
        id: "crs0020",
        nome: "Empreendedorismo",
        preco: 69.99,
        imagem: "Gestão de Projetos.png",
        categoria: "Negócios",
        descricao: "Princípios básicos e as melhores habilidades para empreender.",
        quantidade: 0,
    }
]


inicializarLoja = () => {
    var containerLoja = document.getElementById('loja');
    cursos.map((val)=>{
        containerLoja.innerHTML+= `

    <div class="curso-single">
        <img src="img/cursos/`+val.nome+`.png"/>
        <p key="`+val.id+`"<p/>
        <p>R$ `+val.preco+`</p>
        <a key="`+val.nome+`" href="login.html">`+val.nome+`<a/>
        <p>`+val.categoria+`</p>
        <a class = "linkqtd" key="`+val.quantidade+`" href="#">Comprar<a/>

     </div>
     `;
    })
}


inicializarLoja();




// esse rodou:

atualizarMeusCursos = ({key}) => {
console.log(cursos);

    var containerMeusCursos = document.getElementById('meuscursos');
    containerMeusCursos.innerHTML = "";
    cursos.map((val)=> {
        if(val.quantidade > 0) {
        containerMeusCursos.innerHTML+= `
        <img src="img/cursos/`+val.nome+`.png"/><br>
        <a key="`+val.nome+`" href="`+val.nome+`.html">`+val.nome+`<a/>
     `;
        }
    });
}



// var links = document.getElementsByTagName('a');
var links = document.getElementsByClassName('linkqtd');
console.log(links)


for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let key = this.getAttribute("key");
        cursos[key].quantidade++;
        atualizarMeusCursos(key);
        return false;
        console.log(key)
    });
}

atualizarMeusCursos()



