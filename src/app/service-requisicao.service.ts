import { RequisicaoClass } from './requisicao-class';
import { Noty } from './noty';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {  ServiceBase } from   './service-base';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequisicaoService extends ServiceBase {

  constructor(private http: HttpClient, protected  toastr: ToastrService ) { super(toastr); }

  obterRequisicao(): Observable<RequisicaoClass>
  {
    return this.http
              .get<RequisicaoClass>(`${this.UrlServiceV1}/requisicao/retornarok`)
              .pipe(catchError(super.tratarRetornoPadrao));
  }

}
