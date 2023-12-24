const chart = document.querySelector("#charto").getContext('2d');

new Chart(chart, {
    type: 'line',
    data: 
    {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
        {
            label: 'BTC',
            data: [82974, 33537, 17392, 89231, 27281, 82923, 28919, 68932, 72929, 91662, 28192, 47283],
            borderColor: '#C8102E',
            borderWidth: 2
        }, 

        {
            label: 'ETH',
            data: [72637, 28192, 72829, 21028, 63725, 52527, 96737, 72635, 29192, 52727, 95747, 75163],
            borderColor: '#133955',
            borderWidth: 2
        }
        ]
    }, 
    option:{responsive: true}
})