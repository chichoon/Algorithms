#include <stdio.h>

int	main(void)
{
	float	a;
	float	b;

	scanf("%f %f", &a, &b);
	printf("%.9lf", (double) a / (double) b);
}
