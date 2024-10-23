document.addEventListener("DOMContentLoaded", (event) => {
  const ctx = document.getElementById("myChart").getContext("2d");

  let labelsX = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let valoresX = [280, 270, 800, 700, 650, 750, 450, 240, 900, 1000, 740, 950];

  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labelsX,
      datasets: [
        {
          label: "Lucro (R$)",
          data: valoresX,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return `R$ ${context.raw}`;
            },
          },
        },
      },
    },
  });

  const filterLinks = document.querySelectorAll(".filter-link");
  filterLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const period = e.target.getAttribute("data-period");
      updateChart(period);
    });
  });

  function updateChart(period) {
    let filteredLabels = [];
    let filteredData = [];
    let chartType = "line";

    if (period === "Resultado Geral") {
      filteredLabels = labelsX;
      filteredData = valoresX;
    } else {
      const index = labelsX.indexOf(period);
      if (index !== -1) {
        filteredLabels = [labelsX[index]];
        filteredData = [valoresX[index]];
        chartType = "bar";
      }
    }

    chart.config.type = chartType;
    chart.data.labels = filteredLabels;
    chart.data.datasets[0].data = filteredData;
    chart.update();
  }
});
