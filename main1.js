var itemContainer = document.querySelector("#item-container");

var htmlstr = items.results.map(function(item) {

   var name;
    if(item.title.length > 30) {
        name = item.title.substr(0, 30) + "...";
    }
    else {
        name = item.title;
    }

   var image = item.Images[0].url_fullxfull;
   var maker = item.Shop.shop_name;
   var price = item.price;
   var rating = item.views;

  return `
    <div class ="data">
        <a href="${item.url}"><img src="${image}" class="image"></a>
        <p class="name"><abbr title="${item.title}">${name}</abbr></p>
        <p class="maker">${maker}</p>
        <div class="rating-section">
          <p class="rating">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
          <p class="rating-num">(${rating})</p>
        </div>
        <p class="price">$${price}</p>
        <i class="far fa-heart fa-lg"></i>
    </div>
    `

  }).join("");

<<<<<<< HEAD
  itemContainer.innerHTML = htmlstr;
=======
  itemContainer.innerHTML = htmlstr;
>>>>>>> eb141b6764d1ad15d6edcfbcaab8660a9038fb33
