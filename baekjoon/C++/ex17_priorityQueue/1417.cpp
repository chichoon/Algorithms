#include <iostream>
#include <queue>

int main(void) {
	std::priority_queue<int> que;
	int n, temp;
	int dasom;
	int ans = 0;

	std::cin >> n;
	std::cin >> dasom;
	for (int i = 0; i + 1 < n; i++) {
		std::cin >> temp;
		que.push(temp);
	}

	if (que.empty()) {
		std::cout << 0;
		return 0;
	}

	while(que.top() >= dasom + ans) {
		temp = que.top();
		if (dasom + ans <= temp) {
			temp--;
			ans++;
		}
		que.pop();
		que.push(temp);
	}

	std::cout << ans << "\n";
}
