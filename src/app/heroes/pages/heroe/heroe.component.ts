import { Component, Input, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  id!: string;

  constructor(
    private heroesServices: HeroesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.id = id);
    this.heroesServices.getHeroe(this.id)
    .subscribe(heroe => this.heroe = heroe);

    /*this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesServices.getHeroe(id) )
      )
      .subscribe(heroe => this.heroe);*/
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
