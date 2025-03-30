let Celcius = document.getElementById('C');
let fahrenheit = document.getElementById('F');
let Kelvin = document.getElementById('K');

// Function to convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Celsius to Kelvin

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}


// Function to convert Fahrenheit to Kelvin

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

// Function to convert Kelvin to Celsius

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Event listener for Celsius input

C.addEventListener('input', function() {
    let celsius = parseFloat(C.value);
    let fahrenheit = celsiusToFahrenheit(celsius);
    let kelvin = celsiusToKelvin(celsius);

    F.value = fahrenheit.toFixed(2);
    K.value = kelvin.toFixed(2);
});

// Event listener for Fahrenheit input

F.addEventListener('input', function() {
    let fahrenheit = parseFloat(F.value);
    let celsius = fahrenheitToCelsius(fahrenheit);
    let kelvin = fahrenheitToKelvin(fahrenheit);

    C.value = celsius.toFixed(2);
    K.value = kelvin.toFixed(2);
});

// Event listener for Kelvin input

K.addEventListener('input', function() {
    let kelvin = parseFloat(K.value);
    let celsius = kelvinToCelsius(kelvin);
    let fahrenheit = kelvinToFahrenheit(kelvin);

    C.value = celsius.toFixed(2);
    F.value = fahrenheit.toFixed(2);
});