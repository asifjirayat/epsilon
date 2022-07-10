//Get table data
$(document).ready(function () {
    const URL = 'https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json';

    var cookiesData = '';
    $.getJSON(URL, function (data) {
        $.each(data, function (key, value) {
            $.each(value, function (k, v) {
                cookiesData += `<tr>
                <td>${v.name}</td>
                <td>${v.price}</td>
                <td>${v.category}</td>
                </tr>`;
            });
        });
        $('#cookies-table').append(cookiesData);
    });

});

// Sort by name
function sortName() {
    var tbody = $('#tbody');

    tbody.find('tr').sort(function (a, b) {
        if ($('#name_order').val() == 'asc') {
            return $('td:first', a).text().localeCompare($('td:first', b).text());
        }
        else {
            return $('td:first', b).text().localeCompare($('td:first', a).text());
        }

    }).appendTo(tbody);

    var sort_order = $('#name_order').val();
    if (sort_order == "asc") {
        document.getElementById("name_order").value = "desc";
    }
    if (sort_order == "desc") {
        document.getElementById("name_order").value = "asc";
    }
}

//Sort by Category
function sortPrice() {
    var tbody = $('#tbody');

    tbody.find('tr').sort(function (a, b) {
        if ($('#price_order').val() == 'asc') {
            return $('td:last', a).text().localeCompare($('td:last', b).text());
        }
        else {
            return $('td:last', b).text().localeCompare($('td:last', a).text());
        }

    }).appendTo(tbody);

    var sort_order = $('#price_order').val();
    if (sort_order == "asc") {
        document.getElementById("price_order").value = "desc";
    }
    if (sort_order == "desc") {
        document.getElementById("price_order").value = "asc";
    }
}

//Sort by Category
function sortCat() {
    var tbody = $('#tbody');

    tbody.find('tr').sort(function (a, b) {
        if ($('#cat_order').val() == 'asc') {
            return $('td:last', a).text().localeCompare($('td:last', b).text());
        }
        else {
            return $('td:last', b).text().localeCompare($('td:last', a).text());
        }

    }).appendTo(tbody);

    var sort_order = $('#cat_order').val();
    if (sort_order == "asc") {
        document.getElementById("cat_order").value = "desc";
    }
    if (sort_order == "desc") {
        document.getElementById("cat_order").value = "asc";
    }
}