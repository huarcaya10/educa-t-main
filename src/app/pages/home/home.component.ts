import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  seleccionados: string []=[];
  constructor(private storeService: StoreService) {
    this.seleccionados=storeService.seleccionados;
   }

  ngOnInit(): void {
  }

}
