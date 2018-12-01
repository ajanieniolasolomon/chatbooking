import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaymentService } from '../../share/payment.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  hero$;
  show= false;
  email;
  ref;
  number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
private service: PaymentService
  ) {}

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.makepayment2(params.get('id')))

    ).subscribe((res:any) => {
this.show = true;
const {email, _id, mobile} = res.fulfillmentText;
this.email = email;
this.ref = _id;
this.number = mobile;

    }, err => console.log(err));

  }
 async paymentDone(event) {
    console.log('done');
    console.log(event);
    await this.service.update(this.ref, this.number).subscribe(res => {
console.log("res");
    });
  }
  paymentCancel() {
    console.log("close");
  }
}
