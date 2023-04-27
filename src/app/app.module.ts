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



   


 









@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent
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
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
