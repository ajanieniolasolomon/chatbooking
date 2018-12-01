import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent,FirstDirective } from './home/home.component';
import { PayComponent } from './pay/pay.component';
import { PaymentService } from '../share/payment.service';
import { Angular4PaystackModule } from 'angular4-paystack';
@NgModule({
  declarations: [HomeComponent, PayComponent, FirstDirective],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    Angular4PaystackModule,
    MDBBootstrapModule
  ],
  providers: [
PaymentService
  ]
})
export class MainModule { }
