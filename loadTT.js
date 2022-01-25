let TT = [
    {
        "day": "Monday",
        "classes": {
            "8:00 DESIGN AND ANALYSIS OF ALGORITHM (P)": "https://tiet.zoom.us/my/mee13",
            "9.40 MANUFACTURING PROCESSES (L)": "https://tiet.zoom.us/my/mee13",
            "10:30 COMPUTER NETWORKS (L)": "https://tiet.zoom.us/my/csed2",
            "11:20 ARTIFICIAL INTELLIGENCE (L) ": "https://tiet.zoom.us/my/csed4",
            "12:10 DESIGN AND ANALYSIS OF ALGORITHM (L)": "https://tiet.zoom.us/my/csed4"
        }
    },
    {
        "day": "Tuesday",
        "classes": {
            "8:00 ENGINEERING DESIGN 2 (P)": "https://tiet.zoom.us/my/eced13"
        }
    }
]
let container = document.querySelector('.ttContainer');
container.innerHTML = TT.map(value => `
<button class="tt">${value.day}</button>
    <div class="ttContent">
    ${Object.keys(value.classes).map((key, index) => 
    `<label for="s">${key}: </label>
    <a href="" class="ttlink" id="s">${value.classes[key]}</a>`).join("<br />")}</div>`).join("<br/>")