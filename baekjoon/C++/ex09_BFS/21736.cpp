#include <iostream>
#include <queue>
#include <string>

bool bfs_visited[601][601];
int arr[601][601];
std::pair<int, int> startPos;
std::queue<std::pair<int, int> > que;
int dir[2][4] = {{0, 1, 0, -1}, {1, 0, -1, 0}};
int cnt;

void bfs(int n, int m) {
	que.push(startPos);
	bfs_visited[startPos.first][startPos.second] = true;

	while (!que.empty()) {
		std::pair<int, int> current = que.front();
		que.pop();

		for (int i = 0; i < 4; i++) {
			int coordY = current.first + dir[0][i];
			int coordX = current.second + dir[1][i];
			if (coordX < 1 || coordY < 1 || coordX > m || coordY > n)
				continue;
			if (bfs_visited[coordY][coordX])
				continue;
			if (arr[coordY][coordX] == 2)
				continue;
			if (arr[coordY][coordX] == 1)
				cnt++;
			bfs_visited[coordY][coordX] = true;
			que.push(std::make_pair(coordY, coordX));
		}
	}
}

int main(void) {
	int n, m;
	std::string temp;
	std::cin >> n >> m;

	for (int i = 1; i <= n; i++) {
		std::cin >> temp;
		for (int j = 0; j < m; j++) {
			if (temp[j] == 'I') {
				startPos.first = i;
				startPos.second = j + 1;
			}
			if (temp[j] == 'P')
				arr[i][j + 1] = 1;
			if (temp[j] == 'X')
				arr[i][j + 1] = 2;
		}
	}

	bfs(n, m);
	if (cnt == 0) std::cout << "TT";
	else std::cout << cnt;
}
