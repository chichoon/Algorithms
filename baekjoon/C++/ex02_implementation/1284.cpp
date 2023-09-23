#include <iostream>

int size[10] = {4, 2, 3, 3, 3, 3, 3, 3, 3, 3};

int get_size(int n) {
	int temp;
	int length = 0;
	while (n > 0) {
		temp = n % 10;
		if (n < 10) length += size[temp];
		else length += size[temp] + 1;
		n /= 10;
	}
	return length + 2;
}

int main(void) {
	int n;

	while (true) {
		std::cin >> n;
		if (n == 0) return 0;
		std::cout << get_size(n) << "\n";
	}
}
