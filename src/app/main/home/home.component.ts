import { Component, OnInit, Directive, HostBinding, ElementRef } from '@angular/core';
@Directive({
selector: '[me]'
})
export class FirstDirective {
constructor(el:ElementRef ){
  el.nativeElement.style.backgroundColor='transparent';
  el.nativeElement.style.color = '#ff8800';
console.dir(  el.nativeElement.style);

  window.onscroll = () => {
   if (window.scrollY <= 0) {
    el.nativeElement.style.backgroundColor = 'transparent';
    el.nativeElement.style.color = '#ff8800';
   } else {
    el.nativeElement.style.backgroundColor = '#777';
  
   }
   }


}


}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
// window.onscroll=()=>{
//   console.log(window.scrollY)
// }
  }

}
