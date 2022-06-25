//Product Data
var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

//code

var previewImg = document.getElementById("previewImage");
previewImg.src = productData.photos[0];

var title = document.getElementById("title");
title.innerHTML = productData.name;

var brand = document.getElementById("brand");
brand.innerHTML = productData.brand;

var price = document.getElementById("price");
price.innerHTML = productData.price;

var description = document.getElementById("description");
description.innerHTML = productData.description;

var image1 = document.getElementById("img1");
image1.src = productData.photos[0];
img1.style.border = "3px solid green";
var image2 = document.getElementById("img2");
image2.src = productData.photos[1];
var image3 = document.getElementById("img3");
image3.src = productData.photos[2];
var image4 = document.getElementById("img4");
image4.src = productData.photos[3];
var image5 = document.getElementById("img5");
image5.src = productData.photos[4];

function border(id) {
  img1.style.border = "none";
  img2.style.border = "none";
  img3.style.border = "none";
  img4.style.border = "none";
  img5.style.border = "none";
  document.getElementById(id).style.border = "3px solid green";
}

img1.addEventListener("click", function () {
  previewImg.src = img1.src;
  border("img1");
});
img2.addEventListener("click", function () {
  previewImg.src = img2.src;
  border("img2");
});
img3.addEventListener("click", function () {
  previewImg.src = img3.src;
  border("img3");
});
img4.addEventListener("click", function () {
  previewImg.src = img4.src;
  border("img4");
});
img5.addEventListener("click", function () {
  previewImg.src = img5.src;
  border("img5");
});
