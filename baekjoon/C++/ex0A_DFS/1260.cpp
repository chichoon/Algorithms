#include <iostream>
#include <queue>
#include <stack>

int dfs_visited[1001] = {0};
int bfs_visited[1001] = {0};
int arr[1001][1001] = {0};

void recur_dfs(int n, int startPos) {
	dfs_visited[startPos] = 1;
	std::cout << startPos << " ";

	for (int i = 1; i <= n; i++) {
		if (arr[startPos][i] == 1 && dfs_visited[i] == 0) {
			recur_dfs(n, i);
		}
	}
}

void dfs(int n, int startPos) {
	recur_dfs(n, startPos);
}

void bfs(int n, int startPos) {
	std::queue<int> que;

	que.push(startPos);
	bfs_visited[startPos] = 1;
	std::cout << startPos;

	while (!que.empty()) {
		int current = que.front();
		que.pop();

		for (int i = 1; i <= n; i++) {
			if (arr[i][current] == 1 && bfs_visited[i] == 0) {
				std::cout << " " << i;
				bfs_visited[i] = 1;
				que.push(i);
			}
		}
	}
}

int main(void) {
	int n, m, v, x, y;
	std::cin >> n >> m >> v;

	for (int i = 0; i < m; i++) {
		std::cin >> y >> x;
		arr[y][x] = 1;
		arr[x][y] = 1;
	}
	dfs(n, v);
	std::cout << "\n";
	bfs(n, v);
}
