#include <iostream>

int main(void) {
	int n, m, j;
	int cur;
	int pos = 1;
	int cnt = 0;

	std::cin >> n >> m >> j;

	for (int i = 0; i < j; i++) {
		std::cin >> cur;
		if (cur < pos) {
			while (cur < pos) {pos--; cnt++;}
		}
		else if (cur > pos + m - 1) {
			while (cur > pos + m - 1) {pos++; cnt++;}
		}
	}
	std::cout << cnt;
}
