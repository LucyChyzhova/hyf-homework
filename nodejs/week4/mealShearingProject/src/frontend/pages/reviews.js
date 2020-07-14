
window.handleReviewsRequest = () => {
  document.body.innerHTML = `<div class="logo">
  <a href="/"><img id="logo" src="https://live.staticflickr.com/65535/50090093592_4a0c888221_o.jpg" alt="mealsShearing-logo"></img>
  </div>
  <div class="first-block">

  <div class="menu">
  <div><a href="meals" data-navigo>menu</a></div>
  <div><a href="meal/7" data-navigo>special proposition</a></div>
  <div><a href="reviews" data-navigo>reviews</a></div>
  </div>`;

  // make sure the backend api works before working with it here
  fetch("/api/reviews")
      .then((response) => response.json())
      .then(renderReviews);

};
function renderReviews(reviews) {
  const ul = document.createElement("ul");

  reviews.forEach((review) => {
    const li = document.createElement("li");

  let showDate = review.created_date;
  let showOnlyDate = showDate.substr(0, 10);

     li.innerHTML =`
    <div class="review">
    <div><p class="date">Date: ${showOnlyDate} </p></div>  
    <div><p> ${review.description} </p></div>
    <div><p class="star">Stars:  ${review.stars}</p></div>
    </div>`;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}