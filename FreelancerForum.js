const names = ["Alice", "Bob"];
const occupations = ["writer", "teacher"];
const prices = [30, 50];
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
    const freelancer = document.querySelector("#freelancers");
    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.classList.add("freelancers", freelancer.names, freelancer.occupations, freelancer.prices);
        return element;
    });
    freelancer.replaceChildren(...freelancerElements);
    render();

};

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    freelancers.push({name, occupation, price});
    render();

    if(freelancers.length === maxFreelancers){
        clearInterval(addFreelancerIntervalId);
    }
}
