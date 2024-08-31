document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const jobElements = document.querySelectorAll('.job');
  jobElements.forEach((job, index) => {
    setTimeout(() => {
      job.style.opacity = 1;
      job.style.transform = 'translateY(0)';
    }, 200 * index);
  });

  initJobPortal();
});

function filterJobs(searchQuery) {
  const jobs = document.querySelectorAll('.job');
  jobs.forEach(job => {
    const jobTitle = job.querySelector('h3').textContent.toLowerCase();
    job.style.display = jobTitle.includes(searchQuery.toLowerCase()) ? 'block' : 'none';
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
    alert('Your registration has been submitted successfully!');
  } else {
    alert('Please fill out all fields.');
  }
}

function initJobPortal() {
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', () => {
    filterJobs(searchInput.value);
  });

  const contactForm = document.querySelector('form');
  contactForm.addEventListener('submit', handleFormSubmit);
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registration-form');
  const responseMessage = document.getElementById('response-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    responseMessage.textContent = 'Thank you for registering! Your details have been received.';
    responseMessage.style.color = 'green';

    form.reset();
  });
});
