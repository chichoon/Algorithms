#include <iostream>
#include <vector>
#include <algorithm>

int main(void) {
	int n, m, min;

	std::cin >> n >> m;
	std::vector<int> package(m), one(m);

	for (int i = 0; i < m; i++) {
		std::cin >> package[i] >> one[i];
	}
	std::sort(package.begin(), package.end());
	std::sort(one.begin(), one.end());

	min = std::min(n / 6 * package[0] + n % 6 * one[0], (n / 6 + 1) * package[0]);
	min = std::min(min, n * one[0]);

	std::cout << min << "\n";
}
