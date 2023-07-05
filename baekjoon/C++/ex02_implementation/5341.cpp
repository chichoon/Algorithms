#include <iostream>

int main(void) {
	int temp, sum;
	while (true) {
		std::cin >> temp;
		if (temp == 0) break;
		sum = 0;
		while (temp) {
			sum += temp--;
		}
		std::cout << sum << "\n";
	}
}
