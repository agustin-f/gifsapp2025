<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gifs.service';
=======
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
>>>>>>> 357f0c9034110b598c94dd44129ae6203af5b0d7


interface menuOptions{
  label:string,
  sublabel:string,
  route:string,
  icon:string
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',
  styleUrl: './gifs-side-menu-options.css',
})
export class GifsSideMenuOptions {

   menuOptions:menuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs populares',
      route: 'trending'
    },
      {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublabel: 'Buscar Gifs',
      route: 'search'
    }
   ]
item: any;

}
