#include <iostream>
#include <queue>
#include <string>

int n;
int convenient[102][2];
bool visited[102];
std::queue<int> que;

std::string bfs() {
	que.push(0);
	visited[0] = true;

	while (!que.empty()) {
		int index = que.front();
		int current[2] = {convenient[index][0], convenient[index][1]};
		que.pop();

		for (int i = 0; i <= n + 1; i++) {
			if (visited[i]) continue;
			int distance = std::abs(current[0] - convenient[i][0]) + std::abs(current[1] - convenient[i][1]);
			if (distance > 1000) continue;
			if (i == n + 1) return "happy";
			visited[i] = true;
			que.push(i);
		}
	}
	return "sad";
}

void reset_visited() {
	for (int i = 0; i < 102; i++) {
		visited[i] = false;
		convenient[i][0] = 0;
		convenient[i][1] = 0;
	}
}

int main(void) {
	int t;

	std::cin >> t;
	for (int i = 0; i < t; i++) {
		std::cin >> n;
		std::cin >> convenient[0][0] >> convenient[0][1];

		for (int j = 1; j <= n; j++) {
			std::cin >> convenient[j][0] >> convenient[j][1];
		}
		std::cin >> convenient[n + 1][0] >> convenient[n + 1][1];

		std::cout << bfs() << "\n";
		reset_visited();
	}
}
