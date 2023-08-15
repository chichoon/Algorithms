#include <iostream>

unsigned long long dp[81];

int main(void) {
	int n;

	std::cin >> n;

	dp[1] = 4;
	dp[2] = 6;

	for (int i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	std::cout << dp[n];
}
