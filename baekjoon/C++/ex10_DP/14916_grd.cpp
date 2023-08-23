#include <iostream>

int getCount(int n) {
	int count = 0;

	if (n < 0) return -2;
	count += (n / 10) * 2;
	n = n % 10;
	count += n / 2;
	return count;
}

int main(void) {
	int n;
	int count = 0;

	std::cin >> n;

	if (n % 2 == 0) {
		std::cout << getCount(n);
	} else {
		std::cout << 1 + getCount(n - 5);
	}
}
