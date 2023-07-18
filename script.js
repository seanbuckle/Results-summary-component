window.addEventListener('load', function() {
    url = "data.json";
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const rImg = data[0].icon;
        const mImg = data[1].icon;
        const vImg = data[2].icon;
        const viImg = data[3].icon;
        const rTxt = data[0].category;
        const mTxt = data[1].category;
        const vTxt = data[2].category;
        const viTxt = data[3].category;
        const rScore = data[0].score;
        const mScore = data[1].score;
        const vScore = data[2].score;
        const viScore = data[3].score;
        document.getElementById("rImg").src = rImg;
        document.getElementById("mImg").src = mImg;
        document.getElementById("vImg").src = vImg;
        document.getElementById("viImg").src = viImg;
        document.getElementById("rTxt").innerHTML = rTxt;
        document.getElementById("mTxt").innerHTML = mTxt;
        document.getElementById("vTxt").innerHTML = vTxt;
        document.getElementById("viTxt").innerHTML = viTxt;
        document.getElementById("rScore").innerHTML = rScore;
        document.getElementById("mScore").innerHTML = mScore;
        document.getElementById("vScore").innerHTML = vScore;
        document.getElementById("viScore").innerHTML = viScore;
    })
});
