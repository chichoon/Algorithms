#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>

int dp[10001];
std::vector<std::pair<int, int> > vec[10001];

void dijkstra(int d) {
	for (int i = 1; i <= d; i++) {
		dp[i] = dp[i - 1] + 1; // i까지의 거리 = i - 1까지의 거리 + 1 으로 초기화 해놓고 아래에서 더 작은 값으로 갱신
		for (std::vector<std::pair<int, int> >::iterator it = vec[i].begin(); it != vec[i].end(); it++) {
			dp[i] = std::min(dp[i], dp[it->first] + it->second);
			// dp[it->first] = it->first (간선의 시작노드) 까지의 거리 = 간선의 시작 노드 까지 걸린 거리
			// it->second = it->first 부터 i 까지 걸리는 거리
			// 따라서 dp[it->first] + it->second = 간선의 시작 노드까지 걸린 거리와 지름길을 타고 i로 향하는 거리의 총합
			// dp[i] 와 dp[it->first] + it->second 사이의 최소값 = i까지 걸리는 거리의 최소값이 된다
		}
	}
}

int main(void) {
	int n, d, u, v, temp;

	std::cin >> n >> d;
	for (int i = 1; i <= d; i++) {
		dp[i] = i; // 고속도로를 탔을 때 0부터 i까지의 기본적인 거리는 i와 같음
	}

	for (int i = 0; i < n; i++) {
		std::cin >> u >> v >> temp; // 시작점 u, 끝점 v, 거리 temp
		if (v > d || temp > std::abs(u - v)) continue; // 만약 끝점이 d (최종 도착지점) 를 넘어서거나,
		// u (시작노드) 부터 v (끝노드) 까지 고속도로를 타고 가는 거리보다 지름길이 길 경우
		// 벡터에 담지 않는다 (굳이? 비효율적이므로)
		vec[v].push_back(std::make_pair(u, temp)); // vec[끝점] = {시작점, 거리}
	}

	dijkstra(d); // 다익스트라 알고리즘으로 dp[d] 를 갱신해준다
	std::cout << dp[d]; // 출력
}
