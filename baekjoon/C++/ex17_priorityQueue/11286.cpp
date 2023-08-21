#include <iostream>
#include <queue>
#include <vector>

int main(void) {
	int n, temp;
	std::priority_queue<int, std::vector<int>, std::greater<int> > plus_que;
	std::priority_queue<int, std::vector<int>, std::less<int> > minus_que;

	std::ios_base::sync_with_stdio(false);
	std::cin.tie(0);
	std::cout.tie(0);

	std::cin >> n;
	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		if (temp < 0) minus_que.push(temp);
		else if (temp > 0) plus_que.push(temp);
		else {
			if (minus_que.empty() && plus_que.empty()) std::cout << 0 << "\n";
			else if (plus_que.empty() || (!minus_que.empty() && -minus_que.top() <= plus_que.top())) {
				std::cout << minus_que.top() << "\n";
				minus_que.pop();
			}
			 else if (minus_que.empty() || (!plus_que.empty() && -minus_que.top() > plus_que.top())) {
				std::cout << plus_que.top() << "\n";
				plus_que.pop();
			}
		}
	}
}
