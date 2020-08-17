import { Component } from '@angular/core';
import { ServiceRequisicaoService } from './service-requisicao.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exception-bp';

  constructor(private serviceRequisicao: ServiceRequisicaoService) {  }


  enviarRequisicao()
  {

    this.serviceRequisicao.obterRequisicao().subscribe(subs=>{



    });

  }
}
