#include <iostream>
#include <algorithm>

int p[1001];
int dp[1001];

int main(void) {
	int n;

	std::cin >> n;
	for (int i = 1; i <= n; i++) {
		std::cin >> p[i];
	}

	dp[1] = p[1];
	dp[2] = std::max(p[1] + p[1], p[2]);
	for (int i = 3; i <= n; i++) {
		for (int j = 1; j <= i; j++) {
			dp[i] = std::max(dp[i], dp[i - j] + p[j]);
		}
	}

	std::cout << dp[n];

}
