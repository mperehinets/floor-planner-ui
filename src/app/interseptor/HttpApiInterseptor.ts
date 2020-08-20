import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../environments/environment.prod';


@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {

  constructor(private notifier: ToastrService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({url: environment.apiBaseUrl + req.url});
    return next.handle(apiReq).pipe(
      catchError(err => {
        if (err.error?.errors) {
          this.notifier.error(err.error.errors, 'ERROR');
        } else {
          this.notifier.error('Something want wrong !!! :(', 'ERROR');
        }
        return throwError(err);
      })
    );
  }
}
