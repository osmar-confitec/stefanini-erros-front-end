import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';
import { Noty } from './noty';
import { ToastrService } from 'ngx-toastr';
export abstract class ServiceBase {

    protected UrlServiceV1: string = environment.apiUrlv1;


    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    constructor(protected toastr: ToastrService )
    {


    }

    protected  tratarRetornoPadrao(response: Response | any)
    {

      let customError: Noty[] = [];

      let not  = new Noty();
      if (response instanceof HttpErrorResponse) {

          if (response.statusText === "Unknown Error") {

              not.message = "Ocorreu um erro desconhecido";
              customError.push(not);
              response.error.errors.falhas = customError;
          }
      }
      if (response.status === 400) {

        window.alert(` erros 400! ${response.error.falhas.map(x=>x.message).join('\n')} `);

        //this.toastr.error( ` erros 400! ${response.error.falhas.map(x=>x.message).join('\n')} `  ,'Mensagem do Sistema');
        return throwError(response);
      }
      if (response.status === 500) {
        //not.message = "Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.";
          //customError.push(not);

          // Erros do tipo 500 não possuem uma lista de erros
          // A lista de erros do HttpErrorResponse é readonly
          //response.error.errors.falhas = customError;
          window.alert(` erros 500! ${response.error.falhas.map(x=>x.message).join('\n')} `);
          //this.toastr.error( ` erros 500! ${response.error.falhas.map(x=>x.message).join('\n')} `  ,'Mensagem do Sistema');
          return throwError(response);
      }

      console.error(response);
      return throwError(response);
    }

    protected extractData(response: any) {
        return response.data || {};
    }


}
