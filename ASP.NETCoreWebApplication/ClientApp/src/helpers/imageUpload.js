import axios from 'axios';

export let fileList = [];

export const handleImageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
        fileList.push({
            file: e.target.files[i],
            propertyName: e.target.name
        });
    }
}
export const uploadImages = (entity) => {
    fileList.forEach(image => uploadImage(image.propertyName, image.file, entity))
    fileList = []
}

export const uploadImage = (propertyName, file, entity) => {
    file.filename = new Date().getTime()*Math.random()+ '.png'

    const imagePath = 'https://localhost:5001/images/' + file.filename
    if(propertyName === 'screenshots')
        entity[propertyName].push(imagePath)
    else
        entity[propertyName] = imagePath

    let data = new FormData();
    data.append('file', file, file.filename);

    axios({
        method: 'post',
        url: 'https://localhost:5001/ImageUpload/UploadImage',
        data: data,
        config: {headers: {'Content-Type': 'multipart/form-data'}}
    });
};