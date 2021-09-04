#include <stdio.h>

int	main(void)
{
	char	str[101];
	int		alphabet[26];
	int		index;

	index = -1;
	while (++index < 101)
		str[index] = 0;
	index = -1;
	while (++index < 26)
		alphabet[index] = -1;
	scanf("%s", str);
	index = -1;
	while (str[++index])
		if (alphabet[str[index] - 'a'] == -1)
			alphabet[str[index] - 'a'] = index;
	index = -1;
	while (++index < 25)
		printf("%d ", alphabet[index]);
	printf("%d", alphabet[25]);
}
