#include <iostream>
#include <string>

bool disabled[10];

bool numbers[1000000];

void check_number(int i) {
	std::string str = std::to_string(i);
	int length = str.length();
	for (int j = 0; j < length; j++) {
		if (disabled[str[j] - '0']) numbers[i] = true;
	}
}

int get_digit(int i) {
	std::string str = std::to_string(i);
	int length = str.length();
	return length;
}

int main(void) {
	int n, m, temp, ans, low_digit, upp_digit;
	int lower = -1;
	std::cin >> n >> m;
	int upper = 1000000;

	for (int i = 0; i < m; i++) {
		std::cin >> temp;
		disabled[temp] = true;
	}

	for (int i = 0; i <= 1000000; i++) {
		check_number(i);
		if (i > lower && i <= n && !numbers[i]) lower = i;
		if (i > n && !numbers[i]) {
			upper = i;
			break;
		}
	}

	low_digit = get_digit(lower);
	upp_digit = get_digit(upper);
	if (lower < 0 || n - lower + low_digit > upper - n + upp_digit) {
		ans = upper - n + upp_digit;
	} else {
		ans = n - lower + low_digit;
	}
	ans = std::min(std::abs(100 - n), ans);
	std::cout << ans << "\n";
}
