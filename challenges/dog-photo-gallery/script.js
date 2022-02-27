let body = document.querySelector("body");
let imageContainer = document.createElement("div");
imageContainer.setAttribute("id", "img-container")
let newImageButton = document.createElement("button");
newImageButton.innerText = "Show dog Image";
body.appendChild(newImageButton);
body.append(imageContainer);
let ul = document.createElement("ul");
imageContainer.append(ul);

function getDogImages() {
  return fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    let img = document.createElement("img");
    let li = document.createElement("li");
    img.src = data.message;
    li.appendChild(img);
    ul.appendChild(li);
    })
    .catch((error) => console.log(error, "This image can't be displayed"));
}



newImageButton.addEventListener("click", getDogImages)
