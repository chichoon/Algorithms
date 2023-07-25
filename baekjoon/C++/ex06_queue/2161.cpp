#include <iostream>
#include <queue>
#include <vector>

int main(void) {
	int n, temp;
	std::queue<int> q;
	std::vector<int> ans;

	std::cin >> n;
	for (int i = 1; i <= n; i++) q.push(i);
	while (!q.empty()) {
		temp = q.front();
		q.pop();
		ans.push_back(temp);
		if (q.empty()) break;
		temp = q.front();
		q.pop();
		q.push(temp);
	}

	std::cout << ans[0];
	for (int i = 1; i < n; i++) std::cout << " " << ans[i];
}
