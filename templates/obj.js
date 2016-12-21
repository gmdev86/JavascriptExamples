(function(){

    // Object we’re working with
    var dataObject = {
        0: {"id":5,"name":"Basecamp","city":"Chicago","state":"IL","url":"https://basecamp.com/"},
        1: {"id":17,"name":"Google","city":"Mountain View","state":"CA","url":"http://google.com/"}
    };

    console.log(dataObject);

    // Cache of the template
    var template = document.getElementById("template-list-item");
    // Get the contents of the template
    var templateHtml = template.innerHTML;
    // Final HTML variable as empty string
    var listHtml = "";

    // Loop through dataObject, replace placeholder tags
    // with actual data, and generate final HTML
    for (var key in dataObject) {
        listHtml += templateHtml.replace(/{{id}}/g, dataObject[key]["id"])
                                .replace(/{{name}}/g, dataObject[key]["name"])
                                .replace(/{{city}}/g, dataObject[key]["city"])
                                .replace(/{{state}}/g, dataObject[key]["state"])
                                .replace(/{{url}}/g, dataObject[key]["url"]);
    }

    // Replace the HTML of #list with final HTML
    document.getElementById("list").innerHTML = listHtml;

}());