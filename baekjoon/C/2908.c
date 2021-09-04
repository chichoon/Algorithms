#include <stdio.h>

int	reverse(int n)
{
	int	reversed;

	reversed = ((n % 10) * 100);
	n /= 10;
	reversed += (n % 10) * 10;
	n /= 10;
	reversed += (n % 10) * 1;
	return (reversed);
}

int	main(void)
{
	int	a;
	int	b;

	scanf("%d %d", &a, &b);
	if (reverse(a) > reverse(b))
		printf("%d\n", reverse(a));
	else
		printf("%d\n", reverse(b));
}
