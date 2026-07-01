/**
 * Applies focal point positioning to a hero background image.
 * Reads the focal point from the image's data-title attribute in the format "data-focal:x,y"
 * where x and y are percentage values (e.g. "data-focal:30,60").
 * @param {HTMLImageElement} img
 */
function setBackgroundFocus(img) {
  const { title } = img.dataset;
  if (!title?.includes('data-focal')) return;
  delete img.dataset.title;
  const [x, y] = title.split(':')[1].split(',');
  img.style.objectPosition = `${x}% ${y}%`;
}

/**
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const picture = block.querySelector('picture');
  if (picture) {
    const img = picture.querySelector('img');
    if (img) setBackgroundFocus(img);
  }
}
