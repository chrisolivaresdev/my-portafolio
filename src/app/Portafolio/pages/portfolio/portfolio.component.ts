import { CommonModule } from "@angular/common";
import { Component, OnInit} from "@angular/core";
import { Portfolio } from "../interfaces/portfolio.interface";




@Component({
  standalone:true,
  imports:[CommonModule],
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  portfolios:Portfolio[] = [
    {
      src:"./assets/Projects/vierafloors-min.png",
      title:"VieraFloors",
      description:"Aplicacion web: HTMl, CSS, Javascript.",
      web:"https://vierafloor.com/",
    },
    {
      src:"./assets/Projects/Rancho-papa.png",
      title:"El Rancho de papá",
      description:"Aplicacion web: HTMl, CSS, Javascript.",
      web:"https://chrisolivaresdev.github.io/RanchoePapa/",
    },
    {
      src:"./assets/Projects/Building-maintenance.png",
      title:"Ap Building Maintenance",
      description:"Aplicacion web: HTMl, CSS, Javascript.",
      web:"https://apbuildingmaintenence.com/",
    },
    {
      src:"./assets/Projects/qr-app.png",
      title:"QR-APP",
      description:"Aplicacion web: HTMl, CSS, Typescript, Angular.",
      web:"https://demo-qr-app-front.vercel.app/Inicio",
    },
    {
      src:"./assets/Projects/RickYMorthy-Angular.png",
      title:"Rick Y Morthy - SPA",
      description:"Aplicacion web: HTMl, CSS, Typescript, Angular.",
      web:"https://chrisolivaresdev.github.io/rickAndMorthy-Angular/",
      repo:"https://github.com/chrisolivaresdev/rickAndMorthy-Angular",
    },
    {
      src:"./assets/Projects/weither-app.png",
      title:"Weither-App",
      description:"Aplicacion web: HTMl, CSS, Typescript, Angular.",
      web:"https://chrisolivaresdev.github.io/weither-App/",
      repo:"https://github.com/chrisolivaresdev/weither-App",
    },
    {
      src:"./assets/Projects/Angular-test.png",
      title:"Angular-test",
      description:"Aplicacion web: HTMl, CSS, Typescript, Angular.",
      web:"https://demo-projecttest.netlify.app/login",
      repo:"https://github.com/chrisolivaresdev/Project-test",
      credentiales:"Usuario: Usuario Contraseña: Usuario"
    },
    {
      src:"./assets/Projects/Gifts-pp-angular.png",
      title:"Gifts-App Angular",
      description:"Aplicacion web: HTMl, CSS, Typescript, Angular.",
      web:"https://chrisolivaresdev.github.io/GiftApp-angular/",
      repo:"https://github.com/chrisolivaresdev/GiftApp-angular",
    },
    {
      src:"./assets/Projects/Gift-App-React.png",
      title:"Gifts-App React",
      description:"Aplicacion web: HTMl, CSS, Javascript, React.",
      web:"https://chrisolivaresdev.github.io/GiftApp-react/",
      repo:"https://github.com/chrisolivaresdev/GiftApp-react",
    },
    {
      src:"./assets/Projects/React-Test.png",
      title:"React-Test",
      description:"Aplicacion web: HTMl, CSS, Javascript, React.",
      web:"https://chrisolivaresdev.github.io/react-test/",
      repo:"https://github.com/chrisolivaresdev/react-test",
    },
    {
      src:"./assets/Projects/Simon.jfif",
      title:"Simon dice",
      description:"Aplicacion web: HTMl, CSS, Javascript.",
      web:"https://chrisolivaresdev.github.io/Simon-dice/",
      repo:"https://github.com/chrisolivaresdev/Simon-dice"
    },
    {
      src:"./assets/Projects/accordion-faq-min.jpg",
      title:"Accordion-Faq",
      description:"Aplicacion web: HTMl, CSS, Javascript.",
      web:"https://chrisolivaresdev.github.io/Accordion-Frontend-Mentor/",
      repo:"https://github.com/chrisolivaresdev/Simon-dice"
    },
    {
      src:"./assets/Projects/batatabit-min.png",
      title:"BatataBit",
      description:"Aplicacion web: HTMl, CSS.",
      web:"https://chrisolivaresdev.github.io/batatabit/",
      repo:"https://github.com/chrisolivaresdev/batatabit"
    },
    {
      src:"./assets/Projects/Ping-min.jpg",
      title:"ping-comming-soon",
      description:"Aplicacion web: HTMl, CSS, Javascript.",
      web:"https://chrisolivaresdev.github.io/ping-comming-soon-Frontend-Mentor/",
      repo:"https://github.com/chrisolivaresdev/ping-comming-soon-Frontend-Mentor"
    },
    {
      src:"./assets/Projects/Rick-And-Morthy-min.png",
      title:"Single Page Aplication.",
      description: "Aplicacion web: HTMl, CSS, Javascript.",
      web:"https://chrisolivaresdev.github.io/spa/",
      repo:"https://github.com/chrisolivaresdev/spa"
    },
    {
      src:"./assets/Projects/Product-preview-min.jpg",
      title:"Product card",
      description: "Aplicacion web: HTMl, CSS.",
      web:"https://chrisolivaresdev.github.io/product-card-frontend-Mentor/",
      repo:"https://github.com/chrisolivaresdev/product-card-frontend-Mentor"
    },
    {
      src:"./assets/Projects/four-cards-section-min.jpg",
      title:"four card section",
      description:"Aplicacion web: HTMl, CSS.",
      web:"https://chrisolivaresdev.github.io/four-card-section/",
      repo:"https://github.com/chrisolivaresdev/four-card-section"
    },
    {
      src:"./assets/Projects/Profile-card-min.jpg",
      title:"Profile card",
      description:"Aplicacion web: HTMl, SASS.",
      web:"https://chrisolivaresdev.github.io/profile-card/",
      repo:"https://github.com/chrisolivaresdev/profile-card"
    },
    {
      src:"./assets/Projects/Social-Media-Dashboard-min.png",
      title:"Social Dashboard",
      description:"Aplicacion web: HTMl, CSS, Javascript.",
      web:"https://chrisolivaresdev.github.io/dark-mode/",
      repo:"https://github.com/chrisolivaresdev/dark-mode"
    },

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
