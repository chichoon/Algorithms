#include <iostream>

int main(void) {
	int out, in, cur = 0, max = -1;
	for (int i = 0; i < 10; i++) {
		std::cin >> out >> in;
		cur = cur - out + in;
		if (max < cur) max = cur;
	}
	std::cout << max << "\n";
}
