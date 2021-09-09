#include <stdio.h>

int	get_length(int n)
{
	int	i;

	i = 0;
	while (n)
	{
		n /= 10;
		i++;
	}
	return (i);
}

int	get_generator(int n, int length)
{
	int	start;
	int	backup;
	int	gen;
	int	i;

	start = n - (9 * length);
	while (start <= n)
	{
		i = -1;
		gen = start;
		backup = start;
		while (++i < length)
		{
			gen += backup % 10;
			backup /= 10;
		}
		if (gen == n)
			return (start);
		start++;
	}
	return (0);
}

int	main(void)
{
	int	n;
	int	length;
	int	start;
	int	i;

	scanf("%d", &n);
	length = get_length(n);
	if (length == 1)
	{
		if (n % 2 == 0)
			printf("%d", n / 2);
		else
			printf("0");
	}
	else
		printf("%d", get_generator(n, length));
}
