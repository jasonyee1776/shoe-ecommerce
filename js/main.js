// Create HTML title page
var title = document.createElement("h1");
title.textContent = "Shoe Gallery";
title.classList.add("text-center")
document.body.appendChild(title);


// create constructor functions
function MasterShoe(head,image,size,color,stock,orderButton) {
    this.head = head;
    this.image = image;
    this.size = size;
    this.color = color;
    this.stock = stock;
    this.orderButton = orderButton;
}

// new objects from constructor function
let currys = new MasterShoe("Curry 1s", "img/currys.jpg", "Sizes: 8-13", "Color: White", "Price: $" + 100);

let kds = new MasterShoe("KD 5s", "img/kds.png", "Sizes: 8-13", "Color: Pink", "Price: $" + 130);

let lebrons = new MasterShoe("Lebron 13s", "img/lebrons.png", "Sizes: 8-13", "Color: Red", "Price: $" + 130)

let kyries = new MasterShoe("Kyrie 3s", "img/kyries.jpg", "Sizes: 8-13", "Color: Black", "Price: $" + 110)

let kobes = new MasterShoe("Kobe 10s", "img/kobes.jpg", "Sizes: 8-13", "Color: Custom", "Price: $" + 120)

let jordans = new MasterShoe("Jordan 11s", "img/jordans.jpg", "Sizes: 8-13", "Color: White", "Price: $" + 100)

// store objects in array
var shoeArr = [currys, kds, lebrons, kyries, kobes, jordans];

var container = document.createElement("div")
container.id = "container"
container.classList.add("container", "row", "text-center", "mx-auto")
document.body.appendChild(container);


// loop array to display objects
for (var i = 0; i < shoeArr.length; i++) {
    // create HTML elements
    var parentDiv = document.createElement("div");
    parentDiv.id = "content" + i;
    parentDiv.classList.add("col-sm-4", "my-3")
    var contentHead = document.createElement("h2");
    var contentImage = document.createElement("img");
    contentImage.id ="image" + i;
    contentImage.classList.add("w-100")
    var size = document.createElement("p");
    var color = document.createElement("p");
    var stock = document.createElement("p");
    var orderButton = document.createElement("button");
    orderButton.id = "button" + i;

    // Style content 
    let s = parentDiv.style;
    s.borderTop = "thick solid black";
    s.borderBottom = "thick solid black";
    contentHead.classList.add("my-3");
    orderButton.classList.add("mb-3", "btn", "btn-dark");



    // assign content
    contentHead.textContent = shoeArr[i].head;
    contentImage.src = shoeArr[i].image;
    size.textCotnent = shoeArr[i].size;
    color.textContent = shoeArr[i].color;
    stock.textContent = shoeArr [i].stock;
    orderButton.textContent = "Order";

    // append elements
    parentDiv.appendChild(contentHead);
    parentDiv.appendChild(contentImage);
    parentDiv.appendChild(size);
    parentDiv.appendChild(color);
    parentDiv.appendChild(stock);
    parentDiv.appendChild(orderButton);
    container.appendChild(parentDiv);
}

// let image = document.getElementsByTagName("img");

// image.addEventListener("mouseenter", function() {
//     image.style.opacity = "0.7"; 
// });


