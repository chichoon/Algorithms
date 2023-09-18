#include <iostream>

int calculateDay(int sum, int n) {
	int cnt = 1;
	while (true) {
		if (sum > n) break;
		sum *= 4;
		cnt++;
	}
	return cnt;
}

int main(void) {
	int t, temp;

	std::cin >> t;

	for (int i = 0; i < t; i++) {
		int sum = 0;
		int n;
		std::cin >> n;
		for (int j = 0; j < 6; j++) {
			std::cin >> temp;
			sum += temp;
		}
		std::cout << calculateDay(sum, n) << "\n";
	}
}
