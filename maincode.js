var booktitles=["Sorcery of Thorns", "Aurora Rising", "Illuminiae", "The Maze Runner", "Red Queen"]
var wordcount=[121424, 139077, 92520, 116656]
var cover=["2wCEAAkGBxMTEhUSExMVFRUXGBgXGRgYGBgYGxofHRgdHRoZGhgdHSggGBolHRgXIjEiJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGy8mICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf", "https://images-na.ssl-images-amazon.com/images/I/81DOo37t7UL.jpg%22,%22https://images-na.ssl-images-amazon.com/images/I/51UU0FLH1wL._SX330_BO1,204,203,200_.jpg%22,%22https://m.media-amazon.com/images/I/41LHCOh0eBL.jpg"]
var booktitle;
var wpm;
var index = -1;

function inform(){
    booktitle = document.getElementById("bookInput").value;
    wpm = document.getElementById("wpmInput").value;

    for (i = 0; i < booktitles.length; i++) {
        if(booktitle == booktitles[i])
            index = i;
    }
    if(index == -1){
        alert('There is no book with that title');
    }

    var totalminutes = parseInt(wordcount[index]/wpm);
    var hours;
    var minutes;
    if(totalminutes >=60){
        hours = parseInt(totalminutes/60);
        minutes = totalminutes - (totalminutes - hours);
        alert(booktitles[index] + ' will take you ' + hours + ' hour(s) and ' + minutes + ' minute(s) to read because of your average of ' + wpm + ' wpm');
    }else{
        alert(booktitles[index] + ' will take you ' + minutes + ' minute(s) to read because of your average of ' + wpm + ' wpm')
    }
}