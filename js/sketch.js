
let rValueJudg = ['Do', 'Do Not', 'Always', 'Never', 'Sometimes']
let rVerb = ['Strike', 'Outrun', 'Overthink', 'Forget', 'Remember', 'Listen To', 'Speak Over', 'Forgive', 'Repent', 'Distill', 'Inflate'];
let rSubj = ['Yourself', 'The Other', 'Your Neighbor', "Them", "Us"];
let rSubj2 = ['At Dusk', 'Before', 'After']
let rCon2 = ["Doing", "Feeding", "Feeling", "Giving", "Donating", "Breathing", "Exhaling"]
let rAdj = ['Good', 'Fast', 'Sad'];

function newQuote() {
    let one = rSelector(rValueJudg);
    let two = rSelector(rVerb);
    let three = rSelector(rAdj);
    // console.log(one);
    console.log(one + " " + two + " " + three);
    let item = document.createElement("div");
    let itemQuote = document.createTextNode(one + " " + two + " " + three);
    item.appendChild(itemQuote);
    document.getElementById("quotes").appendChild(item); 
}

function rSelector(words) {
    rIndex = Math.floor(Math.random(1) * words.length);
    word = words[rIndex];
    console.log(rIndex);
    return word;
}