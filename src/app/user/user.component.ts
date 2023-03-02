import { Component, OnInit } from '@angular/core';
import { UsercartlistService } from '../usercartlist.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastService } from '../toastservice';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : UsercartlistService,private snackBar: MatSnackBar,private toastdialog: ToastService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  orderplaced(){
    this.cartService.removeAllCart();
    this.toastdialog.open("Order has been placed Successfully", "OK");
    //alert("Your order has been placed Successfully,Have a Great Day!!")
  }

}
