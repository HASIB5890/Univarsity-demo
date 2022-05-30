let photo=["uni1.jpg","uni2.jpg","uni3.jpg","uni4.jpg","uni5.jpg","uni6.jpg",]
let im=document.querySelector(".imga")
count=0;
function next(){
setInterval(() => {
    count++;
    if(count>photo.length){
        count=0
  im.src=photo[count]
    }
    im.src=photo[count]
}, 2000);

}
function back(){
    count--;
    if(count<0){
        count=photo.length-1
  im.src=photo[count]
    }
    im.src=photo[count]
  
  }