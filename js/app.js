let value = null;
do {
    value = prompt('Hay nhap so tu 1 den 10');
    alert('So ban vua nhap la '+value);
    k = parseFloat(value);
    

} while (k>1 && k<10)