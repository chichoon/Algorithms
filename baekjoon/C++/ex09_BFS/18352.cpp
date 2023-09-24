#include <iostream>
#include <vector>
#include <queue>

std::vector<int> vec[300001];
int visited[300001];
std::queue< std::pair<int, int> > que;
std::priority_queue<int, std::vector<int>, std::greater<int> > p_que;

void bfs(int k) {
	while (!que.empty()) {
		int current = que.front().first;
		int depth = que.front().second;

		if (depth == k) p_que.push(current);
		else if (depth > k) break;

		visited[current] = 1;
		que.pop();
		for (std::vector<int>::iterator it = vec[current].begin(); it != vec[current].end(); it++) {
			if (visited[*it] == 0) {
				visited[*it] = 1;
				que.push(std::make_pair(*it, depth + 1));
			}
		}
	}
}

int main(void) {
	int n, m, k, x, u, v;

	std::cin >> n >> m >> k >> x;
	for (int i = 0; i < m; i++) {
		std::cin >> u >> v;
		vec[u].push_back(v);
	}

	que.push(std::make_pair(x, 0));
	bfs(k);
	if (p_que.empty()) std::cout << "-1";
	else {
		while (!p_que.empty()) {
			std::cout << p_que.top() << "\n";
			p_que.pop();
		}
	}
}
