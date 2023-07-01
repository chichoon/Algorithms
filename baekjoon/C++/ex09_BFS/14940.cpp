#include <iostream>
#include <queue>

void bfs(int arr[1001][1001], int visited[1001][1001], int startPos[2], int n, int m) {
	int dir[2][4] = {{1, 0, -1, 0}, {0, 1, 0, -1}};
	std::queue< std::pair<int, int> > que;

	que.push(std::make_pair(startPos[0], startPos[1]));
	arr[startPos[0]][startPos[1]] = 0;

	while (!que.empty()) {
		int current[2] = {que.front().first, que.front().second};
		que.pop();
		for (int i = 0; i < 4; i++) {
			int coord[2];
			coord[0] = current[0] + dir[0][i];
			coord[1] = current[1] + dir[1][i];
			if (coord[0] < 0 || coord[0] >= n || coord[1] < 0 || coord[1] >= m)
				continue;
			if (visited[coord[0]][coord[1]] == 1) continue;
			arr[coord[0]][coord[1]] = arr[current[0]][current[1]] + 1;
			visited[coord[0]][coord[1]] = 1;
			que.push(std::make_pair(coord[0], coord[1]));
		}
	}
}

int main(void) {
	int n, m;
	int arr[1001][1001];
	int startPos[2];
	int visited[1001][1001] = {0};

	std::cin >> n >> m;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			std::cin >> arr[i][j];
			if (arr[i][j] == 2) {
				startPos[0] = i;
				startPos[1] = j;
				visited[i][j] = true;
			}
			if (arr[i][j] == 0) {
				visited[i][j] = true;
			}
		}
	}

	bfs(arr, visited, startPos, n, m);
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (visited[i][j] == 0)
				arr[i][j] = -1;
		}
	}
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			std::cout << arr[i][j] << " ";
		}
		std::cout << "\n";
	}
}
