#include <iostream>

int main(void) {
	int n, m, left = 0, right = 0, cnt = 0, sum = 0;
	int arr[10001] = {0,};
	std::cin >> n >> m;

	for (int i = 0; i < n; i++) {
		std::cin >> arr[i];
	}

	while (left <= right && right <= n) {
		if (sum >= m) {
			if (sum == m) cnt++;
			sum -= arr[left++];
		} else if (sum < m) {
			sum += arr[right++];
		}
	}
	std::cout << cnt << "\n";
}
