import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  data: any;

  options: any;
  data1: any;

  options1: any;
  ngOnInit() {
    this.charts();
    this.polar();
    
  }

charts(){
  const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: '2021 Revenue',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: '2022 Revenue',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }

            }
        };
    }


polar(){
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
  this.data1 = {
      datasets: [
          {
              data: [11, 16, 7, 3, 14],
              backgroundColor: [
                  documentStyle.getPropertyValue('--red-500'),
                  documentStyle.getPropertyValue('--green-500'),
                  documentStyle.getPropertyValue('--yellow-500'),
                  documentStyle.getPropertyValue('--bluegray-500'),
                  documentStyle.getPropertyValue('--blue-500')
              ],
              label: 'My dataset'
          }
      ],
      // labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
  };
  
  this.options1 = {
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          r: {
              grid: {
                  color: surfaceBorder
              }
          }
      }
  };
}
}


