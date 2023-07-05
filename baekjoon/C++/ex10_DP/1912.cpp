#include <iostream>
#include <algorithm>

int main(void) {
	int n;
	int arr[1000001];
	int dp[1000001];
	int max;

	std::cin >> n;
	for (int i = 0; i < n; i++)
		std::cin >> arr[i];
	dp[0] = arr[0];
	max = arr[0];
	for (int i = 1; i < n; i++) {
		dp[i] = std::max(dp[i - 1] + arr[i], arr[i]);
		max = std::max(dp[i], max);
	}
	std::cout << max << "\n";
}
