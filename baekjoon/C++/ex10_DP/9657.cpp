#include <iostream>

int main(void) {
	int n;
	int dp[1001];

	std::cin >> n;

	dp[1] = 1;
	dp[2] = 0;
	dp[3] = 1;
	dp[4] = 1;

	for (int i = 5; i <= n; i++) {
		if (dp[i - 1] == 1 && dp[i - 3] == 1 && dp[i - 4] == 1)
			dp[i] = 0;
		else dp[i] = 1;
	}
	std::cout << (dp[n] == 1 ? "SK" : "CY") << "\n";
}
