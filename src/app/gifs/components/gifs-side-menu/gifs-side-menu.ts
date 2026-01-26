import { Component } from '@angular/core';
import { GifsSideMenuHeader } from '../gifs-side-menu-header/gifs-side-menu-header';
import { SideMenuOptionsComponent } from "../gifs-side-menu-options/gifs-side-menu-options";

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifsSideMenuHeader, SideMenuOptionsComponent],
  templateUrl: './gifs-side-menu.html',
  styleUrl: './gifs-side-menu.css',
})
export class GifsSideMenu {

}
