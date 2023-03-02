import { Component } from '@angular/core';
import { UsercartlistService } from './usercartlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant';
  public totalItem : number = 0;
  constructor(private cartservice : UsercartlistService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}
