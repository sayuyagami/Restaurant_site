import { Component,Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { MenulistService } from '../menulist.service';
import { UsercartlistService } from '../usercartlist.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input("parentData") public restrtname=[] as any;
  public restrtid=[] as any;
  public rstrtname=[] as any;
  public storemenulst=[] as any;
  public returnmenudata=[] as any;
  public menurestrtname=[] as any;

  constructor(private _menuservice: MenulistService,private route :ActivatedRoute,private _cartservice:UsercartlistService) { }

async ngOnInit(): Promise<void> {
    this.restrtid = this.route.snapshot.params['id'];
    
    
      this._menuservice.getMenu().subscribe( data => {
      this.storemenulst = [...data];
      this.returnmenudata=this.storemenulst.filter((e: { rstid: any; }) => e.rstid ==  this.restrtid)
      this.restrtname = this.returnmenudata.map((t: { rstname: any; })=>t.rstname)
      this.menurestrtname=this.restrtname[0]
      //console.log(this.returnmenudata)
    });
  }
  
  addtocart(item: any){
    this._cartservice.addtoCart(item);
  }
}
