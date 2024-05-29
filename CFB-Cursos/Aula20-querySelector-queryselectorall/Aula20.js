const query_div=document.querySelector("div")// retorna a primeira div que encontrar, neste caso será a do HTML

const query_divpTodas=[...document.querySelectorAll("div,p")]//retorna todas div e todos p

const query_divClass=[...document.querySelectorAll("div[class]")]// recebe apenas as div que possuem class

const query_cursosTodos=[...document.querySelectorAll(".curso")]//no caso de classes basta usar o ponto "." antes do nome ou # no caso de ID neste caso pode usar o querySelector apenas pois possui apenar 1 elemento com uma identidade

const query_divComP=[...document.querySelectorAll("div > p")]