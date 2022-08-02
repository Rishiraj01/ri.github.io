window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl= 'https://resume-rishi.azurewebsites.net/api/GetResumeCounter?code=hvpIFo8bIfG6eqVQXAen9vycGwtgM_GdyZ_V5JCheWsHAzFunUNgew==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
