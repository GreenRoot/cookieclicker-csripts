function buildsCalc() {
    let nextUpgradePrice = document.querySelector("#tooltip > div > div:nth-child(2) > span");
    let eachTemplateProduces = document.querySelector("#tooltip > div > div.data > b:nth-child(1)");
    let nextUpgradePriceInt = nextUpgradePrice.innerHTML.replace(/\D/gm,"");
    let eachTemplateProducesInt = eachTemplateProduces.replace(/\D/gm,"");
    const toolTips = document.querySelector("#tooltip > div > div:nth-child(2) > span")
    const toolTip = document.querySelector("#tooltip > div > div.description")
    let benefit = NaN
    
    if ( toolTips !== null && eachTemplateProduces !== null ) {
        benefit = (nextUpgradePriceInt / eachTemplateProducesInt).toFixed()
        if (document.getElementsByClassName('calcHas').length <= 0) {
            toolTip.insertAdjacentHTML('beforeend', ` <b class="calcHas" style='color: green; font-size: 13px'>${benefit}</b>`)
        }
    }
}

setInterval(buildsCalc, 1000)
