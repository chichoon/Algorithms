#include <iostream>
#include <queue>

int main(void) {
	std::priority_queue<int> que;
	int temp, x, y;

	for (int i = 0; i < 4; i++) {
		std::cin >> temp;
		que.push(temp);
	}
	que.pop();
	x = que.top();
	que.pop();

	que.pop();
	y = que.top();
	que.pop();

	std::cout << x * y;
}
