#include <iostream>
#include <algorithm>

int dp[100001];

int main(void) {
	int n;

	std::cin >> n;
	dp[1] = -1;
	dp[2] = 1;
	dp[3] = -1;
	dp[4] = 2;
	dp[5] = 1;

	for (int i = 6; i <= n; i++) {
		if (dp[i - 2] == -1 && dp[i - 5] == -1) dp[i] = -1;
		else if (dp[i - 2] == -1) dp[i] = dp[i - 5] + 1;
		else if (dp[i - 5] == -1) dp[i] = dp[i - 2] + 1;
		else dp[i] = std::min(dp[i - 2], dp[i - 5]) + 1;
	}

	std::cout << dp[n];
}
