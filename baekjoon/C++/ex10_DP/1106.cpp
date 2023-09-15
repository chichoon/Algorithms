#include <iostream>
#include <vector>

std::vector<std::pair<int, int> > vec;
int dp[10001];

int main(void) {
	int c, n, u, v, min;

	std::cin >> c >> n;
	for (int i = 0; i < n; i++) {
		std::cin >> u >> v;
		vec.push_back(std::make_pair(u, v));
		dp[v] = std::min(u, dp[v]);
	}

	dp[0] = 0;
	for (int i = 1; i <= 10001; i++) {
		min = 1000000;
		for (int j = 0; j < vec.size(); j++) {
			if (i - vec[j].second < 0) continue;
			min = std::min(dp[i - vec[j].second] + vec[j].first, min);
		}
		dp[i] = min;
	}

	min = 1000000;
	for (int i = c; i < 10001; i++) {
		min = std::min(min, dp[i]);
	}

	std::cout << min;
}
