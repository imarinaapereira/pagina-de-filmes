const filmes = document.querySelector('.filmes');

const imgs = document.querySelectorAll('#imgs img');
const btn = document.querySelector('button')
const divGuardarModal=document.querySelector('#guardar-modal')
btn.addEventListener('click',()=>{
 divGuardarModal.style.display='flex'
})
imgs.forEach((img) => {
  const link = document.createElement('a');
  link.href = 'https://www.looke.com.br/flow';
  
  img.parentElement.insertBefore(link, img);
  img.style.width='100%'
  link.appendChild(img);
});

const fechar =document.querySelector('#x')
fechar.addEventListener('click',()=>{
  divGuardarModal.style.display='none'
})
const container = document.querySelector('#container')
const filmesEmFormatoDiferente = document.querySelector('#filmesFormatoDiferente')
const imgIcone = document.createElement('img')
const header=document.querySelector('.header')
header.style.zIndex='10'
imgIcone.src= './icons8-avançar-50.png'
imgIcone.style.width='4rem'
imgIcone.style.height='5rem'
const iconePassar= document.createElement('i')
const divIcone=document.createElement('div')
divIcone.style.width='4rem'
divIcone.style.height='5rem'
iconePassar.appendChild(imgIcone)
divIcone.appendChild(iconePassar)
iconePassar.style.position='absolute'
iconePassar.style.left='94.5%'
iconePassar.style.background='#00000081'
iconePassar.style.borderTopLeftRadius='10px';
iconePassar.style.borderBottomLeftRadius='10px';


iconePassar.style.display='flex'
imgIcone.style.justifyContent='flex-end'

const imgIcone2 = document.createElement('img')
imgIcone2.src= './voltar.png'
imgIcone2.style.width='4rem'
imgIcone2.style.height='5rem'
const iconeVoltar= document.createElement('i')
const divIcone2 = document.createElement('div')
divIcone2.style.width='10px'
divIcone2.style.height='10px'
iconeVoltar.appendChild(imgIcone2)
divIcone2.appendChild(iconeVoltar)
iconeVoltar.style.position='absolute'
iconeVoltar.style.left='0%'
iconeVoltar.style.top='150%'

iconeVoltar.style.background='#00000081'
iconeVoltar.style.borderTopRightRadius='10px';
iconeVoltar.style.borderBottomRightRadius='10px';
iconeVoltar.style.display='flex'
imgIcone2.style.justifyContent='flex-start'
const primeiraListaDeFilmes = [{
    id: 1,
    nome: 'Vingança a Sangue Frio',
    src: 'https://ottvsimg.ottvs.com.br/ban/led.065643/looke_1010_670.jpg',
    href:'https://www.looke.com.br/filmes/vinganca-a-sangue-frio'
  },
  {
    id: 2,
    nome: 'Cópias de Volta  a vida',
    src: 'https://ottvsimg.ottvs.com.br/ban/led.047057/looke_1010_670.jpg',
    href:'https://www.looke.com.br/filmes/copias-de-volta-a-vida',
  },
  {
    id: 3,
    nome: 'Gal gadot amor em jogo',
    src: 'https://ottvsimg.ottvs.com.br/ban/bet.064745/looke_1010_670.jpg',
    href:'https://www.looke.com.br/filmes/amor-em-jogo'
  },
  {
    id: 4,
    nome: 'Milgre Na Cela 7',
    src: 'https://ottvsimg.ottvs.com.br/ban/gmt.167272/looke_1010_670.jpg',
    href:'https://www.looke.com.br/filmes/milagre-na-cela-7',
  },
  {
    id: 5,
    nome: 'Namorados Para Sempre',
    src: 'https://ottvsimg.ottvs.com.br/ban/sf.023200/looke_1010_670.jpg',
    href:'https://www.looke.com.br/filmes/namorados-para-sempre'
  },
  {
    id: 6,
    nome: 'Meu Extraordinario Verão Com Tess',
    src: 'https://ottvsimg.ottvs.com.br/ban/pct.166937/looke_1010_670.jpg',
    href:'https://www.looke.com.br/filmes/meu-extraordinario-verao-com-tess'
  },
  {
    id: 7,
    nome: 'As Idades Do Amor ',
    src: 'https://ottvsimg.ottvs.com.br/ban/cal.045903/looke_1010_670.jpg',
    href:'https://www.looke.com.br/filmes/as-idades-do-amor'
  }

];
const idfilmes= document.querySelector('#filmes')

const img = document.createElement('img')
img.src= './icons8-avançar-50.png'
img.style.width='4rem'
img.style.height='5rem'
const Passar= document.createElement('i')
const div=document.createElement('div')
div.style.width='4rem'
div.style.height='5rem'
Passar.appendChild(img)
div.appendChild(Passar)
Passar.style.position='absolute'
Passar.style.left='94.5%'
Passar.style.background='#00000081'
Passar.style.borderTopLeftRadius='10px';
Passar.style.borderBottomLeftRadius='10px';


Passar.style.display='flex'
img.style.justifyContent='flex-end'

const img2 = document.createElement('img')
img2.src= './voltar.png'
img2.style.width='4rem'
img2.style.height='5rem'
const Voltar= document.createElement('i')
const div2 = document.createElement('div')
div2.style.width='10px'
div2.style.height='10px'
Voltar.appendChild(img2)
div2.appendChild(Voltar)
Voltar.style.position='absolute'
Voltar.style.left='0%'
Voltar.style.top='200%'

Voltar.style.background='#00000081'
Voltar.style.borderTopRightRadius='10px';
Voltar.style.borderBottomRightRadius='10px';
Voltar.style.display='flex'
img2.style.justifyContent='flex-start'
const segundaListaDeFilmes = [{
  id: 1,
  nome: 'Depois da tempetasde',
  src: 'https://ottvsimg.ottvs.com.br/ban/bps.191947/looke_1010_670.jpg',
  href:'https://www.looke.com.br/filmes/depois-da-tempestade'
},
{
  id: 2,
  nome: 'F1 Furious one',
  src: 'https://ottvsimg.ottvs.com.br/ban/crf.252797/looke_1010_670.jpg',
  href:'https://www.looke.com.br/filmes/f1-furious-one',
},
{
  id: 3,
  nome: 'Rainha de espadas',
  src: 'https://ottvsimg.ottvs.com.br/ban/epc.252421/looke_1010_670.jpg',
  href:'https://www.looke.com.br/filmes/rainha-de-espadas',
},
{
  id: 4,
  nome: 'Vice-versa',
  src: 'https://ottvsimg.ottvs.com.br/ban/itr.249101/looke_1010_670.jpg',
  href:'https://www.looke.com.br/filmes/vice-versa'
},
{
  id: 5,
  nome: 'Uma Noite Apavorante',
  src: 'https://ottvsimg.ottvs.com.br/ban/jgf.193145/looke_1010_670.jpg',
  href:'https://www.looke.com.br/filmes/uma-noite-apavorante'
},
{
  id: 6,
  nome: 'Kaleb O Cão Herói',
  src: 'https://ottvsimg.ottvs.com.br/ban/bfx.150297/looke_1010_670.jpg',
  href:'https://www.looke.com.br/filmes/kaleb-o-cao-heroi'
},
{
  id: 7,
  nome: 'Expedição  Ao Ártico',
  src: 'https://ottvsimg.ottvs.com.br/ban/mgg.215833/looke_1010_670.jpg',
  href:'https://www.looke.com.br/filmes/expedicao-ao-artico'
}
];





primeiraListaDeFilmes.map((item) => {
  const link = document.createElement('a');
  link.href = item.href;
  
  const img = document.createElement('img');
  img.src = item.src;
  img.style.width = '20rem';
  img.style.height = '11rem';
  img.style.padding = '0.3rem';
  
  
  img.addEventListener('mouseover', () => {
    
    img.style.transform = 'scale(1.1)';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(0.96)';
    img.position='relative'
    img.style.zIndex='0'
  });
link.target='blank'
  link.appendChild(img);
  return filmes.appendChild(link);
});

divIcone2.style.display='none'
filmes.appendChild(divIcone)
filmes.appendChild(divIcone2)

iconePassar.addEventListener('click', () => {
  divIcone2.style.display='flex'
  filmes.scrollLeft+=450
});
iconeVoltar.addEventListener('click', () => {
  filmes.scrollLeft-=450
});

segundaListaDeFilmes.map((item) => {
  const link = document.createElement('a');
  link.href = item.href;
  const img = document.createElement('img');
  img.src = item.src;
  img.style.width = '20rem';
  img.style.height = '11.5rem';
  img.style.padding = '0.3rem';

  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(0.96)';
    
  });
  link.target='blank'
  link.appendChild(img);
  return idfilmes.appendChild(link);
});
div2.style.display='none'
idfilmes.appendChild(div)
idfilmes.appendChild(div2)
Passar.addEventListener('click', () => {
  div2.style.display='flex'
  idfilmes.scrollLeft+=450
});
Voltar.addEventListener('click', () => {
  idfilmes.scrollLeft-=450
});






  const divSerie= document.createElement('div')
  const imgSerie = document.createElement('img')
  const iSerie=document.createElement('i')
  imgSerie.src= './icons8-avançar-50.png'
  imgSerie.style.width='4rem'
  imgSerie.style.height='5rem'
  iSerie.appendChild(imgSerie)
  divSerie.appendChild(iSerie)
  iSerie.style.position='absolute'
  iSerie.style.top='235%'
  iSerie.style.left='94.5%'
  iSerie.style.background='#00000081'
  iSerie.style.borderTopLeftRadius='10px';
  iSerie.style.borderBottomLeftRadius='10px';
  iSerie.style.display='flex'
  imgSerie.style.justifyContent='flex-end'
  
  const divSerie2= document.createElement('div')
  const imgSerie2 = document.createElement('img')
  const iSerie2=document.createElement('i')
  imgSerie2.src= './voltar.png'
  imgSerie2.style.width='4rem'
  imgSerie2.style.height='5rem'
  iSerie2.appendChild(imgSerie2)
  divSerie2.appendChild(iSerie2)
  iSerie2.style.position='absolute'
  iSerie2.style.top='235%'
  iSerie2.style.left='0'
  iSerie2.style.background='#00000081'
  iSerie2.style.borderTopRightRadius='10px';
  iSerie2.style.borderBottomRightRadius='10px';
  imgSerie2.style.justifyContent='flex-start'
  
  const listaDeSeries = [{
    id: 1,
    nome: 'aaa',
    src: 'https://ottvsimg.ottvs.com.br/cov/kno.247408/0247408_335.jpg',
    href:'https://www.looke.com.br/filmes/natureza-morta'
  },
  {
    id: 2,
    nome: 'Ouro Verde tudo tem um preço',
    src: 'https://ottvsimg.ottvs.com.br/cov/onz.065245/0065245_335.jpg',
    href:'https://www.looke.com.br/filmes/ouro-verde-1a-temporada'
  },
  {
    id: 3,
    nome: 'Schubert',
    src: 'https://ottvsimg.ottvs.com.br/cov/ntv.252815/0252815_335.jpg',
    href:'https://www.looke.com.br/filmes/schubert-1a-temporada'
  },
  {
    id: 4,
    nome: 'Pandêmicos a série',
    src: 'https://ottvsimg.ottvs.com.br/cov/nir.198940/0198940_335.jpg',
    href:'https://www.looke.com.br/filmes/pandemicos'
  },
  {
    id: 5,
    nome: 'Signal 1 temporada',
    src: 'https://ottvsimg.ottvs.com.br/cov/kan.068263/0068263_335.jpg',
    href:'https://www.looke.com.br/filmes/signal-1a-temporada'
  },
  {
    id: 6,
    nome: 'Blackout 1 Temporada',
    src: 'https://ottvsimg.ottvs.com.br/cov/bbc.052462/0052462_335.jpg',
    href:'https://www.looke.com.br/filmes/blackout-1a-temporada'
  },
  {
    id: 7,
    nome: 'Fugitive Boys',
    src: 'https://ottvsimg.ottvs.com.br/cov/kan.068235/0068235_335.jpg',
    href:'https://www.looke.com.br/filmes/fugitive-boys-1a-temporada'
  },
  {
    id: 8,
    nome: 'Dark World Equilibrium 1 Temporada',
    src: 'https://ottvsimg.ottvs.com.br/cov/age.046519/0046519_335.jpg',
    href:'https://www.looke.com.br/filmes/dark-world-equilibrium-1a-temporada'
  },
  {
    id: 9,
    nome: 'Resgate Vertical',
    src: 'https://ottvsimg.ottvs.com.br/cov/ntv.152276/0152276_335.jpg',
    href:'https://www.looke.com.br/filmes/resgate-vertical-1a-temporada'
  },
  {
    id: 10,
    nome: 'El Dorado',
    src: 'https://ottvsimg.ottvs.com.br/cov/acn.127395/0127395_335.jpg',
    href:'https://www.looke.com.br/filmes/el-dorado-em-busca-do-templo-perdido-1a-temporada'
  }
  ];
  
  listaDeSeries.map((item) => {

    const link = document.createElement('a');
  link.href = item.href;
    const img = document.createElement('img');
    img.src = item.src;
    img.style.width = '11rem';
    img.style.height = '14rem';
    img.style.padding = '0.3rem';
  
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.1)';
    });
  
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(0.96)';
    });
  link.target='blank'
     link.appendChild(img);
    return filmesEmFormatoDiferente.appendChild(link);
  });
  
  divSerie2.style.display='none'
  filmesEmFormatoDiferente.appendChild(divSerie)
  filmesEmFormatoDiferente.appendChild(divSerie2)
  iSerie.addEventListener('click', () => {
    divSerie2.style.display='flex'
   return  filmesEmFormatoDiferente.scrollLeft+=1000
  });
  iSerie2.addEventListener('click', () => {
  return filmesEmFormatoDiferente.scrollLeft-=1000
  });
  

  const divDisplayNone=document.createElement('div')
divDisplayNone.style.display='none'

btn.addEventListener('click',()=>{

})

const loginP=document.querySelectorAll('.loginP')

loginP[0].addEventListener('mouseover',()=>{
 loginP[0].style.textDecoration='underline'
})

loginP[0].addEventListener('mouseout',()=>{
  loginP[0].style.textDecoration='none'
})

const loginP2=document.querySelectorAll('.loginP')

loginP2[1].addEventListener('mouseover',()=>{
 loginP2[1].style.textDecoration='underline'
})

loginP2[1].addEventListener('mouseout',()=>{
  loginP2[1].style.textDecoration='none'
})