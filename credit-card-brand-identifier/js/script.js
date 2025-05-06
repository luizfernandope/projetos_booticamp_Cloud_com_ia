function identifyCardBrand(cardNumber) {
    const cardPatterns = {
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'MasterCard': /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{2}|[3-6][0-9]{3}|7[01][0-9]{2}|720)[0-9]{12})$/,
        'American Express': /^3[47][0-9]{13}$/,
        'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        'JCB': /^(?:2131|1800|35\d{3})\d{11}$/,
        'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        'UnionPay': /^(62[0-9]{14,17})$/
    };

    for (const [brand, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return brand;
        }
    }
    return 'Unknown Brand';
}

document.getElementById('identify-button').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    const cardNumber = document.getElementById('card-number').value;
    const brand = identifyCardBrand(cardNumber);
    document.getElementById('result').textContent = `Card Brand: ${brand}`;
});