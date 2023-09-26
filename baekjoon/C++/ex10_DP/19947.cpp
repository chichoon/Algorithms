#include <iostream>
#include <algorithm>
#include <cmath>

int dp[11];

int main(void) {
	int seed, year, max;

	std::cin >> seed >> year;

	dp[0] = seed;
	for (int i = 1; i <= year; i++) {
		max = -1;
		if (i - 1 >= 0) {
			max = std::max((int)floor(1.05 * dp[i - 1]), max);
		}
		if (i - 3 >= 0) {
			max = std::max((int)floor(1.2 * dp[i - 3]), max);
		}
		if (i - 5 >= 0) {
			max = std::max((int)floor(1.35 * dp[i - 5]), max);
		}
		dp[i] = max;
	}

	std::cout << dp[year];
}
