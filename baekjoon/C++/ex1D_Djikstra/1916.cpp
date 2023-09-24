#include <iostream>
#include <vector>
#include <queue>
#include <cstring>

#define INF 100000000

int n, m;
std::vector<std::pair<int, int> > vec[1001];
int dp[1001];

void djikstra(int startPos) {
	dp[startPos] = 0; // 시작 지점은 비용을 0으로 초기화
	std::priority_queue<std::pair<int, int>, std::vector<std::pair<int,int> >, std::greater<std::pair<int, int> > > p_que;
	// 현재 노드 current 와 가까운 노드 순서대로 처리하기 위해 우선순위 큐 도입
	// 우선순위 큐는 큰 값이 앞으로 오므로
	// 비용을 음수로 저장하면 절대값이 작은 값이 앞으로 오기 때문에
	// 비용이 싼 순으로 저장할 수 있다
	// 따라서 pair에 들어가는 정보: first = 비용 (음수), second = 도시의 번호 (1 ~ N)

	p_que.push(std::make_pair(0, startPos)); // 첫 번째 노드 큐에 넣기
	while (!p_que.empty()) {
		int current_cost = p_que.top().first; // 거리가 가장 가까운 도시 가는 비용
		// 음수로 저장했으므로 음수로 빼내준다
		int current_city = p_que.top().second; // 거리가 가장 가까운 도시 번호
		p_que.pop();

		if (dp[current_city] < current_cost) continue;
		// 현재 도시 (current_city) 까지 진입하는 데 소요된 비용보다
		// 이전 도시에서 현재 도시까지 도달하는데 소요된 비용이 더 클 경우
		// 아래의 로직을 돌지 않고 스킵한다
		for (int i = 0; i < vec[current_city].size(); i++) {
			// vec 벡터에 저장해둔, current_city와 연결된 모든 도시들을 순회하기
			int next_city = vec[current_city][i].first;
			// current_city 와 연결된 다음 정점의 도시 번호
			int next_cost = vec[current_city][i].second + current_cost;
			// current_city 와 연결된 다음 정점의 방문 비용
			// = current_city까지 방문하는 데 드는 비용 + current_city부터 next_city까지 가는데 드는 비용
			if (next_cost < dp[next_city]) {
				// 만약 current_city 를 거쳐서 next_city를 가는 비용이 지금까지 구했던 next_city 가는 비용보다 싸다면
				dp[next_city] = next_cost;
				// dp 배열의 값을 해당 비용으로 교체해준다
				p_que.push(std::make_pair(next_cost, next_city));
				// 그리고 해당 도시부터 다른 도시로 가는 경우를 계산하기 위해 우선순위 큐에 넣는다
			}
		}
	}
}

int main(void) {
	int u, v, cost;
	int startPos, endPos;

	std::ios_base::sync_with_stdio(false);
	std::cin.tie(0);
	std::cout.tie(0);

	std::cin >> n >> m;
	for (int i = 0; i < m; i++) {
		std::cin >> u >> v >> cost;
		vec[u].push_back(std::make_pair(v, cost));
		// 벡터 Pair에 들어가는 정보: first = 도시 번호, second = 비용
	}
	for (int i = 0; i < 1001; i++) dp[i] = INF;

	std::cin >> startPos >> endPos;
	djikstra(startPos);
	std::cout << dp[endPos];
}
