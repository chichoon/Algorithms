#include <iostream>
#include <queue>

int dir[2][8] = {{-1, -1, 0, 1, 1, 1, 0, -1}, {0, 1, 1, 1, 0, -1, -1, -1}};
int map[51][51];
bool visited[51][51];
std::queue<std::pair<int, int> > que;

void initialize_visited(int n, int m) {
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++) {
			visited[i][j] = false;
		}
	}
}

int bfs_inner(int n, int m, int startX, int startY) {
	que.push(std::make_pair(startY, startX));
	visited[startY][startX] = true;

	while (!que.empty()) {
		int currentY = que.front().first;
		int currentX = que.front().second;
		que.pop();

		for (int i = 0; i < 8; i++) {
			int coordY = currentY + dir[0][i];
			int coordX = currentX + dir[1][i];
			if (coordX < 0 || coordX >= n || coordY < 0 || coordY >= m)
				continue;
			if (visited[coordY][coordX] || map[coordY][coordX] == 0)
				continue;
			que.push(std::make_pair(coordY, coordX));
			visited[coordY][coordX] = true;
		}
	}

	return 1;
}

int bfs(int n, int m) {
	int cnt = 0;
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++) {
			if (!visited[i][j] && map[i][j] == 1)
				cnt += bfs_inner(n, m, j, i);
		}
	}
	return cnt;
}

int main(void) {
	int n, m;

	while (true) {
		std::cin >> n >> m;
		if (n == 0 && m == 0) return 0;
		for (int i = 0; i < m; i++) {
			for (int j = 0; j < n; j++) {
				std::cin >> map[i][j];
			}
		}
		initialize_visited(n, m);
		std::cout << bfs(n, m) << "\n";
	}
}
