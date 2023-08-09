#include <iostream>
#include <string>
#include <algorithm>

int arr[1002][1002] = {0};

void printArr(int aLen, int bLen) {
	for (int i = 0; i <= aLen; i++) {
		for (int j = 0; j <= bLen; j++) {
			std::cout << arr[i][j] << " ";
		}
		std::cout << "\n";
	}
}

int main(void) {
	std::string a, b;
	int aLen, bLen;

	std::cin >> a >> b;

	aLen = a.length();
	bLen = b.length();

	for (int i = 1; i <= aLen; i++) {
		for (int j = 1; j <= bLen; j++) {
			if (a[i - 1] == b[j - 1]) {
				arr[i][j] = arr[i - 1][j - 1] + 1;
			} else {
				arr[i][j] = std::max(arr[i - 1][j], arr[i][j - 1]);
			}
		}
	}

	// printArr(aLen, bLen);
	std::cout << arr[aLen][bLen];
}
