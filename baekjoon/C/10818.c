#include <stdio.h>

int	main(void)
{
	int	n;
	int	max;
	int	min;
	int	index;
	int	tmp;

	min = 2147483647;
	max = -2147483648;
	index = -1;
	scanf("%d", &n);
	while (++index < n)
	{
		scanf("%d", &tmp);
		if (tmp < min)
			min = tmp;
		if (tmp > max)
			max = tmp;
	}
	printf("%d %d", min, max);
}
