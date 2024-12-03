### 기능 및 컴포넌트

글 (post) , 댓글(Comment)

- 글 목록 보기
  PostList , PostListiems

- 글 보기 기능
  Post

- 댓글 보기 기능
  CommentList , CommentItem

- 글 작성 기능
  PostWrite

- 댓글 작성 기능
  CommentWrite

---

### 패키지

- react-router-dom
- styled-components

---

### 폴더 구성

src
├── component
│ ├── list
│ ├── PostListItems
│ └── PostList
│  
│  
│
├── page
│ ├── MainPage
│ ├── PostWrite
│ └── PostView
│
└── ui
├── Button
└── TextInput

---

### 역할 분담

| 멤버 | 남빈                 | 보부                    |
| ---- | -------------------- | ----------------------- |
| 역할 | UI , 페이지 , 리스트 | 페이지,리스트,오류 수정 |

---

### 최종 목표 화면

|      | 메인 화면                                                                                     | 글 보는 화면                                                                                     | 글 작성 화면                                                                                       |
| ---- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 화면 | ![메인 화면](https://github.com/user-attachments/assets/fb7c22ba-b4df-4aa0-a02f-a9ff4d341da1) | ![글 보는 화면](https://github.com/user-attachments/assets/4b2d1b1c-fe18-47dc-9ded-b02a8ca318c9) | ![글 작성 페이지](https://github.com/user-attachments/assets/48192588-10e6-40e7-8c2c-60468cc112cb) |

---

- Post의 컴포넌트 과정

<img src='./public/img/컴포넌트 과정.PNG'>
