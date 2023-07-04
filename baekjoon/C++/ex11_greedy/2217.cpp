#include <iostream>
#include <vector>
#include <algorithm>

int main(void) {
	int n, temp, max = -1;
	std::vector<int> v;

	std::cin >> n;
	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		v.push_back(temp);
	}
	std::sort(v.begin(), v.end());
	for (int i = 0; i < n; i++) {
		int size = v[i] * (v.size() - i);
		if (max < size)
			max = size;
	}
	std::cout << max << "\n";
}
