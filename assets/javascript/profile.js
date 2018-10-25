var projects = [
    {
        name: "Neighborhood Data",
        link: "https://adambilsky.github.io/Group-Project-1",
        screenshot: "assets/images/neighborhood-data.png",
        description: "Compares crime data from the Chicago data portal among 10-preselected Chicago neighborhoods"
    },
    {
        name: "Train Scheduler",
        link: "https://adambilsky.github.io/Train-Schedule",
        screenshot: "assets/images/train-scheduler.png",
        description: "Updates user-entered schedules using Moment.js"
    },
    {
        name: "Gif-Tastic",
        link: "https://adambilsky.github.io/GifTastic",
        screenshot: "assets/images/gif-tastic.png",
        description: "Searches, displays, stores favorite gifs using dynamic element creation"
    },
    {
        name: "Trivia Quiz",
        link: "https://adambilsky.github.io/Trivia-Game",
        screenshot: "assets/images/trivia-quiz.png",
        description: "Tests the user's knowledge of 80's movie trivia with randomized answer choice order and timers"
    },
    {
        name: "Crystal Collector",
        link: "https://adambilsky.github.io/Crystal-Collector",
        screenshot: "assets/images/crystal-collector.png",
        description: "Number guessing game"
    },

    {
        name: "Psychic Game",
        link: "https://adambilsky.github.io/Psychic-Game",
        screenshot: "assets/images/psychic-game.png",
        description: "Primitive letter-guessing game"
    }

]

$(document).ready(function () {


    var rowCreator = function () {
        for (i = 0; i < projects.length; i++) {
            console.log(projects[i].name);
            console.log(projects[i].link);
            var col = 0;
            var smDiv = $(`
                <div class="col-4">
                    <a href=${projects[i].link} target="_blank">${projects[i].name}<img class="screenshot" src=${projects[i].screenshot} /></a>
                    <p>${projects[i].description}</p>
                </div>
            `);
            
           
            $(".row").append(smDiv);
            // if (col % 3 === 0) {
            //    smDiv.addClass("row");
            //    continue with adding columns
            // }
            // else {
            //     // add new column and elements to row

        }
        col++;
        console.log(smDiv);
    }
    rowCreator();
});