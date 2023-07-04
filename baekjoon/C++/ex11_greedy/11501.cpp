#include <iostream>
#include <vector>
#include <algorithm>

int main(void) {
	int t, n, temp, max_val;
	long long profit;
	std::vector<int> v;

	std::cin >> t;
	for (int i = 0; i < t; i++) {
		v.clear();
		profit = 0;
		max_val = -1;
		std::cin >> n;
		for (int j = 0; j < n; j++) {
			std::cin >> temp;
			v.push_back(temp);
		}
		for (int j = n - 1; j >= 0; j--) {
			max_val = (max_val > v[j] ? max_val : v[j]);
			profit += max_val - v[j];
		}
		std::cout << profit << "\n";
	}
}
