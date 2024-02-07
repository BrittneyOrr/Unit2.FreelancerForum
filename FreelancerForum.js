const names = ["Alice", "Bob", "Jerry", "Sarah"];
const occupations = ["writer", "teacher", "coach", "programmer"];
const prices = [30, 50, 40, 75];
const maxFreelancers = 20;
const freelancers = [
    {
        name: "Alice",
        occupation: "writer",
        price: 30,
    },
    {
        name: "Bob",
        occupation: "teacher",
        price: 50,
    },
];

const addFreelancerIntervalId = setInterval(addFreelancer, 5000);

render();

function render(){
    const freeLancer = document.querySelector("#freelancers");
    const freeLancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.classList.add(freelancers.name, freelancers.occupation, freelancers.price);
        return element;
    });
    freeLancer.replaceChildren(...freeLancerElements);

};

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    
    freelancers.push({name, occupation, price});
    
    render();
    
    }
    if(freelancers.length >= maxFreelancers){
        clearInterval(addFreelancerIntervalId);
}

function getSum(price) {
    let sum = 0
    for(let i = 0; i < price.length; i++){
      sum = sum += price[i];
    }
    return sum;
  }

function averagePrice()
