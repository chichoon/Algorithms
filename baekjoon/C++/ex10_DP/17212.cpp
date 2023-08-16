#include <iostream>
#include <algorithm>

int dp[100001];

int main(void) {
	int n;

	std::cin >> n;
	dp[1] = 1;
	dp[2] = 1;
	dp[3] = 2;
	dp[4] = 2;
	dp[5] = 1;
	dp[6] = 2;
	dp[7] = 1;

	for (int i = 8; i <= n; i++)
		dp[i] = std::min(std::min(std::min(dp[i - 7], dp[i - 5]), dp[i - 2]), dp[i - 1]) + 1;
	std::cout << dp[n];
}
