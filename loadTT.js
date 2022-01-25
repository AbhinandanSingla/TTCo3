let TT = [
    {
        "day": "Monday",
        "classes": {
            "8:00   DESIGN AND ANALYSIS OF ALGORITHM (P)": "https://tiet.zoom.us/my/mee13",
            "9:40   MANUFACTURING PROCESSES (L)": "https://tiet.zoom.us/my/mee13",
            "10:30  COMPUTER NETWORKS (L)": "https://tiet.zoom.us/my/csed2",
            "11:20  ARTIFICIAL INTELLIGENCE (L) ": "https://tiet.zoom.us/my/csed4",
            "12:10  DESIGN AND ANALYSIS OF ALGORITHM (L)": "https://tiet.zoom.us/my/csed4",
            "1:50	MANUFACTURING PROCESSES (P)": "https://tiet.zoom.us/my/mee10",
            "3:30	ARTIFICIAL INTELLIGENCE (P)": "https://tiet.zoom.us/my/csed2"
        }
    },
    {
        "day": "Tuesday",
        "classes": {
            "8:00   ENGINEERING DESIGN 2 (P)": "https://tiet.zoom.us/my/eced13",
            "2:40   DATABASE MANAGEMENT SYSTEM (L)": "https://tiet.zoom.us/my/csed3",
            "3:30   ARTIFICIAL INTELLIGENCE (L)": "https://tiet.zoom.us/my/csed3",
            "4:20	COMPUTER NETWORKS (L)": "https://tiet.zoom.us/my/csed6"
        }
    }, {
        "day": "Wednesday",
        "classes": {
            "8:00	COMPUTER NETWORKS (P)": "https://tiet.zoom.us/my/csed6",
            "9:40	DATABASE MANAGEMENT SYSTEM (P)": "https://tiet.zoom.us/my/csed1",
            "11:20	MANUFACTURING PROCESSES (L)": "https://tiet.zoom.us/my/mee10",
            "2:40	MEASUREMENT SCIENCE AND TECHNIQUES (L)": "https://tiet.zoom.us/my/eied4",
            "3:30	DATABASE MANAGEMENT SYSTEM (L)": "https://tiet.zoom.us/my/csed2",
            "4:20	ARTIFICIAL INTELLIGENCE (L)": "https://tiet.zoom.us/my/csed2"
        }
    }, {
        "day": "Thursday",
        "classes": {
            "8:00	DESIGN AND ANALYSIS OF ALGORITHM (L)": "https://tiet.zoom.us/my/csed3",
            "8:50	DATABASE MANAGEMENT SYSTEM (L)": "https://tiet.zoom.us/my/csed1",
            "2:40	MEASUREMENT SCIENCE AND TECHNIQUES (L)": "https://tiet.zoom.us/my/eied5",
            "3:30   No link provided": "https://tiet.zoom.us/my/eied(x)",
        }

    }, {
        "day": "Friday", "classes": {
            "8:00	MEASUREMENT SCIENCE AND TECHNIQUES (L)": "https://tiet.zoom.us/my/eied4",
            "1:50	DESIGN AND ANALYSIS OF ALGORITHM (L)": "https://tiet.zoom.us/my/csed4",
            "2:40	ENGINEERING DESIGN 2 (L)": "https://tiet.zoom.us/my/csed7",
            "3:30	ENGINEERING DESIGN 2 (P)": "https://tiet.zoom.us/my/csed4"
        }
    }
]

let container = document.querySelector('.ttContainer');
container.innerHTML = TT.map(value => `
<button class="tt">${value.day}</button>
    <div class="ttContent">
    ${Object.keys(value.classes).map((key, index) =>
    `<label class="TTHeading">${key}: </label>
    <a href="${value.classes[key]}" class="ttlink">${value.classes[key]}</a>`).join("<br />")}</div>`).join("<br/>")