import csv

def save_to_file(jobs):
    f = open("jobs.csv", mode="w")
    #w = write, 쓰기 전용
    #r = read, 읽기 전용
    writer = csv.writer(f)
    #csv.writer 함수에 값을 쓸 파일을 불러와 변수로 설정
    writer.writerow(["title", "company", "location", "link"])
    #comma로 값을 구분해서 각 열에 넣어줌
    return