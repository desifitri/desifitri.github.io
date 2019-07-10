$(document).ready(function(){
    var bg=[0,1,2,3];
    var index=0;
    setInterval(function(){
        index=(index+1) % bg.length;
        $(".ganti-gambar").css("background-image","url('images/gambar"+index+".jpg')");
    },5000);
});