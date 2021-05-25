document.addEventListener('DOMContentLoaded', ()=>{
    
    const toggleSwitch = document.querySelector('input[type="checkbox"]')
    const monthlyPrices = document.querySelectorAll('.monthly')
    const annualPrices = document.querySelectorAll('.yearly')

    toggleSwitch.addEventListener('change', ()=>{
        if (toggleSwitch.checked){
            monthlyPrices.forEach((monthlyPrice)=>{
                monthlyPrice.classList.add('visible')
                monthlyPrice.classList.remove('hidden')
            annualPrices.forEach((annualPrice)=>{
                annualPrice.classList.add('hidden')
                annualPrice.classList.add('visible')
            })})
        }else{
            annualPrices.forEach((annualPrice)=>{
                annualPrice.classList.add('visible')
                annualPrice.classList.remove('hidden')
            monthlyPrices.forEach((monthlyPrice)=>{
                monthlyPrice.classList.add('hidden')
                monthlyPrice.classList.remove('visible')
            })
           })
        }
    })
});
