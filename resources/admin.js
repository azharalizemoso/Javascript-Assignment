var imgList = {
    images : [
        {
            ImgUrl : './resources/img1.jpg',
            ImgName : 'Image 1',
            ImageInfo : 'Default Image 1',
            UploadedDate : '3/6/2021'
        },
        {
            ImgUrl : './resources/img2.jpg',
            ImgName : 'Image 2',
            ImageInfo : 'Default Image 2',
            UploadedDate : '3/6/2021'
        },
        {
            ImgUrl : './resources/img3.jpg',
            ImgName : 'Image 3',
            ImageInfo : 'Default Image 3',
            UploadedDate : '3/6/2021'
        },
        {
            ImgUrl : './resources/img4.jpg',
            ImgName : 'Image 4',
            ImageInfo : 'Default Image 4',
            UploadedDate : '3/6/2021'
        },
        {
            ImgUrl : './resources/img5.jpg',
            ImgName : 'Image 5',
            ImageInfo : 'Default Image 5',
            UploadedDate : '3/6/2021'
        },
        {
            ImgUrl : './resources/img6.jpg',
            ImgName : 'Image 6',
            ImageInfo : 'Default Image 6',
            UploadedDate : '3/6/2021'
        }
    ],
}

var NowMoment = moment().format('YYYY-M-D');
console.log(NowMoment);

localStorage.setItem('imagelist',JSON.stringify(imgList));


var addImg = document.getElementById('add').addEventListener('click',function(e){
    e.preventDefault();
    if(validate() == true){
        let img = {
                ImgUrl : document.getElementById('imgUrl').value,
                ImgName : document.getElementById('imgName').value,
                ImageInfo : document.getElementById('imgInfo').value,
                UploadedDate : document.getElementById('imgDate').value
        };
        let imgList = JSON.parse(localStorage.getItem("imagelist"));
        imgList.images.push(img);
        localStorage.setItem('imagelist',JSON.stringify(imgList));
    }
});

var delImg = document.getElementById('del').addEventListener('click',function(e){
    e.preventDefault();
    console.log('test');
    let imgName = document.getElementById('delImgName');
    let imgList = JSON.parse(localStorage.getItem("imagelist"));
    for(let i =0;i < imgList.images.length;i++){
        if(imgList.images[i].ImgName == imgName.value){
            imgList.images.splice(i,1);
            console.log('deleted')
        }
    }
    localStorage.setItem('imagelist',JSON.stringify(imgList));
})

function validate() {
    
    let ImgUrl = document.getElementById('imgUrl').value;
    let ImgName = document.getElementById('imgName').value;
    let ImageInfo = document.getElementById('imgInfo').value;
    let UploadedDate = document.getElementById('imgDate').value;

    if(ImgUrl == ''){
        prompt('URL cannot be empty!');
        return false;
    }

    if(ImgName == ''){
        prompt('Image Name cannot be empty!');
        return false;
    }

    if(!moment(UploadedDate,'DD/MM/YYYY',true).isValid()){
        prompt('Date is invalid');
        return false;
    }

    if(moment(UploadedDate).isAfter(moment().format('DD MM YYYY'))){
        prompt('Date is in future');
        return false;
    }

    return true;
}

