import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {LayoutFacade} from "../../services/layout.facade";

@Component({
  selector: 'app-tickers-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive
  ],
  templateUrl: './tickers-header.component.html',
  styleUrl: './tickers-header.component.scss'
})
export class TickersHeaderComponent {
    layoutFacade = inject(LayoutFacade);

    toggledMenu = this.layoutFacade.toggledMenu;

    toggleMenu() {
      this.layoutFacade.toggleMenu();
    }

}
