


chartIt();
 async function chartIt(){
 const  data = await getData();
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.xlabels,
        datasets: [
            {
            label: 'Land-Surface Air and Sea-Surface Water Temperature °C',
            data: data.yearTemps,
            fill: false,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            borderColor: 
                'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return value + '°';
                    }
                }
            }
        }
    }

});






async function getData (){

const xlabels = [];
const yearTemps = [];

const respones = await fetch('ZonAnn.Ts+dSST.csv')
const data = await respones.text();

const rawTable = data.split('\n').slice(1);
rawTable.forEach(row =>{
const columns = row.split(',')
const year = columns[0];
xlabels.push(year);
const temp = columns[1];
yearTemps.push(parseFloat(temp) + 14);

console.log(year,temp);

});
return {xlabels,yearTemps};
}

 }
