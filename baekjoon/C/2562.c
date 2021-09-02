#include <stdio.h>

int	main(void)
{
	int	index;
	int	max_index;
	int	n;
	int	max;

	index = -1;
	max = -1;
	max_index = 0;
	while (++index < 9)
	{
		scanf("%d", &n);
		if (max < n)
		{
			max = n;
			max_index = index;
		}
	}
	printf("%d\n%d", max, max_index + 1);
}
