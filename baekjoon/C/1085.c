#include <stdio.h>

int	main(void)
{
	int	arr[4];
	int	w;
	int	h;
	int	index;
	int	min;

	index = -1;
	min = 2147483647;
	scanf("%d %d %d %d", &arr[0], &arr[1], &w, &h);
	arr[2] = w - arr[0];
	arr[3] = h - arr[1];
	while (++index < 4)
		if (arr[index] < min)
			min = arr[index];
	printf("%d", min);
}
