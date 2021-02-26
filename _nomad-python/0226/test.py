import requests
from bs4 import BeautifulSoup

result = requests.get("https://kr.indeed.com/%EC%B7%A8%EC%97%85?as_and=python&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=50&sort=&psf=advsrch&from=advancedsearch")
soup = BeautifulSoup(result.text, "html.parser")

print(soup.title) #Github page title
pagination = soup.find("div", {"class": "pagination"})
#div라는 키워드를 포함하고, class가 pagination인 요소 검색

links = pagination.find_all("a")
#결과값이 담긴 list

pages = []
for link in links[:-1]: #맨 끝의 값 제외
    pages.append(int(link.find("span").string))
#span이 포함된 page 내의 값들에 들어있는 string을 int로 변환하여 리스트에 저장
print(pages[-1])
#맨 마지막 원소만 출력

max_page = pages[-1]
