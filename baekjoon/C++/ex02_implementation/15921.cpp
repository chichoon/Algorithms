#include <iostream>
#include <vector>

int arr[101];

int main(void) {
	int n, temp;
	int sum = 0;
	double ex = 0, avg;

	std::cin >> n;
	if (n == 0) {
		std::cout << "divide by zero";
		return 0;
	}

	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		sum += temp;
		arr[temp]++;
	}

	for (int i = 0; i < 101; i++) {
		ex += (double)arr[i] / (double)n * i;
	}

	avg = (double)sum / (double)n;

	if (ex == 0) {
		std::cout << "divide by zero";
		return 0;
	}

	std::cout << std::fixed;
	std::cout.precision(2);
	std::cout << (double)avg / ex << "\n";
}
