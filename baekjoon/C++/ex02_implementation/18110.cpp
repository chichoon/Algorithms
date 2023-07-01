#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

int main(void) {
	std::vector<int> v;
	int tmp, sum = 0, cutoff;
	float n;
	std::cin >> n;
	cutoff = round(n * 15 / 100);

	for (int i = 0; i < n; i++) {
		std::cin >> tmp;
		v.push_back(tmp);
	}
	std::sort(v.begin(), v.end());
	for (int i = 0; i < n; i++) {
		if (i < cutoff || i >= n - cutoff) continue;
		sum += v[i];
	}
	if (n == 0) std::cout << 0;
	else std::cout << round(sum / (n - cutoff * 2));
}
