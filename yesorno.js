yesOrNo = () => {
    responses = [
        'Yes',
        'No'
    ];
    response = responses[Math.floor(Math.random() * responses.length)]
    document.getElementById('yesornoresponse').innerHTML = response
}