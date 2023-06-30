#include <iostream>
#include <queue>

int main(void) {
	int n, temp;
	std::priority_queue<int> q;

	std::ios_base::sync_with_stdio(false);
	std::cin.tie(0);
	std::cout.tie(0);

	std::cin >> n;

	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		if (temp == 0) {
			if (q.empty()) {
				std::cout << "0\n";
				continue;
			}
			std::cout << q.top() << "\n";
			q.pop();
			continue;
		}
		q.push(temp);
	}
}
