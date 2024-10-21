console.log('JS carregado')

const ctx = document.getElementById('myChart').getContext('2d');

let labelsX = ["Resultado Geral", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let valoresX = [280, 270, 800, 700, 650, 750, 450, 240, 900, 1000, 740, 950]

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [labelsX],
    datasets: [{
      label: 'Lucro (R$)',
      data: [valoresX],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});