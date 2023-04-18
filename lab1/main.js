window.onload = function(){
    //document.write("Hello JavaScript");
};
var number = -1;

$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        while(randomChildNumber==number){
            randomChildNumber = Math.floor(Math.random()*numberOfListItem); 
        }
        number = randomChildNumber;
        var image = ["https://truth.bahamut.com.tw/s01/201910/1828efdfe719f7411b92d386f95abe5b.JPG",
        "https://www.gomaji.com/blog/wp-content/uploads/2020/11/Braised-Pork-On-Rice-Banner-2-e1604906587314.jpg",
        "https://cdn.bella.tw/indeximage/2ECC47zEN4iMYTcFROgbqyUWzHfnoHJcVjT59Tkj.jpeg",
        "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/07/01/1/12798928.jpg&x=0&y=0&sw=0&sh=0&exp=3600"];
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",image[randomChildNumber])
        //$("li").find($("img src").eq(randomChildNumber).image());
    });
});