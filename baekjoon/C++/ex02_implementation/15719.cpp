#include <iostream>

bool arr[10000001];

int main(void) {
	int n, temp;

	std::ios_base::sync_with_stdio(false);
	std::cin.tie(0);
	std::cout.tie(0);

	std::cin >> n;
	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		if (arr[temp]) {
			std::cout << temp;
			return 0;
		}
		arr[temp] = true;
	}
	std::cout << -1;
}
