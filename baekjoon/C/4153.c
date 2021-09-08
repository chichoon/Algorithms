#include <stdio.h>

int	main(void)
{
	int	arr[3];

	scanf("%d %d %d", &arr[0], &arr[1], &arr[2]);
	while (arr[0] && arr[1] && arr[2])
	{
		if (arr[0] * arr[0] + arr[1] * arr[1] == arr[2] * arr[2]
			|| arr[0] * arr[0] + arr[2] * arr[2] == arr[1] * arr[1]
			|| arr[1] * arr[1] + arr[2] * arr[2] == arr[0] * arr[0])
			printf("right\n");
		else
			printf("wrong\n");
		scanf("%d %d %d", &arr[0], &arr[1], &arr[2]);
	}
}
