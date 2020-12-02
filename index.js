import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css_mq/style.css";

// CANVAS CHARTS.js
let myChart = document.getElementById("mychart").getContext("2d");
let mylanguageChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["English", "Spanish", "German", "Romanian"],
    datasets: [
      {
        data: [90, 80, 70, 100],
        backgroundColor: ["#5c6e91", "#f9813a", "#839b97", "#bedbbb"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      },
    ],
  },
  options: {
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 8,
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 8,
            beginAtZero: true,
          },
        },
      ],
    },
  },
});



// PIE CHART QUALITY TOOLS

let mySkillsChart = document.getElementById("myPiechart").getContext("2d");
let myQualityToolsChart = new Chart(mySkillsChart, {
  type: "pie",
  data: {
    labels: ["Quality Tools"],
    datasets: [
      {
        data: [90, 10, ],
        backgroundColor: ["#5c6e91"],
        borderColor: [
        ],
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
    Label: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
    },
  },
});

// PIE CHART MS TOOLS

let myMSChart = document.getElementById("myPieMSchart").getContext("2d");
let myMS_Chart = new Chart(myMSChart, {
  type: "pie",
  data: {
    labels: ["MS Office Tools"],
    datasets: [
      {
        data: [70, 30, ],
        backgroundColor: ["#aee6e6"],
        borderColor: [
        ],
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
    },
  },
});

// PIE CHART NEG TOOLS

let myNegChart = document.getElementById("myPieNegchart").getContext("2d");
let myNeg_Chart = new Chart(myNegChart, {
  type: "pie",
  data: {
    labels: ["Negotiation"],
    datasets: [
      {
        data: [60, 40, ],
        backgroundColor: ["#f2dcbb"],
        borderColor: [
        ],
      },
    ],
  },
  options: {
    legend: {
      fontSize: 4,
      display: true,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
    },
  },
});



let myTrainChart = document.getElementById("myPieTrainchart").getContext("2d");
let myTrain_Chart = new Chart(myTrainChart, {
  type: "pie",
  data: {
    labels: ["Trainer",],
    datasets: [
      {
        data: [80, 20, ],
        backgroundColor: ["#93abd3"],
        borderColor: [
        ],
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
    },
  },
});

// ------PROGRAMMING 

let myProgChart = document.getElementById("myPieProgchart").getContext("2d");
let myProg_Chart = new Chart(myProgChart, {
  type: "pie",
  data: {
    labels: ["Programming"],
    datasets: [
      {
        data: [30, 70, ],
        backgroundColor: ["#fd8c04"],
        borderColor: [
        ],
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
    },
  },
});


// ------CUSTOMER

let myCustChart = document.getElementById("myPieCustchart").getContext("2d");
let myCust_Chart = new Chart(myCustChart, {
  type: "pie",
  data: {
    labels: ["Cust./Supplier Interface"],
    datasets: [
      {
        data: [90, 10, ],
        backgroundColor: ["#8ad7c1"],
        borderColor: [
        ],
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
    cutoutPercentage:{
 display:true,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false, //<- set this
          },
          ticks: {
            fontSize: 0,
            beginAtZero: false,
          },
        },
      ],
    },
  },
});












// moving photo


//=======================================================

function myFunction(e) {
  if (e.matches) { // If media query matches    
    document.getElementById("img_move").style.display = 'none'    
    document.getElementById("img_dest").style.display = 'block'

  } else{
    document.getElementById("img_move").style.display = 'block';
    document.getElementById("img_dest").style.display = 'none'
  }
}

var x = window.matchMedia("(max-width: 960px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
//=============================================
