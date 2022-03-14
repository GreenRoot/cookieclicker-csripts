setInterval(() => {
	document.getElementById('bigCookie').click()
	}, 50
)

function checkShimer() {
    if (document.getElementsByClassName('shimmer').length > 0) {
        console.log('Печенька на экране!')
        document.getElementsByClassName('shimmer')[0].click()
    } else {
        console.log('Печенек нет ((')
    }
}

setInterval(checkShimer, 1000)

document.getElementById('topBar').remove()
document.getElementById('commentsTextBelow').remove()
document.getElementById('commentsText').remove()

function buildsCalc() {
    let nextUpgradePrice = document.querySelector("#tooltip > div > div:nth-child(2) > span");
    let eachTemplateProduces = document.querySelector("#tooltip > div > div.data > b:nth-child(1)");
    let nextUpgradePriceInt = nextUpgradePrice.innerHTML.replace(/\D/gm,"");
    let eachTemplateProducesInt = eachTemplateProduces.innerHTML.replace(/\D/gm,"");
    const toolTips = document.querySelector("#tooltip > div > div:nth-child(2) > span")
    const toolTip = document.querySelector("#tooltip > div > div.description")
    let benefit = NaN
    
    if ( (toolTips !== null) && (eachTemplateProduces !== null) ) {
        benefit = (nextUpgradePriceInt / eachTemplateProducesInt).toFixed()
        if (document.getElementsByClassName('calcHas').length <= 0) {
            toolTip.insertAdjacentHTML('beforeend', ` <b class="calcHas" style='color: green; font-size: 13px'>${benefit}</b>`)
        }
    }
}

setInterval(buildsCalc, 10)
