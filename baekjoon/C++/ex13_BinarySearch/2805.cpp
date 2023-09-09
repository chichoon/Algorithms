#include <iostream>
#include <vector>
#include <algorithm>

int main(void) {
	std::vector<int> vt;
	int n, m, temp;

	std::ios_base::sync_with_stdio(false);
	std::cin.tie(0);
	std::cout.tie(0);

	std::cin >> n >> m;
	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		vt.push_back(temp);
	}

	std::sort(vt.begin(), vt.end());

	long long sum, mid, low = 0, high = vt[vt.size() - 1];
	while (true) {
		sum = 0;
		mid = (low + high) / 2;
		for (int i = 0; i < vt.size(); i++) {
			if (vt[i] - mid > 0)
				sum += vt[i] - mid;
		}
		if (sum == m || low > high) {
			break;
		}
		if (sum > m) {
			low = mid + 1;
		} else if (sum < m) {
			high = mid - 1;
		}
	}
	std::cout << mid;
}


