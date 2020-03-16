var ctx = document.getElementById('ratio').getContext('2d');
var totalLive = 66990000;
var confirmed = document.getElementById('confimed').value;
var death = document.getElementById('death').value;
console.log(totalLive);
console.log(confirmed);
console.log(death);
console.log(totalLive - (confirmed + death));
        
        

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['non infected', 'infected', 'dead'],
        datasets: [{
            label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [totalLive-(confirmed+death), confirmed, death]
            }]
        },

        // Configuration options go here
        options: {}
});