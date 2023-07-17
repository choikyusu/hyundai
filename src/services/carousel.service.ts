export const calcCaroselTransform = (
  arrayLength: number,
  item: HTMLDivElement,
  itemIndex: number,
  selectedIndex: number,
  width: number,
) => {
  let calcedWidth = 0;

  if (arrayLength > 1 && itemIndex === 0 && selectedIndex === arrayLength - 1)
    calcedWidth = width;
  else if (
    arrayLength > 1 &&
    itemIndex === arrayLength - 1 &&
    selectedIndex === 0
  )
    calcedWidth = -width;
  else {
    calcedWidth = (itemIndex - selectedIndex) * width;
  }

  item.style.transform = `translateX(${calcedWidth}px) scale(1)`;
};

export const addCaroselAnimation = (
  item: HTMLDivElement,
  itemIndex: number,
  index: number,
  selectedIndex: number,
) => {
  if (index === itemIndex || itemIndex === selectedIndex) {
    item.style.transition = 'transform 0.3s ease-in-out';
  } else {
    item.style.transition = '';
  }
};
