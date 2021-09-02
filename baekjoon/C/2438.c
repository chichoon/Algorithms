#include <stdio.h>

int	main(void)
{
	int	n;
	int	i;
	int	j;

	i = -1;
	scanf("%d", &n);
	while (++i < n)
	{
		j = -1;
		while (++j < i + 1)
			printf("*");
		printf("\n");
	}
}
