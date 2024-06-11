document.addEventListener("DOMContentLoaded", () => {
  const homeTitle = document.querySelector("#home .column-left h1");
  const homeButtons = document.querySelector("#home .home-buttons");
  const homeImage = document.querySelector("#home .column-right img");
  const aboutH2 = document.querySelector("#about .column-left h2");
  const aboutP = document.querySelector("#about .column-right");

  const animateElement = (element, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.classList.add("fade-in-up");
        resolve();
      }, delay);
    });
  };

  const startAnimations = async () => {
    await animateElement(homeTitle, 0);
    await animateElement(homeButtons, 300);
    await animateElement(homeImage, 400);
  };

  // Intersection Observer setup
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Adjust threshold as needed
    }
  );

  observer.observe(aboutH2);
  observer.observe(aboutP);

  // Start other animations
  startAnimations();
});
