import config from './data.json' assert {type: 'json'};

// FOR INDEX.HTML
function indexHTML() {
    const amount_used = config.prize_taken.total_taken + 1
    for(var i = 1; i < amount_used; i++){
        var element = document.getElementById(i);
        element.classList.add("taken");
        element.classList.remove("transition");
        var element_link = document.getElementById("img" + i + "link");
        element_link.classList.add("taken");
    }
}

// FOR RESULT.HTML (PROCESS DATA + CRY ABOUT IT)
function resultHTML() {
    // Find ID
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    // Check if ID is on list:
    // 7: Third Prize
    // 8: Second Prize
    // 9: First Prize
    // Yes, it's rigged.
    if (id < 7) {
        console.log("normal prize")
    } else if (id < 8) {
        console.log("third prize")
    } else if (id < 9) {
        console.log("second prize")
    } else if (id < 10) {
        console.log("first prize")
    }
    // Find data & display data
    console.log(config.prize.normal[1])
    console.log(config.prize_img[1])
    const getTitle = config.prize.normal[id]
    const getIMG = config.prize_img[id]
    document.getElementById('gift_title').innerText = getTitle
    document.getElementById('gift_img').src = getIMG
    if (id === '21') {
        document.getElementById('gift_img').src = "./prize/grand.jpg"
        document.getElementById('gift_title').innerText = "iPhone 14 Pro Max (守家同款)"

    }
}

// Initiate every single shit.
resultHTML()
indexHTML()
// console.log(config.prize.normal)
// console.log(config.prize.third)
// console.log(config.prize.second)
// console.log(config.prize.grand)