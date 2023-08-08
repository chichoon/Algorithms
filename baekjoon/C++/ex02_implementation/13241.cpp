#include <iostream>

long long gcd(long long int a, long long int b) {
	long long int c;

	while (b != 0) {
		c = a % b;
		a = b;
		b = c;
	}
	return a;
}

int main(void) {
	long long int a, b, c;

	std::cin >> a >> b;

	std::cout << a * b / gcd(a, b);
}
