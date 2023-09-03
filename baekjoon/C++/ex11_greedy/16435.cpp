#include <iostream>
#include <queue>
#include <vector>

std::priority_queue<int, std::vector<int>, std::greater<int> > que;

int main(void) {
	int n, l, temp;

	std::cin >> n >> l;
	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		que.push(temp);
	}

	while (!que.empty()) {
		if (que.top() <= l) {
			l++;
			que.pop();
			continue;
		}
		break;
	}

	std::cout << l;
}
