#include <iostream>
#include <queue>

void bfs(int arr[1001][1001], int node[1001], int n, int startPos) {
	std::queue<int> que;

	que.push(startPos);
	node[startPos] = 1;

	while (!que.empty()) {
		int current = que.front();
		que.pop();
		for (int i = 1; i <= n; i++) {
			if (arr[i][current] == 1 && node[i] == 0) {
				node[i] = 1;
				que.push(i);
			}
		}
	}
}

int main(void) {
	int n, m, u, v;
	int arr[1001][1001] = {0};
	int node[1001] = {0};
	int count = 0;

	std::cin >> n >> m;
	for (int i = 0; i < m; i++) {
		std::cin >> u >> v;
		arr[u][v] = 1;
		arr[v][u] = 1;
	}

	for (int i = 1; i <= n; i++) {
		if (node[i] == 0) {
			bfs(arr, node, n, i);
			count++;
		}
	}
	std::cout << count << "\n";
}
