#include <iostream>
#include <vector>

bool arr[10001];
std::vector<int> v;

int main(void) {
	int n;
	std::cin >> n;

	for (int i = 2; i < n; i++) {
		if (arr[i]) continue; // 이미 체크가 되어있으면 건너뛰기
		for (int j = 2 * i; j <= n; j += i) { // i * 2 부터 i * n까지 거르기
			arr[j] = true;
		}
	}

	for (int i = 2; i < n; i++) {
		if (!arr[i]) v.push_back(i);
	}

	int len = v.size();

	for (int i = 0; i + 1 < len; i++) {
		if (v[i] * v[i + 1] > n) {
			std::cout << v[i] * v[i + 1];
			break;
		}
	}

	if (n < 4) {
		std::cout << 6;
	}
}
