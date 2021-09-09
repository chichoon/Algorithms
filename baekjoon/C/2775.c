#include <stdio.h>

int	recur_cal(int k, int n)
{
	int	i;
	int	sum;

	i = 0;
	sum = 0;
	if (k == 0)
		return (n);
	while (++i <= n)
		sum += recur_cal(k - 1, i);
	return (sum);
}

int	main(void)
{
	int	k;
	int	n;
	int	t;
	int	index;

	index = -1;
	scanf("%d", &t);
	while (++index < t)
	{
		scanf("%d", &k);
		scanf("%d", &n);
		printf("%d\n", recur_cal(k, n));
	}
}
