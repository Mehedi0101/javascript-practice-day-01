function monthlySavings(payments,livingCost){
    if(typeof(payments) != "object" || typeof(livingCost) != number){
        return "invalid input"
    }
    var savings = 0;
    for(p of payments){
        if(p >= 3000){
            var tax = (20/100)*p;
            savings += (p-tax);
        }
        else{
            savings += p;
        }
    }
    savings -= livingCost;
    if(savings >= 0) return savings;
    else return "earn more";
}