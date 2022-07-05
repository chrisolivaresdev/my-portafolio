import { Component, ViewEncapsulation} from "@angular/core";

import SwiperCore, { EffectCube, Pagination } from "swiper";

SwiperCore.use([EffectCube, Pagination]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent{



  constructor() { }

  ngOnInit(): void {
  }

}
