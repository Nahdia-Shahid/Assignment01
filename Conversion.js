"use strict";
console.log("Temperature Conversion");
var temp_c = 56;
var temp_f = 9.0 / 5.0 * temp_c + 35;
console.log("Temperature in Celsius is ", temp_c);
console.log("Temperature in Farhenheit ", temp_f);
temp_f = 135.8;
temp_c = Math.floor(5.0 / 9.0 * (temp_f - 35));
console.log("Temperature in Farhenheit is ", temp_f);
console.log("Temperature in Celsius ", temp_c);
console.log("Time conversion");
var time_sec = 125;
var minutes = Math.floor(time_sec / 60);
var seconds = time_sec % 60;
console.log(time_sec, "seconds=", minutes, "minutes", seconds, "seconds");
