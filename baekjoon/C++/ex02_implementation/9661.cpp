#include <iostream>
#include <iostream>

int main(void) {
	long long n;

	std::cin >> n;
	if (n % 5 == 0 || n % 5 == 2) std::cout << "CY\n";
	else std::cout << "SK\n";
}

/*
1: sk
2: cy
3: sk
4: sk
5: cy
6: sk
7: cy
8: sk
9: sk
10: cy
11: sk
12: cy
13: sk
14: sk
15: cy
*/
