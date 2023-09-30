#include <iostream>

int main(void) {
	int n, x = 0, y = 0;
	char c;
	std::cin >> n;

	for (int i = 0; i < n; i++) {
		std::cin >> c;
		if (c == 'D') x++;
		else y++;
		if (std::abs(x - y) == 2) break;
	}
	std::cout << x << ":" << y;
}
