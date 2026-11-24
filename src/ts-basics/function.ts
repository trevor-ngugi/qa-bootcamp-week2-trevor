function calculateTax(income: number, taxYear = 2022): number {
    
    if(taxYear  <2022)
        return income*1.1;
    return income*2.2;
}

//calculateTax(10000);
//calculateTax(10000,2021);

console.log(calculateTax(10000));
console.log(calculateTax(10000,2021));