let imageContainer = document.querySelector("#image-container");
function getImage() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      imageContainer.innerHTML = `<img src = ${data.img} alt =${data.alt}>`;
    })
    .catch((error) => {
      console.log(error, "This can't be found");
    });
}

getImage();