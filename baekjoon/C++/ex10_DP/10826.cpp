#include <iostream>

unsigned long long int arr[10001];

int main(void) {
	int n;

	std::cin >> n;
	arr[0] = 0;
	arr[1] = 1;
	for (int i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}

	std::cout << arr[n];
}
