import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KnobModule } from 'primeng/knob';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { NgApexchartsModule } from "ng-apexcharts";
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TreeTableModule } from 'primeng/treetable';
import { Data1Component } from './data1/data1.component';
import { Data2Component } from './data2/data2.component';
import { Data3Component } from './data3/data3.component';
import { Data4Component } from './data4/data4.component';
import { Data5Component } from './data5/data5.component';
import { Data6Component } from './data6/data6.component';
import { Data7Component } from './data7/data7.component';
import { FormsComponent } from './forms/forms.component';
import { BoardsComponent } from './boards/boards.component';
import { CardsComponent } from './cards/cards.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/maps.component';




   


 









@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    Data1Component,
    Data2Component,
    Data3Component,
    Data4Component,
    Data5Component,
    Data6Component,
    Data7Component,
    FormsComponent,
    BoardsComponent,
    CardsComponent,
    TablesComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TagModule,
    BadgeModule,
    ToggleButtonModule,
    ChartModule,
    NgApexchartsModule,
    ProgressBarModule,
    DividerModule,
    DropdownModule,
    CalendarModule,
    TreeTableModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
