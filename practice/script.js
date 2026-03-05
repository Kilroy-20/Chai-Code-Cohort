function startCompany(){
    function ca(name){
        return `Name of your company is ${name}`;
    }
    return ca;
};

console.log(startCompany());
const getMeACompany = startCompany();
console.log(getMeACompany('SEF'));