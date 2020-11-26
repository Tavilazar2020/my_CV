let slider = document.getElementById("slider_qt");
let selector = document.getElementById("selector");
let SelectValue = document.getElementById("SelectValue");

SelectValue.innerHTML = slider.value;

slider_qt.oninput = function () {
  SelectValue.innerHTML = this.value;
  selector.style.left = this.value + "%";
};

// Funtions Ms-------------//

let slider_ms = document.getElementById("slider_ms");
let selector_MS_O = document.getElementById("selector_MS_O");
let SelectValue_MS_O = document.getElementById("SelectValue_MS_O");

SelectValue_MS_O.innerHTML = slider_ms.value;

slider_ms.oninput = function () {
  SelectValue_MS_O.innerHTML = this.value;
  selector_MS_O.style.left = this.value + "%";
};

// ------------funtions negot----------//
let slider_neg = document.getElementById("slider_neg");
let selector_neg = document.getElementById("selector_neg");
let SelectValue_neg = document.getElementById("SelectValue_neg");

SelectValue_neg.innerHTML = slider_neg.value;

slider_neg.oninput = function () {
  SelectValue_neg.innerHTML = this.value;
  selector_neg.style.left = this.value + "%";
};

// ------------funtions train----------//
let slider_train = document.getElementById("slider_train");
let selector_train = document.getElementById("selector_train");
let SelectValue_train = document.getElementById("SelectValue_train");

SelectValue_train.innerHTML = slider_train.value;

slider_train.oninput = function () {
  SelectValue_train.innerHTML = this.value;
  selector_train.style.left = this.value + "%";
};

// ------------funtions train----------//
let slider_prog = document.getElementById("slider_prog");
let selector_prog = document.getElementById("selector_prog");
let SelectValue_prog = document.getElementById("SelectValue_prog");

SelectValue_prog.innerHTML = slider_prog.value;

slider_prog.oninput = function () {
  SelectValue_prog.innerHTML = this.value;
  selector_prog.style.left = this.value + "%";
};

// ------------funtions train----------//
let slider_cust = document.getElementById("slider_cust");
let selector_cust = document.getElementById("selector_cust");
let SelectValue_cust = document.getElementById("SelectValue_cust");

SelectValue_cust.innerHTML = slider_cust.value;

slider_cust.oninput = function () {
  SelectValue_cust.innerHTML = this.value;
  selector_cust.style.left = this.value + "%";
};

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

// COURSELL
