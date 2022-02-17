#include <stdio.h>

int main(void) {
	int e, s, m;
	scanf("%d %d %d", &e, &s, &m);
	int num = 1;
	while (1) {
		if (!((num - e) % 15) && !((num - s) % 28) && !((num - m) % 19)) {
			printf("%d", num);
			break;
		}
		num++;
	}
}
