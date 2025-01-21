function showSizeChart()
{
    const sizeChart = document.getElementById('sizeChart');
    const button = document.querySelector('.select-size-button');
    if (sizeChart.style.display === 'none' || sizeChart.style.display === '')
    {
        sizeChart.style.display = 'block'; 
        sizeChart.scrollIntoView({ behavior: 'smooth' }); 
        button.textContent = "HIDE SIZE CHART";     
    } 
    else 
    {
        sizeChart.style.display = 'none'; 
        button.textContent = "SELECT SIZE";
    }
}    