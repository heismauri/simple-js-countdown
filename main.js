let intervalId;

const countdownArea = document.getElementById('countdown-area');

/**
 * Updates the displayed countdown based on a target timestamp stored as a data attribute on the element.
 *
 * @param {HTMLElement} element - The DOM element containing the countdown display and target timestamp.
 */
const updateCountdown = (element) => {
  const countDownDate = new Date(parseInt(element.dataset.timestamp, 10)).getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    // To prevent revealing surprises, consider fetching the post-countdown message from a backend endpoint.
    element.innerHTML = 'SURPRISE! 🎉';
    clearInterval(intervalId);
  };
};

intervalId = setInterval(() => updateCountdown(countdownArea), 1000);
