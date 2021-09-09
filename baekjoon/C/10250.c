#include <stdio.h>

int	main(void)
{
	int	n;
	int	arr[3];
	int	index;
	int	room;

	scanf("%d", &n);
	index = -1;
	while (++index < n)
	{
		scanf("%d %d %d", &arr[0], &arr[1], &arr[2]);
		if (arr[2] % arr[0] == 0)
			room = arr[0] * 100 + arr[2] / arr[0];
		else
			room = (arr[2] % arr[0]) * 100 + arr[2] / arr[0] + 1;
		printf("%d\n", room);
	}
}
