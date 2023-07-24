import math

def furious_chicken(initial_velocity: int, angle_in_degrees: int, time: float):


  g = 9.81

  # Convert the angle from degrees to radians
  e_radians = math.radians(angle_in_degrees)

  # Calculate the x and y coordinates
  x = initial_velocity * math.cos(e_radians) * time
  y = initial_velocity * math.sin(e_radians) * time - 0.5 * g * time**2

  # Round off the coordinates to the nearest whole number
  x = round(x)
  y = round(y)

  return (x, y)
