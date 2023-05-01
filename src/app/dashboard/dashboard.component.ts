import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexStroke, ApexGrid, ChartType, } from "ng-apexcharts";
import { TreeNode } from 'primeng/api';



export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};
interface City {
    name: string;
    code: string;
}
interface Year {
    name: string;
    code: string;
}


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    @ViewChild("chart") chart!: ChartComponent;
    public chartType!: ChartType;
    public chartOptions: ChartOptions;

    data: any;
    options: any;
    data1: any;
    options1: any;
    data2: any
    options2: any;

    data3: any;

    options3: any;

    cities!: City[];

    selectedCity!: City;
    
    Years!: Year[];

    selectedYears!: City;

    public hideToggleImage: boolean = true;



    date!: Date[];
    files1!: TreeNode[];
    files2!: TreeNode[];
    files3!: TreeNode[];

    cols!: any[];
    tabledata!: any[];
    tabledata1!: any[];



    ngOnInit() {
        this.charts();
        this.polar();
        this.chartss();
        this.Days();
        this.TableFormat()
        this.Table2Format()
        this.Table3Format()
        this.RadarChart()
        this.months( )

    }
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Revenues",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                }
            ],
            chart: {
                height: 210,
                type: "line",
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Product Trends by Month",
                align: "left"
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep"
                ]
            }
        };
    }




    charts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: '2021 Revenue',
                    backgroundColor: documentStyle.getPropertyValue('--teal-300'),
                    borderColor: documentStyle.getPropertyValue('--teal-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: '2022 Revenue',
                    backgroundColor: documentStyle.getPropertyValue('--teal-700'),
                    borderColor: documentStyle.getPropertyValue('--teal-900'),
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


    polar() {
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

    chartss() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data2 = {
            labels: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat',],
            datasets: [
                {
                    label: '2021 Revenue',
                    backgroundColor: documentStyle.getPropertyValue('--teal-300'),
                    borderColor: documentStyle.getPropertyValue('--blue-100'),
                    data: [65, 59, 80, 81, 56, 55,]
                },

            ]
        };

        this.options2 = {
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


    Days() {
        this.cities = [
            { name: 'Today', code: 'TD' },
            { name: 'Tomorrow', code: 'TW' },
            { name: 'Yesterday', code: 'YEST' },

        ];
    }


    TableFormat() {
        this.files1 = [];
        const images = ["https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            "https://mirimstudent25.files.wordpress.com/2013/10/movietalk-despicableme630-jpg_002144.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/JPEG_example_down.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/JPEG_example_down.jpg"];

        for (let i = 0; i < 6; i++) {
            const node = {
                data: {
                    image: images[i],
                    customer: 'Customer ' + (i + 1),
                    product: 'Sunglass ' + (i + 1),
                    invoice: '#DE2548',
                    price: Math.floor(Math.random() * 1000) + 1 + 'Rs'
                },
                children: [
                    {
                        data: {
                            image:images[i],
                            customer: 'Status Update',
                            product: "pending",
                            
                        }
                    }
                ]
            };
            this.files1.push(node);
            console.log("node",node);
            
        }

        this.cols = [
            { field: 'image', },
            { field: 'customer', header: 'Customer' },
            { field: 'product', header: 'Product' },
            { field: 'invoice', header: 'Invoice' },
            { field: 'price', header: 'Price' }
        ];
        
    }
    Table2Format() {
        this.files2 = [];
        const images = ["https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            "https://mirimstudent25.files.wordpress.com/2013/10/movietalk-despicableme630-jpg_002144.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/JPEG_example_down.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/JPEG_example_down.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"];

        for (let i = 0; i < 6; i++) {
            const node = {
                data: {
                    image: images[i],
                    customer: 'Customer ' + (i + 1),
                    product: 'Sunglass ' + (i + 1),
                    invoice: '#DE2548',
                    price: Math.floor(Math.random() * 1000) + 1 + 'Rs'
                },
                children: [
                    {
                        data: {
                            customer: 'Status Update',
                            product: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        }
                    }
                ]
            };
            this.files2.push(node);
        }

        this.tabledata = [
            { field: 'image', },
            { field: 'customer', header: 'Customer' },
            { field: 'product', header: 'Product' },
            { field: 'invoice', header: 'Invoice' },
            { field: 'price', header: 'Price' }
        ];
    }
    Table3Format() {
        this.files3 = [];
        const images = ["https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            "https://mirimstudent25.files.wordpress.com/2013/10/movietalk-despicableme630-jpg_002144.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/JPEG_example_down.jpg",
        ];

        for (let i = 0; i < 3; i++) {
            const node = {
                data: {
                    image: images[i],
                    customer: 'Customer ' + (i + 1),
                    product: 'Sunglass ' + (i + 1),
                    invoice: '#DE2548',
                    price: Math.floor(Math.random() * 1000) + 1 + 'Rs'
                },
                children: [
                    {
                        data: {
                            customer: 'Status Update',
                            product: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        }
                    }
                ]
            };
            this.files3.push(node);
        }
        this.tabledata1 = [
            { field: 'image', },
            { field: 'customer', header: 'Customer' },
            { field: 'product', header: 'Product' },
            { field: 'invoice', header: 'Invoice' },
            { field: 'price', header: 'Price' }
        ];
    }


    RadarChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

        this.data3 = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: '  Sales Data',
                    borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'Sales Data',
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };

        this.options3 = {
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
                        color: textColorSecondary
                    },
                    pointLabels: {
                        color: textColorSecondary
                    }
                }
            }
        };
    }

    months(){
        this.Years = [
            { name: 'Day', code: 'YEST' },
            { name: 'Month', code: 'TD' },
            { name: 'Year', code: 'TW' },
            

        ];
   
    }
}





