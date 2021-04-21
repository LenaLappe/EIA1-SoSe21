var country1: string = "Afrika";
var country2: string = "Europa";
var country3: string = "Südamerica";
var country4: string = "Nordamerica";
var country5: string = "Asien";
var country6: string = "Australien";

var country1_2008: number = 1028;
var country1_2018: number = 1235.5;
var country2_2008: number = 4965.7;
var country2_2018: number = 4209.3;
var country3_2008: number = 1132.6;
var country3_2018: number = 1261.5;
var country4_2008: number = 6600.4;
var country4_2018: number = 6035.6;
var country5_2008: number = 12954.7;
var country5_2018: number = 16274.1;
var country6_2008: number = 1993;
var country6_2018: number = 2100.5;

var wholeWorld2018 = Math.round(country1_2018 + country2_2018 + country3_2018 + country4_2018 + country5_2018 + country6_2018 *100)/100;

var entireWorldAfrica = Math.round(country1_2018 / wholeWorld2018 * 100 *100)/100;
var entireWorldEurope = Math.round(country2_2018 / wholeWorld2018 *100 *100)/100;
var entireWorldSouthAmerica = Math.round(country3_2018 / wholeWorld2018 *100 *100)/100;
var entireWorldNorthAmerica = Math.round(country4_2018 / wholeWorld2018 * 100 *100)/100;
var entireWorldAsia = Math.round(country5_2018 / wholeWorld2018 * 100 *100)/100;
var entireWorldAustralia = Math.round(country6_2018 / wholeWorld2018 * 100 *100)/100;

var Africa2008_2018: number = Math.round((country1_2018 - country1_2008) / country1_2008 * 100 *100)/100;
var Europe2008_2018: number = Math.round((country2_2018 - country2_2008) / country2_2008 * 100 *100)/100;
var SouthAmerica2008_2018: number = Math.round((country3_2018 - country3_2008) / country3_2008 * 100 *100)/100;
var NorthAmerica2008_2018: number = Math.round((country4_2018 - country4_2008) / country4_2008 * 100 *100)/100;
var Asia2008_2018: number = Math.round((country5_2018 - country5_2008) / country5_2008 * 100 *100)/100;
var Australia2008_2018: number = Math.round((country6_2018 - country6_2008) / country6_2008 * 100 *100)/100;

var country1_2008_2018: number = Math.round(country1_2018 - country1_2008 *100)/100;
var country2_2008_2018: number = Math.round(country2_2018 - country2_2008 *100)/100;
var country3_2008_2018: number = Math.round(country3_2018 - country3_2008 *100)/100;
var country4_2008_2018: number = Math.round(country4_2018 - country4_2008 *100)/100;
var country5_2008_2018: number = Math.round(country5_2018 - country5_2008 *100)/100;
var country6_2008_2018: number = Math.round(country6_2018 - country6_2008 *100)/100;

console.log("Die Emission von " + country1 + " ist: " + country1_2018 + " kg CO2" );
console.log("Die Emission von " + country2 + " ist: " + country2_2018 + " kg CO2" );
console.log("Die Emission von " + country3 + " ist: " + country3_2018 + " kg CO2" );
console.log("Die Emission von " + country4 + " ist: " + country4_2018 + " kg CO2" );
console.log("Die Emission von " + country5 + " ist: " + country5_2018 + " kg CO2" );
console.log("Die Emission von " + country6 + " ist: " + country6_2018 + " kg CO2" );


console.log("Relativ zur Gesamtemission der Welt verursacht " + country1 + " damit " + entireWorldAfrica + "%" );
console.log("Relativ zur Gesamtemission der Welt verursacht " + country2 + " damit " + entireWorldEurope + "%" );
console.log("Relativ zur Gesamtemission der Welt verursacht " + country3 + " damit " + entireWorldSouthAmerica + "%" );
console.log("Relativ zur Gesamtemission der Welt verursacht " + country4 + " damit " + entireWorldNorthAmerica + "%" );
console.log("Relativ zur Gesamtemission der Welt verursacht " + country5 + " damit " + entireWorldAsia + "%" );
console.log("Relativ zur Gesamtemission der Welt verursacht " + country6 + " damit " + entireWorldAustralia + "%" );


console.log("Für " + country1 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Africa2008_2018 + "% verändert" );
console.log("Für " + country2 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Europe2008_2018 + "% verändert" );
console.log("Für " + country3 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + SouthAmerica2008_2018 + "% verändert" );
console.log("Für " + country4 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + NorthAmerica2008_2018 + "% verändert" );
console.log("Für " + country5 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Asia2008_2018 + "% verändert" );
console.log("Für " + country6 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Australia2008_2018 + "% verändert" );


console.log("Für " + country1 + " 2018 im Vergleich zu 2008 sind das " + country1_2008_2018 + "kg CO2");
console.log("Für " + country2 + " 2018 im Vergleich zu 2008 sind das " + country2_2008_2018 + "kg CO2");
console.log("Für " + country3 + " 2018 im Vergleich zu 2008 sind das " + country3_2008_2018 + "kg CO2");
console.log("Für " + country4 + " 2018 im Vergleich zu 2008 sind das " + country4_2008_2018 + "kg CO2");
console.log("Für " + country5 + " 2018 im Vergleich zu 2008 sind das " + country5_2008_2018 + "kg CO2");
console.log("Für " + country6 + " 2018 im Vergleich zu 2008 sind das " + country6_2008_2018 + "kg CO2");
