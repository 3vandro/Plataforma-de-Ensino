const cursos = [
    {
    id: "crs0001",
    nome: "Introdução a Gastronomia",
    preco: 39.90,
    imagem: "Introdução a Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0002",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0003",
    nome: "Mestre Churrasqueiro",
    preco: 39.90,
    imagem: "Churrasco.jpg",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0004",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0005",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0006",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0007",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0008",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0009",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0010",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0011",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0012",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0013",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0014",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0015",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
},
{
    id: "crs0016",
    nome: "Introdução a Gastronomia 2",
    preco: 39.90,
    imagem: "Introdução-a-Gastronomia.png",
    categoria: "Gastronomia",
    descricao: "Inicie a sua jornada na gastronomia com este maravilhoso curso.",
}
]

let galeriaDeCursos = document.createElement('div');
galeriaDeCursos.setAttribute('id','galeria-de-cursos');
document.body.appendChild(galeriaDeCursos);

for(i=0; i<cursos.length; i++){
    let divCurso = document.createElement('div');
    divCurso.setAttribute('id',cursos[i].id);


    let nomeCurso = document.createElement('h3');
    nomeCurso.innerText = cursos[i].nome;
    divCurso.appendChild(nomeCurso)

    let precoCurso = document.createElement('p');
    precoCurso.innerText = `R$ ${cursos[i].preco}`;
    divCurso.appendChild(precoCurso);

    let imagemCurso = document.createElement('img')
    imagemCurso.innerHTML = `<img src="img/${cursos[i].imagem}">`;
    divCurso.appendChild(imagemCurso);

    let descricaoCurso = document.createElement('p');
    descricaoCurso.innerText = cursos[i].descricao;
    divCurso.appendChild(descricaoCurso);

    let categoriaCurso = document.createElement ('p');
    categoriaCurso.innerText = cursos[i].categoria;
    divCurso.appendChild(categoriaCurso);

    galeriaDeCursos.appendChild(divCurso);
}

console.log("estou funcionando")

console.log(galeriaDeCursos)



