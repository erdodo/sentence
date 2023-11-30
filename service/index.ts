const baseUrl = "https://app.nocodb.com/api/v2/"
export function listRecords(){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Xc-Token", "IGHVVN48nZHDblBmfEVaBo_E9tVQwFoWGXiwGheT");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("tables/m5t76r44fzi7lth/records?viewId=vwwqs9abevpkzm6a&limit=1000", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}