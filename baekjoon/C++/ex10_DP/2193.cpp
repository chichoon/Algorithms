#include <iostream>

int main(void) {
	int n;
	long long dp[91] = {0};

	std::cin >> n;
	dp[0] = 1;
	dp[1] = 1;
	for (int i = 2; i < n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	std::cout << dp[n - 1];
}
