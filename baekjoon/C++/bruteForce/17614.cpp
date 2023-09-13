#include <iostream>
#include <string>

int count_three(int v) {
	std::string str = std::to_string(v);
	int len = str.length();
	int cnt = 0;

	for (int i = 0; i < len; i++) {
		if (str[i] == '3' || str[i] == '6' || str[i] == '9')
			cnt++;
	}
	return cnt;
}

int main(void) {
	int n, cnt = 0;

	std::cin >> n;

	for (int i = 0; i <= n; i++) {
		cnt += count_three(i);
	}

	std::cout << cnt;
}
