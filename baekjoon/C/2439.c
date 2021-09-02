#include <stdio.h>

int	main(void)
{
	int	n;
	int	i;
	int	j;
	int	k;

	i = -1;
	scanf("%d", &n);
	while (++i < n)
	{
		j = -1;
		k = -1;
		while (++k + 1 < n - i)
			printf(" ");
		while (++j < i + 1)
			printf("*");
		printf("\n");
	}
}
