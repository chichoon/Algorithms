import requests
from bs4 import BeautifulSoup

result = requests.get("https://kr.indeed.com/%EC%B7%A8%EC%97%85?as_and=python&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=50&sort=&psf=advsrch&from=advancedsearch")
soup = BeautifulSoup(result.text, "html.parser")

print(soup.title) #Github page title
pagination = soup.find("div", {"class": "pagination"})

pages = pagination.find_all("a")
#결과값이 담긴 list

spans = []
for page in pages:
    spans.append(page.find("span"))
#span이 포함된 page 내의 값들을 spans 리스트에 넣어줌

del spans[-1]
#맨 끝의 원소 삭제
print(spans)