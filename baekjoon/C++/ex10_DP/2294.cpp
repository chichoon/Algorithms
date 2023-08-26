#include <iostream>
#include <algorithm>

int dp[10001];
int v[101];

int main(void) {
	int n, k, min;

	std::cin >> n >> k;
	for (int i = 0; i < n; i++) {
		std::cin >> v[i];
	}

	for (int i = 1; i <= k; i++) {
		min = 20000;
		for (int j = 0; j < n; j++) {
			if (i == v[j]) {
				min = 1;
				break;
			}
			if (i < v[j]) continue;
			min = std::min(dp[i - v[j]] + 1, min);
		}
		dp[i] = min;
	}

	if (dp[k] == 20000) std::cout << -1;
	else std::cout << dp[k];
}
