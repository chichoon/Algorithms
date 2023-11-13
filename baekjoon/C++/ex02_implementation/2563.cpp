#include <iostream>
#include <stdlib.h>

int main(void) {
	bool** arr;
	int n;
	int a, b;

	arr = (bool **)calloc(100, sizeof(bool *));
	for (int i = 0; i < 100; i++) {
		arr[i] = (bool *)calloc(100, sizeof(bool));
	}

	std::cin >> n;
	for (int i = 0; i < n; i++) {
		std::cin >> a >> b;

		for (int j = a; j < a + 10; j++) {
			for (int k = b; k < b + 10; k++) {
				arr[j][k] = true;
			}
		}
	}

	int cnt = 0;

	for (int i = 0; i < 100; i++) {
		for (int j = 0; j < 100; j++) {
			if (arr[i][j]) cnt++;
		}
	}

	std::cout << cnt;
}
