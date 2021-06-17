var imgList = JSON.parse(localStorage.getItem('imagelist'));
console.log(imgList);
for(let i =0 ; i<imgList.images.length ; i++){
    let myImg = document.createElement('img');
    myImg.setAttribute('class','col-sm-4');
    myImg.setAttribute('alt','img');
    myImg.src = imgList.images[i].ImgUrl;
    
    if(i+1%3 == 0){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class','gimg row');
        newDiv.appendChild(myImg);
        document.getElementById('gimg row').after(newDiv);
    }
    else{
        if(i==0){
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class','gimg row');
            newDiv.appendChild(myImg);
            document.getElementById('heading').after(newDiv);
        }
        else
            document.getElementsByClassName('col-sm-4')[i-1].after(myImg);
    }
}




