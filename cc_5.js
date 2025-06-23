const employees = [
    {name: "Shayna", hourlyRate: 28, hoursWorked: 47},
    {name: "Ryan", hourlyRate: 22, hoursWorked: 40},
    {name: "Thu", hourlyRate: 30, hoursWorked: 50},
    {name: "Kash", hourlyRate: 25, hoursWorked: 45},
];

function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

function calculateOvertimePay(rate, hours) {
    const overtimeHours = Math.max(0, hours - 40);
    return overtimeHours * rate * 1.5;
}

function calculateTaxes (grossPay) {
    return grossPay * 0.15;
}

function processPayroll(employee) {
    const { name, hourlyRate, hoursWorked } = employee;
    const basePay = calculateBasePay(hourlyRate, hoursWorked);
    const overtimePay = calculateOvertimePay(hourlyRate, hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name,
        basePay,
        overtimePay,
        grossPay,
        netPay
    };
}

employees.forEach(employee => {
    const payroll = processPayroll(employee);
    console.log(payroll);
});