#include <stdio.h>

int	main(void)
{
	int	modulo[42];
	int	index;
	int	n;
	int	count;

	count = 0;
	index = -1;
	while (++index < 42)
		modulo[index] = 0;
	index = -1;
	while (++index < 10)
	{
		scanf("%d", &n);
		modulo[n % 42]++;
	}
	index = -1;
	while (++index < 42)
		if (modulo[index] > 0)
			count++;
	printf("%d", count);
}
