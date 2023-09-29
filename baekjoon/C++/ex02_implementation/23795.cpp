#include <iostream>

int main(void) {
	int temp, sum = 0;
	while (true) {
		std::cin >> temp;
		if (temp < 0) break;
		sum += temp;
	}
	std::cout << sum;
}
