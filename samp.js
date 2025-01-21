function showSizeChart() {
    const sizeChart = document.getElementById('sizeChart');
    const button = document.querySelector('.select-size-button');
    if (sizeChart.style.display === 'none' || sizeChart.style.display === '') {
        sizeChart.style.display = 'block'; 
        sizeChart.scrollIntoView({ behavior: 'smooth' }); 
        button.textContent = "HIDE SIZE CHART"; 
    } else {
        sizeChart.style.display = 'none'; 
        button.textContent = "SELECT SIZE";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#sizeChart tbody tr');
    rows.forEach(row => {
        row.addEventListener('click', () => {
            const uksize = row.cells[0].textContent;
            const usSize =row.cells[1].textContent;
            const euSize =row.cells[2].textContent; 
            selectSize(uksize,usSize,euSize);
        });
    });
});

function selectSize(uksize,usSize,euSize) {
    const selectedSizeDiv = document.getElementById('selectedSize');
    selectedSizeDiv.textContent = `You have selected: ${uksize},${usSize},${euSize}`; 
    const sizeChart = document.getElementById('sizeChart');
    sizeChart.style.display = 'none'; 

    const button = document.querySelector('.select-size-button');
    button.textContent = "SELECT SIZE";
}
