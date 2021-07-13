var sellingprice=199;
var listingprice=799;
discount= ( (listingprice - sellingprice) / listingprice)*100;
displaydiscount=Math.round(discount);
console.log(displaydiscount +"% off");
var desicion = listingprice > sellingprice;
console.log(typeof desicion);