var projects = [
    {
        name: "Neighborhood Data",
        link: "https://adambilsky.github.io/Group-Project-1",
        screenshot: "assets/images/neighborhood-data.png"
    },
    {
        name: "Train Scheduler",
        link: "https://adambilsky.github.io/Train-Schedule",
        screenshot: "assets/images/train-scheduler.png"
    },
    {
        name: "Gif-Tastic",
        link: "https://adambilsky.github.io/GifTastic",
        screenshot: "assets/images/gif-tastic.png"
    },
    {
        name: "Trivia Quiz",
        link: "https://adambilsky.github.io/Trivia-Game",
        screenshot: "assets/images/trivia-quiz.png"
    },
    {
        name: "Crystal Collector",
        link: "https://adambilsky.github.io/Crystal-Collector",
        screenshot: "assets/images/crystal-collector.png"
    },

    {
        name: "Psychic Game",
        link: "https://adambilsky.github.io/Psychic-Game",
        screenshot: "assets/images/psychic-game.png"
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