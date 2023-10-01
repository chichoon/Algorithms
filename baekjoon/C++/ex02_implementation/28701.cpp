#include <iostream>

int main(void) {
	int n, sum = 0, tripleSum = 0;

	std::cin >> n;
	for (int i = 1; i <= n; i++) {
		sum += i;
		tripleSum += i * i * i;
	}

	std::cout << sum << "\n" << sum * sum << "\n" << tripleSum;
}
