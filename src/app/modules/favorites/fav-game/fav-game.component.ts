import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { Favorito } from 'src/app/core/models/fav.models';
import { FavoriteService } from 'src/app/core/services/favorite.service';
import { AnimateService } from '../../animation/service/animate.service';



@Component({
  selector: 'app-fav-game',
  templateUrl: './fav-game.component.html',
  styleUrls: ['./fav-game.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],

  providers: [ConfirmationService, MessageService]
})

export class FavGameComponent implements OnInit {






  favoritos: Favorito[] = []
  fav!: Favorito
  msgs: Message[] = [];
  gamesLength!: number;

  val3: number = 0

  constructor(private favoriteService: FavoriteService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private animate: AnimateService) {
    this.getFavs()
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }

  confirm2(favorito: Favorito) {
    this.confirmationService.confirm({
      message: `  Deseja mesmo remover
              ${favorito.name}
            dos seus favoritos? `,
      header: 'Remover favorito',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.favoritos = this.favoritos.filter((f) => favorito.name !== f.name)
        this.favoriteService.removeFav(favorito.id).subscribe()
        this.messageService.add({ severity: 'success', summary: 'Feito!', detail: `O ${favorito.name} foi  removido dos seus favoritos com sucesso` });
        this.messageService.add({ severity: 'info', summary: 'Que pena', detail: 'Para adciona-lo novamente ou outro titulo volte até a aba Games e selecione "Adcionar aos favoritos!" ' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Nada feito!', detail: `O ${favorito.name} não foi removido dos seus favoritos` });
      }
    });
  }


  getFavs(): void {
    this.favoriteService.getFav().subscribe((fav) => {
      this.favoritos = fav;
      this.gamesLength = fav.length
      /* setTimeout(() => {
        this.animate.requestEnded();
      }, 7000)
      this.animate.requestStarted(); */
    })
  }

  removeFav(favorito: Favorito): void {
    this.favoritos = this.favoritos.filter((f) => favorito.name !== f.name)
    this.favoriteService.removeFav(favorito.id).subscribe()
    console.log(`removendo ${favorito.name}`);

  }

  smallerRate() {
    this.favoritos = this.favoritos.sort(function (menor, maior) {
      return menor.val3 - maior.val3
    })
  }

  changeRating(favorito: Favorito, id: Number) {
    return this.favoriteService.changeRating(favorito, id).subscribe()
  }

}

