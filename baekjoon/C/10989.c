#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int n;
	int *arr;
	int tmp;

	scanf("%d\n", &n);
	arr = (int *)malloc(sizeof(int) * 10001);
	for (int i = 0; i < n; i++) {
		scanf("%d\n", &tmp);
		arr[tmp]++;
	}
	for (int i = 0; i < 10001; i++) {
		while (arr[i]-- > 0) printf("%d\n", i);
	}
}
