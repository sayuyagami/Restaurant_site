import { Component, Input, OnInit, Output } from '@angular/core';
import { RestaurantlistService } from '../restaurantlist.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  
  @Input("parentData") public restaurant=[] as any;

  constructor(private _restrtservice:RestaurantlistService,private router :Router) { }

  ngOnInit() {
   this._restrtservice.getRestaurants().subscribe(data=>this.restaurant=data);
  }
 
  onSelect(r:any){
    this.router.navigate(['/restaurants',r.id])
  }
}
