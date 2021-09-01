#include <stdio.h>

int	main(void)
{
	float	a;
	float	b;

	scanf("%f ", &a);
	scanf("%f", &b);
	printf("%.9lf", (double) a / (double) b);
}
