import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoomsComponent} from './component/rooms/rooms.component';
import {AppMaterialModule} from './app-material/app-material.module';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpApiInterceptor} from './interseptor/HttpApiInterseptor';
import {ToastrModule} from 'ngx-toastr';
import {CreateEditRoomComponent} from './component/create-edit-room/create-edit-room.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {ConfirmDialogComponent} from './component/confirm-dialog/confirm-dialog.component';

const routes: Routes = [
  {path: 'rooms', component: RoomsComponent},
  {path: '', redirectTo: 'rooms', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    CreateEditRoomComponent,
    ConfirmDialogComponent
  ],
  imports: [
    AppMaterialModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      resetTimeoutOnDuplicate: true,
      preventDuplicates: true,
      positionClass: 'toast-top-right',
    }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpApiInterceptor, multi: true},
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        ...new MatDialogConfig(),
        maxWidth: '100vm',
        maxHeight: '100vm',
        panelClass: 'responsive-dialog'
      } as MatDialogConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
