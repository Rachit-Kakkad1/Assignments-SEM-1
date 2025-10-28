document.addEventListener('DOMContentLoaded', function() {
    
    
    const countrySelect = document.getElementById('country');
    const indiaInfoText = document.getElementById('india-info');


    countrySelect.addEventListener('change', function() {
        
        if (countrySelect.value === 'india') {
           
            indiaInfoText.style.display = 'block';
        } else {
           
            indiaInfoText.style.display = 'none';
        }
    });

});