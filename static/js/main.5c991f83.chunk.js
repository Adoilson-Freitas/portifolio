(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{29:function(e,n,t){e.exports=t(41)},41:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),r=t(20),i=t.n(r),l=t(12),c=t(3);var s=function(e,n){var t=Object(a.useState)((function(){var t=localStorage.getItem(e);return t?JSON.parse(t):n})),o=Object(l.a)(t,2),r=o[0],i=o[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,i]},m=t(28),d=t(7),p=t(2),u=t(8),f=t.n(u),x=(t(14),t(4));function h(){var e=Object(x.a)(["\n  font-family: 'Roboto', sans-serif;\n  color: ",";\n  margin-left: 28%;\n  margin-top: 30px;\n  width: 60%;\n  h1{\n    padding-top: 15%;\n    font-size: 40px;\n  }\n\n  h3 {\n    font-weight: normal;\n    margin: 3px;\n  }\n  .contatos{\n    margin-top: 15px;\n  }\n  .contatos pre{\n    display: flex;\n    margin-top: 5px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .sociais {\n    text-align: center;\n    margin: 50px;\n  }\n\n  .box_sociais {\n    background-color: #FFF;\n    border-radius: 8px;\n    display: inline-block;\n    margin: 20px;\n    transition: all 600ms;\n\n  }\n\n  .sociais a {\n    font-size: 35px;\n    padding: 2px;\n    display: flex;\n  }\n\n  .box_sociais:hover {\n    transform: scale(1.2); \n  }\n\n  .educacao span {\n    float: right;\n    font-weight: normal;\n    font-style: italic;\n  }\n\n  .certificado {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .certificado a {\n \n    margin: 2px 0;\n    text-decoration: none;\n    color: ",";\n  }\n\n  .certificado a svg{\n    margin-right: 2px;\n    color: red;\n  }\n\n  .certificado h1 {\n      margin-bottom: 15px;\n    }\n \n  p{\n    font-size: 16px;\n    margin: 20px 0;\n  }\n  h2 {\n   margin: 10px 0;\n  }\n  .techs svg {\n    font-size: 40px;\n    margin: 20px;\n  }\n\n  .footer {\n    text-align: center;\n    margin: 10px;\n    border-top: 2px solid #000;\n    height: 80px;\n  }\n  .footer a {\n    color: ",";\n    font-size: 30px;\n    margin: 20px;\n  }\n  @media only screen and (min-width: 1024px) {\n  .sociais {\n    display: none;\n  }\n     \n  }\n\n  @media only screen and (max-width: 1024px) {\n    margin-left: 5px;\n    margin-top: 30px;\n    width: 90%;\n    .principal {\n      margin-left: 20px;\n    }\n  }\n\n  @media only screen and (max-width: 750px) {\n    margin-right: 0;\n    \n    .educacao span {\n    float: none;\n    display: block;\n    margin-bottom: -20px;\n  }\n  }\n\n  @media only screen and (max-width: 660px) {\n    text-align: center;\n\n  .educacao {\n    text-align: left;\n  }\n  h1{\n    padding-top: 25%;\n    font-size: 30px;\n  }\n  .sociais a {\n    font-size: 25px;\n  }\n  p {\n    font-size: 14px;\n  }\n  .contatos {\n    font-size: 12px;\n  }\n  \n  }\n\n  @media only screen and (max-width: 500px) {\n    text-align: center;\n  .certificado a {\n      font-size: 11px;\n      text-align: left;\n\n   }\n \n  .box_sociais {\n    margin: 10px;\n  }\n  h1{\n    font-size: 25px;\n  }\n  .educacao span {\n    font-size: 16px;\n  }\n  .educacao h2 {\n    font-size: 18px;\n  }\n  h3 {\n   font-size: 16px;\n  }\n  }\n\n  @media only screen and (max-width: 360px) {\n  h1{\n    font-size: 18px;\n    padding-top: 35%;\n  } \n  p {\n    font-size: 11px;\n  }\n  .certificado a {\n      font-size: 8px;\n      align-items: center;\n\n    }\n    .educacao span {\n    font-size: 12px;\n  }\n  .educacao h2 {\n    font-size: 14px;\n  }\n  .sociais {\n    margin: 30px;\n  }\n  .sociais a {\n    font-size: 20px;\n  }\n  }\n\n  @media only screen and (max-width: 320px) {\n\n  .certificado a {\n      font-size: 8px;\n  }\n  h1 {\n    font-size: 18px;\n  }\n\n  }\n\n"]);return h=function(){return e},e}var g=c.d.div(h(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),E=t(15);function b(){var e=Object(x.a)(["\n  font-family: 'Roboto', sans-serif;\n  margin-top: 30px;\n  h1{\n    padding-top: 10%;\n    font-size: 40px;\n  }\n\n  h2 {\n   margin: 20px 0;\n  }\n  .techs svg {\n    font-size: 40px;\n  }\n  .box-transition{\n  transition: all .5s ease-in-out; \n  }\n\n  .boxRotate{\n    background-color: #FFF;\n    border-radius: 8px;\n    display: inline-block;\n    margin: 20px;\n  }\n\n  .boxRotate:hover {\n    transform: rotate(360deg);\n  }\n  @media only screen and (max-width: 660px) {\n    text-align: center;\n  h1{\n    padding-top: 15%;\n    font-size: 30px;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  .techs svg {\n    font-size: 30px;\n    \n  }\n\n  }\n  @media only screen and (max-width: 500px) {\n    h1{\n      font-size: 25px;\n    }\n    h2 {\n    font-size: 18px;\n  }\n  .techs svg {\n    font-size: 20px;\n    margin: 10px;\n  }\n  }\n  @media only screen and (max-width: 360px) {\n    h1{\n      font-size: 20px;\n    }\n    h2 {\n    font-size: 14px;\n  }\n \n  }\n\n  @media only screen and (max-width: 320px) {\n  h1 {\n    font-size: 18px;\n  }\n  .techs svg {\n    margin: 4px;\n  }\n\n  }\n  \n  \n"]);return b=function(){return e},e}var v=c.d.div(b()),y=function(){return Object(a.useEffect)((function(){f.a.init({duration:2e3})}),[]),o.a.createElement(v,{id:"habilidades"},o.a.createElement("div",{className:"techs"},o.a.createElement("h1",{"data-aos":"zoom-out"},"HABILIDADES"),o.a.createElement("h2",{"data-aos":"zoom-in"},"LINGUAGENS DE PROGRAMA\xc7\xc3O E FERRAMENTAS"),o.a.createElement("div",{"data-aos":"zoom-in"},o.a.createElement("div",{className:"box boxRotate box-transition box-layout"},o.a.createElement(p.h,{color:"red"})),o.a.createElement("div",{className:"box boxRotate box-transition box-layout"},o.a.createElement(p.b,{color:"blue"})),o.a.createElement("div",{className:"box boxRotate box-transition box-layout"},o.a.createElement(E.a,{color:"yellow"})),o.a.createElement("div",{className:"box boxRotate box-transition box-layout"},o.a.createElement(p.o,{color:"blue"})),o.a.createElement("div",{className:"box boxRotate box-transition box-layout"},o.a.createElement(p.m,{color:"green"})),o.a.createElement("div",{className:"box boxRotate box-transition box-layout"},o.a.createElement(E.b,{color:"red"})),o.a.createElement("div",{className:"box boxRotate box-transition box-layout"},o.a.createElement(p.d,{color:"black"})),o.a.createElement("div",{className:"box boxRotate box-transition box-layout"},o.a.createElement(p.l,{color:"black"})))))};function z(){var e=Object(x.a)(["\n  width: 100%;\n  font-family: 'Roboto', sans-serif;\n  .projetos {\n    border-radius: 8px;\n    padding: 6px;\n    margin-top: 50px;\n    background: ",";\n\n  }\n\n  .projetos:hover {\n    transition: all 600ms; \n    transform: scale(1.1);\n  }\n  \n\n span {\n   display: flex;\n   float: right;\n   align-items: center;\n   font-size: 14px;\n   color: ",";\n\n }\n span svg {\n   margin-left: 2px;\n }\n \n  p {\n   margin: 2px 0;\n   font-size: 13px;\n }\n \n .description {\n   margin: 8px 0;\n   font-size: 12px;\n }\n \n  a {\n   text-decoration: none;\n   color: red;\n }\n\n  .projetos {\n    margin-top: 45px;\n    margin-right: 5%;\n  }\n\n  @media only screen and (max-width: 660px) {\n    margin-left: 5%;\n    .projetos {\n      text-align: justify;\n    }\n  p {\n   font-size: 11px;\n }\n \n .description {\n  font-size: 10px;\n }\n span {\n   font-size: 12px;\n }\n  }\n\n\n"]);return z=function(){return e},e}var w=c.d.div(z(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.text})),k=function(){return Object(a.useEffect)((function(){f.a.init({duration:2e3})}),[]),o.a.createElement(w,{id:"projetos"},o.a.createElement("h1",{"data-aos":"zoom-out"},"PROJETOS"),o.a.createElement("div",{"data-aos":"zoom-in-right",className:"projetos "},o.a.createElement("h3",null,o.a.createElement("a",{href:"https://mimosdoces-oficial.web.app/",target:"_blank",rel:"noreferrer noopener"},"mimo_s_doces")," "),o.a.createElement("div",{className:"description"},"Site para uma pequena empresa de venda de doces."),o.a.createElement("p",null,"HTML, CSS e JavaScript")),o.a.createElement("div",{"data-aos":"zoom-in-left",className:"projetos"},o.a.createElement("h3",null,o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas/Ecoleta",target:"_blank",rel:"noreferrer noopener"},"Ecoleta"),"   ",o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas/Ecoleta",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("span",null,"Repositorio ",o.a.createElement(p.f,null)))),o.a.createElement("div",{className:"description"},"O Ecoleta \xe9 um projeto criado durante a semana NLW para gerenciar o processo de coleta de lixo nas cidades. Com ele, \xe9 poss\xedvel ajudar pessoas a encontrarem pontos de coleta de uma forma mais eficiente."),o.a.createElement("p",null,"JavaScript, express, Nunjucks, HTML e CSS")),o.a.createElement("div",{"data-aos":"zoom-in-right",className:"projetos"},o.a.createElement("h3",null,o.a.createElement("a",{href:"https://mydailystatus.adoilsonbacelar.now.sh/",target:"_blank",rel:"noreferrer noopener"},"My Daily Status"),"   ",o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas/My-Daily-Status",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("span",null,"Repositorio ",o.a.createElement(p.f,null)))),o.a.createElement("div",{className:"description"},"My Daily Status \xe9 um projeto criado durante o Fullstack Lab do DevPleno. Com a aplica\xe7\xe3o, o usu\xe1rio poder\xe1 fazer um registro di\xe1rio do seu estado de sa\xfade durante a pandemia de COVID-19 e tamb\xe9m acompanhar os registros de pessoas pr\xf3ximas a voc\xea."),o.a.createElement("p",null,"React.Js, Next.Js, Firebase, Geofirestore, Tailwindcss e Eslint")),o.a.createElement("div",{"data-aos":"zoom-in-left",className:"projetos"},o.a.createElement("h3",null,o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas/Be-The-Hero",target:"_blank",rel:"noreferrer noopener"},"Be The Hero"),"   ",o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas/Be-The-Hero",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("span",null,"Repositorio ",o.a.createElement(p.f,null)))),o.a.createElement("div",{className:"description"},"Projeto desenvolvido na semana OmniStack 11.0 do Rocketseat.Durante a semana foi desenvolvida uma aplica\xe7\xe3o chamada Be The Hero. Essa aplica\xe7\xe3o tem como objetivo inicial atender ONGs, onde na aplica\xe7\xe3o Web o usu\xe1rio(ONG) cadastrado no sistema pode cadastrar uma causa onde precisa de um her\xf3i para ajuda-lo a cuidar de algo especifico e no mobile os usu\xe1rios (her\xf3is) podem ajudar a ONG que desejar, podendo entrar em contato via WhatsApp ou E-mail."),o.a.createElement("p",null,"Node.Js, Express, sqlite3, Knex, Jest, React.Js, Axios, React Native e Expo")),o.a.createElement("div",{"data-aos":"zoom-in-right",className:"projetos"},o.a.createElement("h3",null,o.a.createElement("a",{href:"https://adoilson-freitas.github.io/luzesnatall.github.io/",target:"_blank",rel:"noreferrer noopener"},"Luzes-de-Natal"),"   ",o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas/Luzes-de-Natal",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("span",null,"Repositorio ",o.a.createElement(p.f,null)))),o.a.createElement("div",{className:"description"},"pisca pisca."),o.a.createElement("p",null,"Html, Css e JavaScript")),o.a.createElement("div",{"data-aos":"zoom-in-left",className:"projetos"},o.a.createElement("h3",null,o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas/DevRadar",target:"_blank",rel:"noreferrer noopener"},"DevRadar"),"   ",o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas/DevRadar",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("span",null,"Repositorio ",o.a.createElement(p.f,null)))),o.a.createElement("div",{className:"description"},"DevRadar, uma aplica\xe7\xe3o que permite cadastrar Dev's apartir da API do github para encontrar os dados do dev e salvar em um banco da aplica\xe7\xe3o. Partindo disso a aplica\xe7\xe3o visa conectar dev's pr\xf3ximos a voc\xea que trabalham com as mesmas tecnologias."),o.a.createElement("p",null,"Node.Js, Express, Mongoose, React.Js, Axios, socket.io-client, React Native, react-native-maps e Expo")))},j=function(){return Object(a.useEffect)((function(){f.a.init({duration:900})}),[]),o.a.createElement(g,null,o.a.createElement("div",{className:"principal"},o.a.createElement("h1",{id:"sobre","data-aos":"zoom-in"},"ADOILSON BACELAR DE FREITAS"),o.a.createElement("h3",{"data-aos":"zoom-in"},"Cursando An\xe1lise e Desenvolvimento de Sistemas"),o.a.createElement("div",{"data-aos":"zoom-in",className:"contatos"},o.a.createElement("pre",null,"FEIRA DE SANTANA/BA"),o.a.createElement("pre",null,"adoilsonbacelar@gmail.com ",o.a.createElement(p.c,null)),o.a.createElement("pre",null,"(75) 9 9709-2305 ",o.a.createElement(p.n,null))),o.a.createElement("div",{"data-aos":"zoom-out",className:"sociais"},o.a.createElement("div",{className:"box_sociais"},o.a.createElement("a",{href:"https://www.linkedin.com/in/adoilson-freitas-98b154172/",target:"_blank",rel:"noreferrer noopener"},o.a.createElement(p.j,{color:"blue"}))),o.a.createElement("div",{className:"box_sociais"},o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas",target:"_blank",rel:"noreferrer noopener"},o.a.createElement(p.e,{color:"black"}))),o.a.createElement("div",{className:"box_sociais"},o.a.createElement("a",{href:"https://www.instagram.com/adoilsondev/",target:"_blank",rel:"noreferrer noopener"},o.a.createElement(p.i,{color:"red"})))),o.a.createElement("p",{"data-aos":"zoom-in"},"Atualmente Focado em NodeJS, ReactJS e React Native. Fiz curso T\xe9cnico de Inform\xe1tica - no Centro Territorial de Educa\xe7\xe3o Profissional Portal do Sert\xe3o (2016). Estudante de An\xe1lise e Desenvolvimento de Sistemas na UniCesumar EAD."),o.a.createElement("h1",{"data-aos":"zoom-out",id:"pathLink#sobre"},"EDUCA\xc7\xc3O"),o.a.createElement("br",null),o.a.createElement("div",{className:"educacao"},o.a.createElement("h2",{"data-aos":"zoom-in"},"Unicesumar - Centro Universit\xe1rio de Maring\xe1 ",o.a.createElement("span",null,"Jan/2019 a jul/2021")),o.a.createElement("p",{"data-aos":"zoom-in"},"Tecn\xf3logo em An\xe1lise e Desenvolvimento de Sistemas"),o.a.createElement("h2",{"data-aos":"zoom-in"},"Centro Territorial de Educa\xe7\xe3o Profissional do Portal do Sert\xe3o",o.a.createElement("span",null,"Jan/2013 a dez/2016")),o.a.createElement("p",{"data-aos":"zoom-in"},"Ensino M\xe9dio Integrado ao Curso T\xe9cnico em Inform\xe1tica")),o.a.createElement("h1",{"data-aos":"zoom-out"},"CERTIFICA\xc7\xc3O"),o.a.createElement("br",null),o.a.createElement("div",{className:"certificado"},o.a.createElement("a",{"data-aos":"zoom-in",href:"http://soft.blue/certificado/4145234BC37D",target:"_blank",rel:"noreferrer noopener"},o.a.createElement(p.p,null)," WEB: HTML5, CSS3, JavaScript & Ajax - Softblue"),o.a.createElement("br",null),o.a.createElement("a",{"data-aos":"zoom-in",href:"http://ude.my/UC-2c6c280c-570b-405e-a73b-e6d3b39fc7ee",target:"_blank",rel:"noreferrer noopener"},o.a.createElement(p.p,null)," React + Redux: Fundamentos e 2 Apps do Absoluto ZERO! - Udemy ")),o.a.createElement(y,null),o.a.createElement(k,null)))},N={title:"light",colors:{primary:"#b3b3ff",secundary:"#ccccff",background:"#e6e6ff",text:"#000"}},A={title:"dark",colors:{primary:"#000000",secundary:"#777",background:"#000010",text:"#fff"}};function R(){var e=Object(x.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html {\n  scroll-behavior: smooth;\n}\n\n  body {\n    background: ",";\n    font-size: 14px;\n    color: ",";\n    font-family: sans-serif;\n  }\n"]);return R=function(){return e},e}var O=Object(c.c)(R(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text})),S=t(24),F=t.n(S),_=t(27),D=t(25);function C(){var e=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ",";\n    font-size: 12px;\n    margin-top: 180px;\n\n    svg {\n    margin: 0 3px;\n  }\n\n   a {\n    margin: 0 3px;\n    text-decoration: none;\n   }\n@media only screen and (max-width: 1024px) {\n  display: none;\n}\n \n"]);return C=function(){return e},e}function J(){var e=Object(x.a)(["\n  outline: none;\n  width: 30px;\n  margin-top: 10px;\n  margin-left: 76%;\n    \n"]);return J=function(){return e},e}function T(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  font-size: 14px;\n\n"]);return T=function(){return e},e}function I(){var e=Object(x.a)(["\n  font-family: 'Roboto', sans-serif;\n  position: fixed;\n  margin-top: -30px;\n  top: 30px;\n  bottom: 0;\n  width: 250px;\n  background: ",";\n  z-index: 30;\n\n  h3{\n    color: ",";\n    text-align: center;\n    margin: 5px 0;\n    font-size: 18px;\n  }\n\n  img {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 40%;\n    margin-left: 30%;\n    border-radius: 50%;\n  }\n  ul {\n  margin-top: 50px;\n  list-style: none;\n  }\n  ul a {\n  text-decoration: none;\n  }\n  ul a:hover {\n  opacity: 0.8;\n  }\n\n  ul li {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 20px;\n    color: ",";\n    font-size: 16px;\n    font-weight: bold; \n  }\n\n  input,\n  label {\n    display: none;\n  }\n\n  @media only screen and (max-width: 1024px) {\n    height: 110px;\n    width: 100vw;\n\n    img {\n    margin-top: -20px;\n    width: 90px;\n    border-radius: 50%;\n    float: left;\n    margin-left: 40px;\n    margin-right: 20px;\n    }\n    ul svg {\n      display: none;\n    }\n\n    ul{\n     margin-top: 0;\n     display: flex;\n     align-items: center;\n    }\n\n    ul a{\n      margin-left: 40px;\n    }\n    h3{\n      display: none; \n  }\n  p{\n    display: none;\n  }\n\n  }\n\n  @media only screen and (max-width: 500px) {\n    \n    label {\n      font-size: 35px;\n      display: flex;\n      color: ",";\n      float: right;\n      margin-right: 5%;\n    }\n\n    #menuop:checked ~ .menu ul {\n      align-items: center;\n      justify-content: center;\n      background: ",";\n      margin-left: 0;\n\n    }\n\n\n    .menu ul {\n      transition: all 600ms;\n     margin-left: 100%;\n     margin-top: 45px;\n     width: 100%;\n\n    }\n\n    height: 90px;\n  img {\n    width: 60px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  ul a {\n      margin-left: 10px;\n      font-size: 13px;\n  }  \n\n  ul li {\n      font-size: 13px;\n      margin-left: 10px;\n\n  }  \n  }\n"]);return I=function(){return e},e}var P=c.d.div(I(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),L=c.d.div(T(),(function(e){return e.theme.colors.text})),M=c.d.div(J()),B=c.d.footer(C(),(function(e){return e.theme.colors.text})),H=function(e){var n=e.toggleTheme,t=Object(a.useContext)(c.a),r=t.colors,i=t.title;return o.a.createElement(P,null,o.a.createElement(M,null,o.a.createElement(F.a,{onChange:n,checked:"light"===i,checkedIcon:!1,uncheckedIcon:!1,height:10,width:30,handleDiameter:15,offColor:Object(_.a)(.15,r.secundary),onColor:r.secundary})),o.a.createElement("img",{src:"image/perfil.jpeg",alt:"Perfil"}),o.a.createElement("h3",null,"Adoilson Bacelar de Freitas"),o.a.createElement(L,null,o.a.createElement("p",null,"Fullstack Developer")),o.a.createElement("input",{type:"checkbox",name:"menuop",id:"menuop"}),o.a.createElement("label",{htmlFor:"menuop"},o.a.createElement(D.a,null)),o.a.createElement("div",{className:"menu"},o.a.createElement("ul",null,o.a.createElement("a",{href:"#sobre"},o.a.createElement("li",null,"Sobre")),o.a.createElement("a",{href:"#habilidades"},o.a.createElement("li",null,"Habilidades")),o.a.createElement("a",{href:"#projetos"},o.a.createElement("li",null,"Projetos")))),o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/adoilson-freitas-98b154172/",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("li",null,o.a.createElement(p.k,null))),o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("li",null,o.a.createElement(p.e,null))))),o.a.createElement(B,{className:"footer"},o.a.createElement("p",null,"Feito com"),o.a.createElement(p.g,{color:"red"}),o.a.createElement("p",null,"e"),o.a.createElement(p.a,null),o.a.createElement("p",null,"Por ",o.a.createElement("a",{href:"https://www.linkedin.com/in/adoilson-freitas-98b154172/",target:"_blank",rel:"noreferrer noopener"},"Adoilson Freitas"))))};function G(){var e=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ",";\n    font-size: 15px;\n    margin-top: 4px;\n    height: 50px;\n\n    svg {\n    margin: 0 3px;\n  }\n  @media only screen and (max-width: 1024px) {\n  \n  .footer2 {\n    margin-left: 0;\n    padding: 5px;\n  }\n  .footer2 p {\n    padding: 5px;\n  }\n  }\n  @media only screen and (max-width: 660px) {\n    font-size: 12px;\n  }\n\n  @media only screen and (min-width: 1025px) {\n    display: none;     \n  }\n"]);return G=function(){return e},e}function U(){var e=Object(x.a)(["\n  font-family: 'Roboto', sans-serif;\n  color: ",";\n  margin-top: 30px;\n  border-top: 1px solid #555;\n  height: 40px;\n\n  .footer {\n    justify-content: flex-end;\n    text-align: center;\n    margin: 10px;\n    margin-left: 20%;\n  }\n\n  .footer a {\n    color: ",";\n    font-size: 30px;\n    margin: 20px;\n  }\n  a {\n    margin: 0 3px;\n    text-decoration: none;\n    color: red;\n   }\n\n  @media only screen and (max-width: 1024px) {\n  .footer {\n    display: none;\n  }\n     \n  }\n\n\n"]);return U=function(){return e},e}var q=c.d.div(U(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),W=c.d.footer(G(),(function(e){return e.theme.colors.text})),K=function(){return o.a.createElement(q,{id:"footer"},o.a.createElement("div",{className:"footer"},o.a.createElement("a",{href:"https://www.linkedin.com/in/adoilson-freitas-98b154172/",target:"_blank",rel:"noreferrer noopener"},o.a.createElement(p.j,{color:"blue"})),o.a.createElement("a",{href:"https://github.com/Adoilson-Freitas",target:"_blank",rel:"noreferrer noopener"},o.a.createElement(p.e,null)),o.a.createElement("a",{href:"https://www.instagram.com/adoilsondev/",target:"_blank",rel:"noreferrer noopener"},o.a.createElement(p.i,{color:"red"}))),o.a.createElement(W,{className:"footer2"},o.a.createElement("p",null,"Feito com"),o.a.createElement(p.g,{color:"red"}),o.a.createElement("p",null,"e"),o.a.createElement(p.a,null),o.a.createElement("p",null,"Por ",o.a.createElement("a",{href:"https://www.linkedin.com/in/adoilson-freitas-98b154172/",target:"_blank",rel:"noreferrer noopener"},"Adoilson Freitas"))))},V=function(){var e=s("theme",A),n=Object(l.a)(e,2),t=n[0],a=n[1];return o.a.createElement(c.b,{theme:t},o.a.createElement(m.a,null,o.a.createElement(O,null),o.a.createElement(H,{toggleTheme:function(){a("dark"===t.title?N:A)}}),o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/portifolio",exact:!0,component:j})),o.a.createElement(K,null)))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(V,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5c991f83.chunk.js.map