#include <stdio.h>

int	main(void)
{
	unsigned long long	n;
	unsigned long long	end;
	int					i;

	i = 1;
	end = 2;
	scanf("%llu", &n);
	if (n == 1)
		printf("1");
	else
	{
		while (1)
		{
			end += (i * 6);
			if (n < end)
				break ;
			i++;
		}
		printf("%d", i + 1);
	}
}
