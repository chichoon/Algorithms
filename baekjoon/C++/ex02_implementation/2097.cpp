#include <iostream>
#include <cmath>

int main(void) {
	int n;

	std::cin >> n;
	if (n == 1 || n == 2) std::cout << 4;
	else {
		int nearest = std::floor(std::sqrt(n));
		if (nearest * nearest == n) {
			std::cout << 4 * (nearest - 1);
		} else {
			if (nearest * nearest + nearest >= n)
				std::cout << 2 * (nearest + nearest - 1);
			else
				std::cout << 4 * (nearest);
		}
	}
}
