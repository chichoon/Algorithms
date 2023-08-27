#include <iostream>

int dp[201][201]; // n, k

int main(void) {
	int n, k;

	std::cin >> n >> k;

	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= k; j++) {
			if (i == 1) dp[i][j] = j;
			else if (j == 1) dp[i][j] = 1;
			else dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000000;
		}
	}

	std::cout << dp[n][k];
}
