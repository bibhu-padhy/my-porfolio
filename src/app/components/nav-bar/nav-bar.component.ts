import { Component, OnInit } from '@angular/core';
import { NavBarService } from './service/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navItems = this.navService.getNavItems()

  constructor(
    public navService: NavBarService
  ) { }

  ngOnInit() {
    this.navService.getNavItems()
      .subscribe(res => {
        console.log(res);
      });
  }

}
