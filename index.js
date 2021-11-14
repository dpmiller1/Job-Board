var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var data = JSON.parse(xhttp.responseText);
       var container = document.getElementById('container');
       data.slice(1).forEach(function(row, i) {
           console.log(row, i);
           var rowDiv = document.createElement('div');
           rowDiv.classList.add('row');
           rowDiv.innerHTML = `
            <div class='logo-section'>
                <img class='logo' src=${row.company_logo}>
            </div>
            <div class='left-section'>
                <h4 class='company'>${row.company}</h4>
                <h4 class='position'>${row.position}</h4>
                <p class='location'>${row.location}</p>
            </div>
            <div class='middle-section'>
                ${row.tags.map(function(tag) {
                    return `<span class='tag'>${tag}</span>`
                }).join('')}
            </div>
            <div class='right-section'>
                <a href=${row.url}>
                    <button class='apply'>Apply</button>
                </a>
            </div>
           `;
           container.appendChild(rowDiv);
       })
    }
};
xhttp.open("GET", "https://remoteok.io/api", true);
xhttp.send();