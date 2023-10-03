#include <iostream>

int main(void) {
	long long n, v = 1, cnt = 0;
	std::cin >> n;

	while (v < n) {
		v *= 2;
		cnt++;
	}

	std::cout << (n == 0 ? 0 : 1 + cnt);
}
