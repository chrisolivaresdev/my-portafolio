import { Component, OnInit } from '@angular/core';
import { Certificate } from '../interfaces/certificate.interface';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  certifications: Certificate[] =[
    {
      href: "https://platzi.com/p/Chrisolivaresdev/curso/2486-angular-componentes/diploma/detalle/",
      src:"./assets/certification/Angular-Componentes.png" ,
      alt: "Angular-Componentes"
    },
    {
      href: "https://platzi.com/p/Chrisolivaresdev/curso/2487-angular-modular/diploma/detalle/",
      src:"./assets/certification/Angular-Router.png" ,
      alt: "Angular-Router"
    },
    {
      href: "https://platzi.com/p/Chrisolivaresdev/curso/2027-angular-forms/diploma/detalle/",
      src:"./assets/certification/Angular-Forms.png" ,
      alt: "Angular-Forms"
    },
    {
      href: "https://platzi.com/p/Chrisolivaresdev/curso/2495-angular-apis/diploma/detalle/",
      src:"./assets/certification/Angular-consumoApi.png" ,
      alt: "Angular-consumoApi"
    },
    {
      href: "https://www.udemy.com/certificate/UC-182ef334-54be-4f31-a1d7-d61512589bc6/",
      src:"./assets/certification/Angular-experto.jpg" ,
      alt: "Angular-experto"
    },
    {
      href: "https://www.linkedin.com/posts/chrisolivaresdev_frontend-angular-react-activity-7081415357541834752-kPSo?utm_source=share&utm_medium=member_desktop",
      src:"./assets/certification/Certificado-Angular.jpg" ,
      alt: "Certificado-Angular"
    },
    {
      href: "https://www.linkedin.com/posts/chrisolivaresdev_frontend-angular-react-activity-7081415357541834752-kPSo?utm_source=share&utm_medium=member_desktop"  ,
      src:"./assets/certification/Certificado-React.jpg" ,
      alt: "Certificado-React"
    },

     {
      href: "https://www.linkedin.com/posts/chrisolivaresdev_frontend-angular-react-activity-7081415357541834752-kPSo?utm_source=share&utm_medium=member_desktop",
      src:"./assets/certification/Certificado-C.jpg" ,
      alt: " Certificado-C"
    },
    {
      href: "https://platzi.com/p/Chrisolivaresdev/curso/2008-html-css/diploma/detalle/",
      src:"./assets/certification/HtmlYCss.jpg" ,
      alt: "CursoHtmlYCss"
    },
    {
      href: "https://platzi.com/p/Chrisolivaresdev/curso/1814-basico-javascript/diploma/detalle/",
      src: "./assets/certification/basicojs.jpg" ,
      alt: "CertificadoJs"
    },
    {
      href: "https://platzi.com/p/Chrisolivaresdev/curso/1557-git-github/diploma/detalle/",
      src: "./assets/certification/GitYGithub.jpg" ,
      alt: "CursoGitYGithub"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/1331-bootstrap/diploma/detalle/",
      src:"./assets/certification/bootstrap.jpg",
      alt:"SursoBootstrap"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/2030-mobile-first/diploma/detalle/",
      src:"./assets/certification/MobileFirst.jpg",
      alt:"CursoMobileFirst"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/1787-spa-javascript/diploma/detalle/",
      src:"./assets/certification/SPA.jpg",
      alt:"CursoSinglePageApplication"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/2242-webpack/diploma/detalle/",
      src:"./assets/certification/Webpack.jpg",
      alt:"CursoWebpack"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/2379-roadtocode3-secret/diploma/detalle/",
      src:"./assets/certification/roadToCode.jpg",
      alt:"RetoRoadToCode3.0"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/1789-asincronismo-js/diploma/detalle/",
      src:"./assets/certification/Asincronismo.jpg",
      alt:"CertificadoAsincronismo"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/1815-ecmascript-6/diploma/detalle/",
      src:"./assets/certification/ecmascript +6.jpg",
      alt:"CursoEcmascript"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/1339-fundamentos-javascript-2018/diploma/detalle/",
      src:"./assets/certification/FundamentosJS.jpg",
      alt:"FundamentosJs"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/1245-stylus/diploma/detalle/",
      src:"./assets/certification/Stylus.jpg",
      alt:"CurstoStylus"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/1244-sass/diploma/detalle/",
      src:"./assets/certification/Sass.jpg",
      alt:"CursoSass"
    },
    {
      href:"https://platzi.com/p/Chrisolivaresdev/curso/1246-less/diploma/detalle/",
      src:"./assets/certification/LESS.jpg",
      alt:"CursoLess"
    },
  ]


  ngOnInit(): void {
  }

}
