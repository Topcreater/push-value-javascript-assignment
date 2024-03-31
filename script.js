document.addEventListener("DOMContentLoaded", function () {
    // Clear button functionality
    document.getElementById("clearBtn").addEventListener("click", function () {
        document.querySelector("#original .text").value = ""; // Clear input value
    });

    document.getElementById("button1").addEventListener("click", function () {
        alert('This is a simple alert');
    });

    document.getElementById("button2").addEventListener("click", function () {
        var inputText = document.querySelector("#original .text").value;
        if (inputText.trim() === "") {
            alert("Please fill the input.");
        } else {
            document.getElementById("output").textContent = 'Your Name: ' + inputText;
        }
    });

    document.getElementById("button3").addEventListener("click", function () {
        var cities = document.querySelectorAll("#originalCities p");
        var cityList = [];
        cities.forEach(function (city) {
            cityList.push(city.textContent);
        });
        document.getElementById("output").textContent = 'Cities:\n' + cityList.join('\n');
    });

    document.getElementById("button4").addEventListener("click", function () {
        var newCity = document.querySelector("#original .text").value;
        if (newCity.trim() === "") {
            alert("Please fill the input.");
        } else {
            var cityListContainer = document.getElementById("originalCities");
            var newCityElement = document.createElement("p");
            newCityElement.textContent = cityListContainer.children.length + 1 + ") " + newCity; // Add numbering
            cityListContainer.appendChild(newCityElement);
        }
    });

    document.getElementById("button5").addEventListener("click", function () {
        var inputNumber = parseInt(document.querySelector("#original .text").value);
        if (isNaN(inputNumber) || inputNumber <= 0) {
            alert("Please enter a valid number greater than 0.");
        } else {
            var tableContainer = document.getElementById("output");
            var table = document.createElement("table");

            for (var i = 1; i <= 10; i++) {
                var row = table.insertRow();
                var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                cell1.textContent = inputNumber + " * " + i + " = ";
                cell2.textContent = inputNumber * i;
            }

            tableContainer.innerHTML = ''; // Clear existing content
            tableContainer.appendChild(table);
        }
    });
});
