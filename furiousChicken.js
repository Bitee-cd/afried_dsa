function furiousChicken(initialVelocity, angleInDegrees, time) {
  const g = 9.81;

  // Convert the angle from degrees to radians
  const eRadians = (angleInDegrees * Math.PI) / 180;

  // Calculate the x and y coordinates
  const x = initialVelocity * Math.cos(eRadians) * time;
  const y = initialVelocity * Math.sin(eRadians) * time - 0.5 * g * time ** 2;

  // Round off the coordinates to the nearest whole number
  const roundedX = Math.round(x);
  const roundedY = Math.round(y);

  return [roundedX, roundedY];
}
