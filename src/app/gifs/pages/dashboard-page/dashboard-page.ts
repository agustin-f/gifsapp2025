import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeader } from "../../components/gifs-side-menu-header/gifs-side-menu-header";


@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuHeader],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export default class DashboardPage {

}
