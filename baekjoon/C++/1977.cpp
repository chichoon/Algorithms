#include <iostream>
#include <cmath>

int main(void) {
	int M, N;
	int sum = 0;
	int min = 2147483647;

	std::cin >> M >> N;
	for (int i = sqrt(M); i <= sqrt(N); i++) {
		if (i * i >= M && i * i <= N) {
			sum += i * i;
			if (min > i * i) min = i * i;
		}
	}

	if (min == 2147483647) std::cout << -1 << "\n";
	else std::cout << sum << "\n" << min << "\n";
}
