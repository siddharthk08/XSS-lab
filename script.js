const userNameInput = document.getElementById('userNameInput');
const greetingSpan = document.getElementById('greeting');
const commentList = document.getElementById('commentList');
const commentInput = document.getElementById('commentInput');



function addComment() {
  const commentText = commentInput.value;
  if (commentText) {
      const listItem = document.createElement('p');
      listItem.classList.add('comment');
      listItem.innerHTML = `${commentText}`;
      commentList.appendChild(listItem);

      document.appendChild(commentText)
  }
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(n) {
  currentSlide = (n + totalSlides) % totalSlides;
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide); // Show the first slide initially
