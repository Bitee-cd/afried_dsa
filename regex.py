fieldContent =  "10 x 11 / (5, 10), (5, 7), (5, 6), (2, 5), (4, 5), (5, 2)"
lines =fieldContent.split("/")
dimensions = lines[0].split("x")
rows = int(dimensions[1].strip())
cols = int(dimensions[0].strip())


# Removing the leading and trailing whitespace and parentheses
coordinatesStr = lines[1].strip('( )')

# Splitting the coordinates string and converting to subarrays
coordinatesList = coordinatesStr.split("), (")
for pair in coordinatesList:
    x, y = map(int, pair.split(","))
    print(x,y)