from collections import Counter

class Stat:
    def __init__(self, data):
        self.data = data

    def mean(self):
        total = sum(self.data)
        return total / len(self.data)

    def median(self):
        sorted_data = sorted(self.data)
        n = len(self.data)
        mid = n // 2

        if n % 2 == 0:
            return (sorted_data[mid - 1] + sorted_data[mid]) / 2
        else:
            return sorted_data[mid]

    def mode(self):
        freq_counter = Counter(self.data)
        max_freq = max(freq_counter.values())
        modes = [num for num, freq in freq_counter.items() if freq == max_freq]

        return modes

    def data_range(self):
        return max(self.data) - min(self.data)

# Example usage:
data = [2, 5, 7, 3, 7, 2, 8, 5, 9]
statistics = Stat(data)

print(f"Mean: {statistics.mean()}")
print(f"Median: {statistics.median()}")
print(f"Mode: {statistics.mode()}")
print(f"Range: {statistics.data_range()}")
