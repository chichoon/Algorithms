#include <iostream>
#include <vector>
#include <algorithm>

int main(void) {
	int n, max = -1;
	int tArr[2000001] = {0};
	int pArr[2000001] = {0};
	int dp[2000001] = {0};

	std::cin >> n;
	for (int i = 0; i < n; i++) {
		std::cin >> tArr[i] >> pArr[i];
	}

	for (int i = 0; i <= n; i++) {
		int deadline = i + tArr[i];
		dp[i] = std::max(dp[i], max);
		if (deadline <= n) {
			dp[deadline] = std::max(dp[deadline], dp[i] + pArr[i]);
		}
		max = std::max(dp[i], max);
	}

	std::cout << max << "\n";
}
