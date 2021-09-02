#include <stdio.h>

int	main(void)
{
	int	n;
	int	count;
	int	num[2];
	int	tmp;

	scanf("%d", &n);
	count = 1;
	num[0] = n / 10;
	num[1] = n % 10;
	while (1)
	{
		tmp = num[0] + num[1];
		num[0] = num[1];
		num[1] = tmp % 10;
		if (num[0] * 10 + num[1] == n)
			break ;
		count++;
	}
	printf("%d", count);
}
