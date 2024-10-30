// ## Clock

// Using `1-counter.md` or `2-counter.md` from the easy section, create a
// clock that shows you the current machine time.

// Make it so that it updates every second, and shows time in the following formats -
// - HH:MM:SS (Eg. 13:45:23)
// - HH:MM:SS AM/PM (Eg 01:45:23 PM)

function displayTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';

  // Format time in HH:MM:SS format
  const timeFormat1 = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Format time in HH:MM:SS AM/PM format
  const timeFormat2 = `${hours % 12 === 0 ? 12 : hours % 12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;

  console.log(`Time in HH:MM:SS format: ${timeFormat1}`);
  console.log(`Time in HH:MM:SS AM/PM format: ${timeFormat2}`);
}

// Update the clock every second
setInterval(displayTime, 1000);