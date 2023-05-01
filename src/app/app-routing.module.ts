import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Data1Component } from './data1/data1.component';
import { Data2Component } from './data2/data2.component';
import { Data3Component } from './data3/data3.component';
import { Data4Component } from './data4/data4.component';
import { Data5Component } from './data5/data5.component';
import { Data6Component } from './data6/data6.component';
import { Data7Component } from './data7/data7.component';
import { FormsComponent } from './forms/forms.component';
import { BoardsComponent } from './boards/boards.component';
import { MapsComponent } from './maps/maps.component';
import { TablesComponent } from './tables/tables.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
{
  path:'',component:SidenavComponent,
  children:[
    {
      path:'',component:DashboardComponent
    },
    {
      path:'dashboard',component:DashboardComponent
    },
    
    {
      path:'data1',component:Data1Component
    },
    {
      path:'data2',component:Data2Component
    },
    {
      path:'data3',component:Data3Component
    },
    {
      path:'data4',component:Data4Component
    },
    {
      path:'data5',component:Data5Component
    },
    {
      path:'data6',component:Data6Component
    },
    {
      path:'data7',component:Data7Component
    },
    {
      path:'forms',component:FormsComponent
    },
    {
      path:'boards',component:BoardsComponent
    },
    {
      path:'cards',component:CardsComponent
    },
    {
      path:'tables',component:TablesComponent
    },
    {
      path:'maps',component:MapsComponent
    },
    
    
    
    
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
