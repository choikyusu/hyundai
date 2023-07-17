export const useCarImage = ({
  selected,
}: {
  selected: boolean | undefined;
}) => {
  const imageMoveAnimation = (el: HTMLImageElement) => {
    if (selected && el && el.style) {
      el.style.animation = 'car_animation 1.5s alternate';
    } else if (!selected && el && el.style) el.style.animation = '';
  };

  return {
    imageMoveAnimation,
  };
};
