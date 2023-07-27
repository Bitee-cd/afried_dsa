def count_patterns(start, length):
    # Define the valid moves from each dot
    moves = {
        'A': ['B', 'D', 'E', 'F', 'H'],
        'B': ['A', 'C', 'D', 'E', 'F', 'G', 'I'],
        'C': ['B', 'D', 'E', 'F', 'H'],
        'D': ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
        'E': ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
        'F': ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
        'G': ['B', 'D', 'E', 'F', 'H'],
        'H': ['A', 'C', 'D', 'E', 'F', 'G', 'I'],
        'I': ['B', 'D', 'E', 'F', 'H'],
    }

    # Base case: when the length becomes 0, there is one possible pattern
    if length == 0:
        return 1

    # Set the dot at the current position to None to mark it as visited
    current_dot = start
    start = None

    # Initialize the count of possible patterns
    total_patterns = 0

    # Check all possible moves from the current dot and recursively calculate
    # the number of patterns for each move.
    for next_dot in moves[current_dot]:
        if start is None or (start, next_dot) not in [('A', 'C'), ('C', 'A'), ('G', 'I'), ('I', 'G')]:
            total_patterns += count_patterns(next_dot, length - 1)

    # Reset the dot at the current position to its original value (not None)
    start = current_dot

    return total_patterns

# Test the function
starting_point = 'D'
pattern_length = 4
result = count_patterns(starting_point, pattern_length)
print(f"Number of possible patterns starting from {starting_point} with length {pattern_length}: {result}")
