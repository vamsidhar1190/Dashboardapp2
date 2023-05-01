import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

ngOnInit(): void {
  
}


isSearchBarOpen = false;
showSearchInput= true


openSidebar: boolean = true;

menuSidebar = [
  {
    link_name: "Dashboard",
    link: "/dashboard",
    icon: "bx bx-grid-alt",
    sub_menu: []
  }, {
    link_name: "Apps",
    link: null,
    icon: "bx bx-aperture",
    sub_menu: [
      {
        link_name: "Data 1",
        link: "data1",
      }, {
        link_name: "Data 2",
        link: "data2",
      }, 
    ]
  }, {
    link_name: "UI Kits",
    link: null,
    icon: "bx bx-book-alt",
    sub_menu: [
      {
        link_name: "Data 3",
        link: "data3",
      }, {
        link_name: "Data 4",
        link: "/posts/login-form",
      }, 
    ]
  }, {
    link_name: "Forms",
    link: "/forms",
    icon: "bx bx-food-menu",
    sub_menu: []
  }, {
    link_name: "Boards",
    link: "/boards",
    icon: "bx bx-chalkboard",
    sub_menu: []
  }, {
    link_name: "Products",
    link: null,
    icon: "bx bxl-product-hunt",
    sub_menu: [
      {
        link_name: "Data 5",
        link: "Data",
      }, {
        link_name: "Data",
        link: "/hello",
      }, {
        link_name: "Data 7",
        link: "data",
      }
    ]
  }, {
    link_name: "Cards",
    link: "/cards",
    icon: "bx bxs-credit-card",
    sub_menu: []
  }, {
    link_name: "Tables",
    link: "/tables",
    icon: "bx bx-table",
    sub_menu: []
  }, {
    link_name: "Maps",
    link: "/maps",
    icon: "bx bxs-map-pin",
    sub_menu: []
  }
]


showSubmenu(itemEl: HTMLElement) {
  itemEl.classList.toggle("showMenu");
}

isExpanded = false;

toggleSidebar() {
  this.isExpanded = !this.isExpanded;
}


}
