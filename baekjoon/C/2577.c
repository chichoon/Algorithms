#include <stdio.h>

int	print_arr(int num[10])
{
	int	index;

	index = -1;
	while (++index < 10)
		printf("%d\n", num[index]);
	return (0);
}

int	main(void)
{
	int	mul;
	int	n;
	int	index;
	int	num[10];

	index = -1;
	mul = 1;
	while (++index < 10)
		num[index] = 0;
	index = -1;
	while (++index < 3)
	{
		scanf("%d", &n);
		mul *= n;
	}
	while (mul > 0)
	{
		num[mul % 10]++;
		mul /= 10;
	}
	return (print_arr(num));
}
