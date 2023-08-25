#include <iostream>

int dp[10001];
int v[101];

int main(void) {
	int n, k;

	std::cin >> n >> k;
	for (int i = 0; i < n; i++) std::cin >> v[i];

	dp[0] = 1;
	for (int j = 0; j < n; j++) {
		for (int i = 1; i <= k; i++) {
			if (i >= v[j]) dp[i] = dp[i] + dp[i - v[j]];
		}
	}

	std::cout << dp[k];
}
