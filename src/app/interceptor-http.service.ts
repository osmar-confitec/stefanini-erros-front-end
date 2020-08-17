import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {  ToastrService } from 'ngx-toastr';
import { Noty } from './noty';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHttpService implements HttpInterceptor {


  constructor(private toastr: ToastrService, private SpinnerService: NgxSpinnerService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.SpinnerService.show();
     console.log("----request----");

     console.log(req);

     console.log("--- end of request---");

    return next.handle(req)
    .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.SpinnerService.hide();
            console.log(" all looks good");
            // http response status code
            console.log(event.status);
          }
        }, error => {
          this.SpinnerService.hide();

          /*bad request*/
          if (error.status === 400)
          {
            let resp:Noty[] =  error.error.falhas.map(function(task, index, array){
                let not = new Noty();
                not.message = task.message;
                return not;

            });
            window.alert(` erros! ${resp.map(x=>x.message).join('\n')} `);

          }
         // http response status code
           console.error(error);

            console.log("----response----");
            console.error("status code:");
            console.error(error.status);
            console.error(error.message);
            console.log("--- end of response---");

        })
      )


  }
}
