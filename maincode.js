var booktitles=["Sorcery of Thorns", "Aurora Rising", "Illuminiae", "The Maze Runner", "Red Queen"]
var wordcount=[121424, 139077, 92520, 116656]
var cover=["2wCEAAkGBxMTEhUSExMVFRUXGBgXGRgYGBgYGxofHRgdHRoZGhgdHSggGBolHRgXIjEiJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGy8mICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf", "https://images-na.ssl-images-amazon.com/images/I/81DOo37t7UL.jpg%22,%22https://images-na.ssl-images-amazon.com/images/I/51UU0FLH1wL._SX330_BO1,204,203,200_.jpg%22,%22https://m.media-amazon.com/images/I/41LHCOh0eBL.jpg"]
var booktitle;
var wpm;

function change_text(){
    booktitle = document.getElementById("bookInput").value;

    wpm = document.getElementById("wpmInput").value;

    document.getElementById("firstp").innerHTML = booktitle + ' will take you fjrei to read because of your average of ' + wpm + ' wpm';
}