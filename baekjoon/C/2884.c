#include <stdio.h>

int	main(void)
{
	int	h;
	int	m;

	scanf("%d %d", &h, &m);
	if (m - 45 < 0)
	{
		m = 60 + m - 45;
		h--;
	}
	else
		m -= 45;
	if (h < 0)
		h = 24 + h;
	printf("%d %d", h, m);
}
