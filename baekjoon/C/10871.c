#include <stdio.h>
#include <stdlib.h>

int	main(void)
{
	int	n;
	int	x;
	int	index;
	int	*arr;

	scanf("%d %d", &n, &x);
	arr = (int *)malloc(sizeof(int) * n);
	index = -1;
	while (++index < n)
		scanf("%d", arr + index);
	index = -1;
	while (++index + 1 < n)
		if (arr[index] < x)
			printf("%d ", arr[index]);
	if (arr[index] < x)
		printf("%d", arr[index]);
	free(arr);
}
