# Side Project  중간 회고

## repository : https://github.com/choikyusu/hyundai

![image](https://github.com/choikyusu/hyundai/assets/93509152/644eee4d-b3a2-4242-92ef-99bf69eb134c)


# 본문에 앞서…

현대차 홈페이지를 클론코딩하기 위해서 시작한 이유는 다양한 측면에서 웹 개발 실력을 향상시키기 위함입니다.

- **다양한 반응형 웹 구성:** 현대차 홈페이지는 다양한 디바이스에서 최적화된 경험을 제공하기 위해 모바일, 태블릿, PC 등 다양한 화면 크기에 대응하는 반응형 웹을 구현하고 있습니다. 이는 사용자들이 어떤 디바이스를 사용하더라도 웹사이트를 효과적으로 이용할 수 있게 해줍니다.
- **많은 양의 메인페이지 element:** 현대차의 메인페이지는 다양한 정보와 기능을 포함하고 있습니다. 이를 클론코딩함으로써 다양한 UI/UX 요소들과 그들의 상호작용을 학습하고, 웹 페이지의 다양한 콘텐츠를 효과적으로 구성하는 방법을 습득할 수 있습니다.
- **반복되는 컴포넌트 존재:** 현대차 홈페이지에서는 일부 컴포넌트가 여러 페이지에서 반복적으로 사용됩니다. 이를 클론코딩하면서 컴포넌트 재사용성에 대한 이해를 높이고, 효율적인 개발 방법을 습득할 수 있습니다.
- **다양한 웹 기능 포함:** 현대차 홈페이지는 차량 정보, 이벤트 소식, 디자인 등 다양한 기능을 포함하고 있습니다. 클론코딩을 통해 이러한 다양한 웹 기능들을 구현하면서, 백엔드와 프론트엔드 간의 상호작용, 데이터 관리, 사용자 경험 향상에 필요한 논리와 기술을 익힐 수 있습니다.

이를 통해 현대차 홈페이지 클론코딩은 다양한 웹 개발 측면에서의 도전과 학습을 제공하여, 풍부한 경험과 실력 향상을 기대할 수 있습니다.

---

# 목표

- **다양한 웹 기능 직접 개발:** 프로젝트를 통해 다양한 웹 기능을 직접 개발하면서 백엔드와 프론트엔드에서의 실제 구현 경험을 쌓고, 웹 애플리케이션의 다양한 기능들을 체계적으로 이해할 수 있습니다.
- **개발 방법론 고민:** 프로젝트를 진행하면서 개발 방법론에 대한 고민을 통해 프로젝트 생명주기의 각 단계에서의 작업을 효과적으로 계획하고 관리하는 방법을 습득할 수 있습니다
- **반응형 웹 효율적 관리:** 반응형 웹 구현을 통해 다양한 화면 크기와 디바이스에 대응하는 방법을 연구하면서, 웹 페이지를 효율적으로 관리하는 방법과 유연한 레이아웃 전략을 고민하고 실제로 구현해보게 됩니다.
- **유지보수 용이한 코드 작성:** 프로젝트에서는 코드의 가독성과 모듈화를 고려하여 유지보수가 용이한 코드를 작성하는 데 중점을 둘 것입니다. 이를 통해 나중에 발생할 수 있는 문제에 대처하고 코드를 업데이트하는 경험을 쌓을 수 있습니다.

이러한 목표들은 프로젝트를 통해 웹 개발의 다양한 측면에서 높은 수준의 경험과 습득을 할 것 같습니다.

---

# 1. 개발 방식 정하기 : 하향식 개발

현대차 클론코딩 프로젝트에서는 `하향식 개발` 방식을 채택할 것입니다. 업무에서의 `상향식 개발`과는 다르게, 이미 구성된 웹페이지를 클론코딩하는 프로젝트 특성상 페이지부터 시작하여 세부적인 컴포넌트로 분해해가는 방식을 선택하였습니다.

## 1.1. 컴포넌트 클론 전략

```
1. 구현하고자하는 영역을 화면에서 확인
2. Dev tools에서 HTML을 확인
3. 돔트리형태로 Render 영역에 구현
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/ee5029d1-7906-4417-a9e5-ad16c6230f22/Untitled.png)

## 1.2. 컴포넌트 분리 전략

> 반복되는 부분 의미 있게 분리하기
> 

`1. 컴포넌트 클론 전략`에서 작성한 코드가 depth등이 있는 짧은 코드가 아니기 때문에 컴포넌트를 분리를 생각합니다. 

분리하는 기준은 `의미가 있는 반복되는 부분` 입니다. UX/UI부터 나오는 상향식 개발에서 사용되는 아토믹 디자인과는 다르게 반복되는 부분을 찾아서 분리하는 기준은 개발자의 감에 의존하는 부분이 큽니다. 그래서 최초에는 분리하지 않았던 부분을 추후에 분리해야하는 경우가 빈번합니다. 하지만 모든 페이지를 분석하고 개발하지 않기 때문에 이 부분은 감수합니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/508ce012-b810-45c8-9904-f29cba4b302e/Untitled.png)

> 컴포넌트의 복잡도 낮추기
> 

컴포넌트의 복잡도를 낮추는 기준은 해당 구조를 1초만에 이해할 수 있어야 합니다.  기준의 사유는 코드는 다른 개발자들과 공유되는 산출물입니다. 저만 이해할수 있는 코드가 아닌 **모두가 쉽게 유지보수 할 수 있도록 짜는게 목표**입니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/33b7d314-f2f9-4368-81bc-0f7e11338eea/Untitled.png)

Before 부분에서 after로 아래와 같은 사유로 변경 시킵니다. 

- 각 의미있는 영역끼리 묶어서 컴포넌트화 시키기
- 추후 재사용성 가능하도록 복잡도를 낮추기
- 로직 부분은 `Custom hook`에서 처리해서 MVVM 패턴을 유지.

View단과 로직을 분리하고 VIEW단에는 Render 부분에 최대한 컴포넌트 랜더링을 `삼항식` 등의 Logical 부분을 최대한 지양하려고 합니다.

## 1.3. Common components 전략

> 2곳 이상에서 사용될 시 Common 하게
> 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/dc0ddf2d-2cf6-4cc4-b06a-b03e72ad5266/Untitled.png)

하향식 개발을 진행할 때, 상향식 접근 방식인 atomic design의 엄격한 단계(Atoms → Molecules → Organisms)에 꼭 따르진 않고, 컴포넌트가 두 곳 이상에서 사용될 경우, 공통적으로 사용될 수 있는 부분은 Common 폴더로 이동시키고 분리하여 공유합니다. 이런 경우, 특정 호출에서만 작동하는 로직이 내부에 존재한다면, 이 부분을 외부에서 주입받을 수 있도록 설계하여, 특정 로직에 대한 결합도를 낮춥니다.

# 2. 기능 구현하기 : 오픈소스 내재화

React의 장점 중 하나는 다양한 오픈 소스 라이브러리가 공개되어 있다는 점입니다. 업무에서는 오픈 소스를 활용하는 것이 시간과 비용 측면에서 합리적일 수 있지만, 사이드 프로젝트에서는 직접 구현하는 것을 목표로 삼았습니다.

## 2.1 Carousel

### 2.1.1 기본 구조 구현

> 단순 슬라이드쇼를 넘어 회전목마를 구현
> 

현대차 홈페이지에서 많은 페이지에서 elCarousel이라는 오픈소스를 사용하고있는 것을 확인했습니다. Carosel은 먼저 아래같이 슬라이드 형태로 보여주지만 회전목마처럼 반복됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad2feaa3-c259-40fd-82e2-ab7a45ff8d99/Untitled.png)

Carousel의 특이점은 마지막 슬라이드가 중간에서 뷰잉 되고 있다면 첫번째 슬라이드가 오른쪽에 표시됩니다. 이렇게 다시 반복하게 됩니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/dcaceb3f-040b-43fe-8360-cc3d4ad1c290/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/8cea6d50-4647-4f83-9143-4bf98399525a/Untitled.png)

이러한 기본 틀에서 슬라이드 내부의 컨텐츠(Children) 부분을 언제든지 바뀔수 있기 때문에 Children을 `외부 주입` 방식으로 Carousel 컴포넌트를 아래와 같이 개발하였습니다.

외부 컴포넌트에서는 슬라이드에 들어갈 컴포넌트 array형태로 Children으로 주입시킵니다. 이렇게 하는 사유는 아래와 같습니다.

- 컴포넌트간 종속성 감소
- 개방폐쇄원칙에 부합

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/15a26b60-b97e-45e7-a6bd-460e29140dfe/Untitled.png)

외부에서 주입된 Children를 Wrapping하여 render를 해줍니다.

아래는, ElCarousel의 초반 구조입니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/ab665172-d441-46b7-8988-093f3e0d3bd0/Untitled.png)

외부에서 Children의 list을 넘겨주고 해당 Children을 하나씩 Wrapper Component로 묶어서 보여주는 방식입니다. 이렇게 하면 외부 주입으로 컨텐츠가 결정되기 때문에 컨텐츠 수정에 따라 Carousel을 수정할 필요가 없어집니다.

하지만 현재 구조는 컴포넌트 내부에 비지니스 로직과 View가 공존하기 때문에 custom hook으로 로직을 빼서 MVVM패턴을 유지시킵니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/6bdd1af0-5399-4bf4-aa7f-7d00a0315c68/Untitled.png)

childrenWithWrap부분은 컴포넌트 영역 부분이라 custom hook으로 빼지않고 유지하였습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/25ba8790-3756-4bb8-94b2-01e2d7a2ecdf/Untitled.png)

useCarousel은 위와 같은 구조로 코딩되어있습니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/ff1c3bde-9419-415f-8746-1b7b9b3e4ce8/Untitled.png)

저는 커스텀훅의 구조는 위와같은 방식을 선호합니다. custom hook도 기능에 따라서  특정 컴포넌트에서 사용하는 지역 custom hook과 전역 custom hook으로 쪼개고 지역 custom hook에서는 전역 custom hook을 call하는 방식입니다. 또한 outer function은 함수 표현식으로 inner function은 함수 선언식으로 작성합니다. 함수 선언식으로 작성시에는 호이스팅에 의해서  return문 이후에도 작성이 가능하여 가독성을 높여줄수있습니다.

### 2.1.2 확장된 구조 갖기

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/64800e63-1bbd-4571-95dd-d2a10f6f30ce/Untitled.png)

처음 분석했을때는 1슬라이드에 1개의 children을 넣어야했는데 모바일, 타블릿, PC에 따라서 하나의 슬라이드에 들어가는 children이 달라져야 했습니다.  이때부터는 해당 컴포넌트는 변경이 잦을수있는 컴포넌트라는것을 인지하고 확장에 유연한 구조를 갖도록 구성하였습니다.

외부에서는 똑같이 주입하고 옵션화 시켜 각 사용처에 맞게 설정할수있도록 Config를 추가하였습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/c17faf0d-9715-443d-9714-25dac79b485d/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/07a7d2f0-0cfd-4c7e-8a7c-707f82bd3dcc/Untitled.png)

그리고 Children으로 받은 컨텐츠로 쓰이는 리스트를 config에 맞게 재배열하는 작업을 거칩니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/0a188bb5-5c0c-4131-9bc5-356104ac5b1f/Untitled.png)

이부분은 Children을 config에 맞게 row,column 갯수에 맞게 재배열하는 코드입니다. 이때 화면에 보이는 Slide에 selected props를 주입시킵니다.

### 2.1.3 cloneElement

cloneElement는 React의 명시적인 부분을 해치기 때문에 잘 사용하진 않지만 children에 props를 주입하려고 가끔 사용합니다. React는 명시적 언어를 추구하기 때문에 명령적으로 써야하는 곳을 최대한 지양하고 있습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/2e2430c9-6e96-4096-a6b0-12a8f64ddcbb/Untitled.png)

모바일 모드에서는 슬라이드 1장에 1개의 컨텐츠가 보이는데 모바일이 아니면 1개의 슬라이드에 3개의 컨텐츠가 보입니다. 그러면서 1장으로 모든 컨텐츠가 보이기때문에 ● 이 사라집니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/613f4218-6f9f-4f57-bb6a-194fc22a50c4/Untitled.png)

### 2.1.4 useEffect 최소화

useEffect는 편하지만 그만큼 유지보수할때 디버깅을 힘들게 합니다. 따라서 저는 최대한 useEffect를 최소화 하려고 하고 있습니다. 그리고 커스텀 훅안에서는 최대한 1개의 useEffect만 사용하려고 하고 있습니다.

명시적 함수, 선언적 함수 형태를 이용하기도 하는데 선언적 함수는 내부 함수로 사용하고 명시적 함수는 외부로 반환되는 함수등에 사용합니다.

명시적 함수는 호이스팅에 의해서 return 함수 아래에 작성이 가능하기 때문에 return 함수 기준으로 구분하여 가독성을 높입니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/ff1c3bde-9419-415f-8746-1b7b9b3e4ce8/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/59c82c60-b6c4-4f0b-a448-1b17560f84e1/Untitled.png)

## 2.2 Kakao Map

### 2.2.1 Kakao Map 연동 개발

### 2.2.2 코드 분석을 위한 디버깅

웹프론트의 장점으로는 다양한 웹사이트를 직접 디버깅을 해볼수 있다는 것 입니다. 소스가 난독화 되어있어도 기본적인 부분을 알면 충분히 디버깅을 할 수 있고, 실제로 devtools를 많이 이용하는 편입니다.

초록색 영역에 마우스를 hover했을때 팝업이 뜨는 부분을 확인 하고싶은적이 있습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/0beca35b-803a-4dc8-a9a0-e1de5ae9d095/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/92d502ec-5a12-415c-a7fc-0d47df47109b/Untitled.png)

마우스를 직접 해당 element 근처로 마우스를 hover하면서 팝업이 뜨는 정확한 element 영역을 체크합니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/89e80505-6ff8-4038-9ea0-c84495f0b7da/Untitled.png)

그리고 이벤트 리스너에서 연관있어보이는 이벤트들을 삭제하면서 hover 시 팝업이 뜨는지 체크합니다. 그리고 특정 이벤트를 삭제했을때 hover가 동작 안한다면 해당 함수에 breakpoint를 걸어둡니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/7bd5bfea-5b11-428e-b126-6c3f794d2acf/Untitled.png)

아래처럼 breakpoint를 통해서 해당 함수부터 디버깅이 가능해집니다. 그리고 함수에 hover했을때 function의 위치정보를 알려줍니다. step in과 함수 위치정보등을 조합하여 찾고자하는 함수까지 타고 들어갑니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/a8e1ec54-a26b-46a4-80a7-e05815e72a3e/Untitled.png)

타고 들어가다보면 제가 원하는 정보가 있는 위치까지 도달할수 있습니다. 이걸바탕으로 어떻게 재조합할지 결정하게 됩니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/3aea300f-f1e5-4be2-a742-a8c0d24b7304/Untitled.png)

# 3. 실패작 코드 양성

사이드 프로젝트를 진행하면서 다양한 시행착으롤 경험하게 되고, 좀더 나은 코드를 위해서 고민해서 개발한 부분이 코드를 더욱더 스파게티화 시키기도 합니다. 이번 사이드 프로젝트에서 경험한 대표적인 실패 사례를 소개합니다.

## 3.1 builder pattern 적용 실패

카카오맵을 불러온뒤 좌표에 맞는 marker를 찍고, marker에 tooltip도 옵셔널하게 넣어야 했습니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/3ee4775f-48a4-4f92-87e7-c99233873199/Untitled.png)

그래서 builder pattern을 생각했고 호출하는 곳은 좀더 간략하고 이용하기 편하게 변경되었습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/4e6db1f3-656d-4d27-877e-7e077d95d800/Untitled.png)

하지만 실제 구현부는 아래와 같이 return { markerList, set…,set…., remove…, remove… } 형태를 유지하기 위해서 각 함수의 return을 전부 통일시키고 함수 선언식을 이용한 hoisting을 이용하였습니다. 이랬더니 각 함수사이에 return 타입에 대한 의존성은 강해지고 필요 이상으로 복잡해졌습니다. 좀더 나은 방법을 고민하지만 떠오르지않아 현코드를 유지시켰습니다. 하지만 코드가 마음에 안들기때문에 다양한 오픈소스등을 검색 적절한 방법을 찾는다면 리팩토리할 예정입니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/ddbbc259-4c66-4e79-9c06-51e82956c008/Untitled.png)

## 3.2 Styled component에 반응형 적용 실패

처음에 className대신에 Styled Component만 사용하기로 정했고, 현대자동차 홈페이지를 구현할때 로직과 컴포넌트에 집중하고 style을 최대한 그대로 사용하자로 정해서 Styled component와 현대자동차의 반응형 style이 만나다보니 아래와같이 style 코드길이가 엄청 길어져 버렸습니다.  styled component와 반응형 style을 좀 더 적절히 쓸수있는 방안을 생각해봤는데 크게 떠오르지 않았습니다. 그래서 이거는 숙제로 둔 상태입니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/80eec52f-1661-4a63-8afc-63a8cf5113cb/Untitled.png)

# 4. Solid

> 유지보수를 어떻게 하면 쉽게 할 수 있을까?
> 

제가 Solid 원칙이나 패턴등을 적용 시키려고 하는 이유는 `유지보수` 가 용이 하기 때문입니다. 

- 최대한 장시간 레거시화 막기
- 다른사람이 내 코드 봤을때 쉽게 이해하기
- 누구나 쉽게 따라 할 수 있게 하기

항상 유지보수를 어떻게 하면 용이하게 할 수 있을까? 에 대해서 고민 합니다. 그래서 OOP 언어에서 넘어온 저의 커리어등의 장점을 발휘하여 이러한 원칙들을 지키기 위해서 노력합니다. 

그러나 이러한 원칙을 너무 강조하여 시간과 코드양이 증가한다면, 오히려 트레이드 오프가 발생할 수 있습니다. 따라서 이것이 절대적인 정답은 아니라고 생각합니다. 유지보수를 쉽게 하기 위해서는 프로젝트의 특성과 상황에 맞게 적절한 접근 방식을 찾아야 합니다.

## 4.1 단일책임원칙

컴포넌트를 나는것부터 시작합니다. 각 컴포넌트는 최소한의 의미가 있는 부분까지 나누고 뷰단과 로직단을 분리를 합니다. 저에게 단일책임원칙을 지키는 이유는 유지보수측면입니다. 코드가 길어지면 가독성이 떨어지고 오류를 내기 쉬워집니다. 그리고 다른사람이 제 코드를 이해하는데 어려움이 생깁니다. 최대한 단순하고 쉽고 이해기 편하게 코드를 짜려고합니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/f3468e97-1ead-46b0-b0b2-cbee6afb4d02/Untitled.png)

그래서 뷰단 안에서 삼항식을 지양합니다. 삼항식을 최대한 외부로 뺍니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/f2b4fd69-c334-480a-a549-85e14f370c29/Untitled.png)

## 4.2 개방폐쇄원칙

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/8cea6d50-4647-4f83-9143-4bf98399525a/Untitled.png)

하나의 slide에 하나의 컨텐츠를 보여줄때는 1차원 list형태로 props로 주입 해주면됩니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/8652151d-f610-4a2b-a017-40fbfbc21ab5/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/64800e63-1bbd-4571-95dd-d2a10f6f30ce/Untitled.png)

하지만 하나의 slide에서 x개의 children이 동적으로 보여야 한다면 2차원 array로 전달해줘야하는데 이부분인 외부에서 2차원 array로 변환코드를 넣어야하는데 carousel을 사용하는 컴포넌트는 변환하는 코드가 들어가야합니다. 혹시라도 변환코드가 변경되어야하면 수정해줘야합니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/1adb3a8d-f166-45c4-8d21-b7d17c805aff/Untitled.png)

이러한 변환 로직을 Carousel내로 이동시키고 부모 컴포넌트에서는 기존과 동일하게 리스트 형태로 넘겨주고 config에 slide 한장에 보여야하는 갯수만 기입합니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/8652151d-f610-4a2b-a017-40fbfbc21ab5/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/7ab49273-1862-41b7-af6f-76395caf864e/Untitled.png)

위의 코드처럼 변환로직의 역할을 Carousel이 담당하게 하고 config등으로 설정할수 있도록하여 부모컴포넌트의 변경을 최소화 합니다.

### 4.3 리스코브치환원칙

functional react에서는 해당사항이 없어 크게 상관없어 Composition 위주로 사용합니다.

### 4.4 인터페이스 분리 원칙

컴포넌트를 합성하면 결국 props에 대해서 의존하게 됩니다. 이때 Props가 많아지면 결합도가 높아지고 코드 가독성이 떨어져 유지보수하는데 어려움이 생깁니다. 그래서 컴포넌트를 너무 범용적으로 props로 많은것을 받아 처리하면 props로 인해서 분석하기가 힘들어집니다. 따라서 최대한 전용적으로 사용하려고 합니다.

props는 5개를 넘어가지 않도록 노력하고 있습니다.

 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/d1b7f152-e82c-473c-b782-9a8dfc6bace6/Untitled.png)

### 4.5 의존성 역전 원칙

react에서 의존성 역전 원칙의 대표적인것이 children이라고 생각합니다. children으로 인해서 부모 component와 자식 component간의 느슨한 결합을 만들어줍니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/4fa9bb94-73c4-45a7-9a6f-28cc2c4096dc/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/0655f153-16aa-48d9-9987-cbed5305d13f/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/f6d794f5-420f-4655-9cc3-7b74b0d50d1b/Untitled.png)

## 5. 기타 적용사항들

## 5.1 styled component vs className

항상 적절하게 사용해야하고 프로젝트 특성마다 사용방식이 다르다고 생각합니다. 하지만 하나의 프로젝트안에서는 styled component나 className 둘 중 하나만 사용하려고 합니다. 둘 다 사용했을 시 적용되는 스타일 관리가 어려워지고 오히려 가독성이 떨어집니다. 그래서 최대한 하나로 통일하려고 하고 있습니다. 이번 프로젝트에서는 제가 모든걸 개발하고 스타일도 관리해야하기때문에 styled component를 사용했습니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/226fa8a5-f872-423c-b189-895db407791a/Untitled.png)

만약에 퍼블리셔가 존재하고 css를 퍼블리셔가 관리한다면 퍼블리셔 의견에 따라 className을 택했을 것 입니다. 

## 5.2 With Node.js custom server

Frontend 개발하다보면 API를 테스트 해야하는 경우가 발생하는데 mock으로 하는경우도 많지만 저는 backend부분은 nextjs의 custom server를 이용하기도 합니다.

아래와 같이 기본구조를 가져갑니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/53f1ad13-3c05-4495-bb05-42ccc8e253c4/Untitled.png)

이렇게 했을때 장점은 BE와 FE를 한프로젝트 안에서 관리할 수 있어 개발편의성이 높습니다.

## 5.3 With Typescript

any type을 사용할때 개발에서는 편할 순 있지만 유지보수에서는 부적합합니다. 따라서 any 타입을 최소화 하려고 하고 있습니다. any타입 난발하는 프로젝트를 해봤는데 “1”이 어느순간 1이 되어있습니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/fe194010-4835-440d-998d-806e0cc2a490/Untitled.png)

100%가 아닌이유는 kakao map부분에서 any타입을 사용했기 때문입니다. 이부분은 interface로 kaka map object를 재정의하려고 합니다. 

## 5.4 응집성

기능을 갖은 컴포넌트를 만들때 컴포넌트를 쪼개다보면 공통 컴포넌트로 빼기는 애매한데 쪼개야하는 경우가 많습니다. 이럴때는 결국 컴포넌트 그룹으로 묶어서 응집성을 높이는 방식을 택합니다. 이러다 다른곳에서도 사용하는 컴포넌트가 생기면 common component로 이동시킵니다. custom hook도 전역/지역에서 사용하는 hook을 구분하여 관리합니다. 이렇게 하는 이유는 유지보수측면에서도 에러가 발생했을때 보아야하는 코드들이 묶여있어 쉽게 찾을수 있기 때문입니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/e4aacde1-d512-4324-97b2-381c2ba0049e/Untitled.png)

## 5.5 Uncontrolled component

React를 사용하면서 대부분 랜더링 관련된 값은 state를 사용합니다. 하지만 style등을 변경하는 단순 작업등에 state등으로 관리하게되면 리랜더링이 더 빈번하게 발생할수있어 useRef를 이용하여 갱신 시킵니다. 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/edaf3b5f-309f-4350-b825-c1b44a2e965e/04dd2159-1fe4-46ac-ba7b-90adfd517f0c/Untitled.png)

---

## 마치며…

아직 현대차 홈페이지가 갖고있는 기능의 10%도 완성을 못했지만 조금씩 구조를 잡아가고 기능 개발 할때마다 재미와 보람을 느끼고 있습니다. 또한 일정등을 신경쓰지않고 유지보수 관점에서 개발하다보니 많은 것을 고려해보고 적용해볼수있는 소중한 시간이였습니다. 그리고 유지보수를 용이하게 하는 방법에 대해 고민한 코드들을 다시 업무 코드에 적용하고 팀원들에게 전파 교육을 하면서 모두 다같이 고민을 해보는 시간도 갖었습니다. 또한 웹프론트개발 기간이 저의 경력에서 짧은 단점이 있지만 다양한 언어로 개발하면서 배웠던 개념과 원칙등을 Functional React에도 적용하여 저의 장점을 십분 활용하였습니다.
