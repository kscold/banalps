"use client";

import * as styles from "./HeroSection.css";

interface TextContentRendererProps {
  currentTextIndex: number;
  scrollProgress?: number;
}

export function TextContentRenderer({
  currentTextIndex,
  scrollProgress = 0,
}: TextContentRendererProps) {
  console.log(
    `[TextContentRenderer] 현재 텍스트 인덱스: ${currentTextIndex}, 스크롤 진행율: ${scrollProgress}`
  );

  // 각 텍스트의 페이드 효과를 위한 opacity 계산 (KB 스타일)
  const getTextOpacity = (textIndex: number) => {
    // 스크롤 진행에 따라 0~5 범위로 변환 (5개 텍스트)
    const scrollPosition = scrollProgress * 5;

    // 각 텍스트가 보이는 구간 설정
    const startFadeIn = textIndex - 0.3;
    const fullVisible = textIndex;
    const startFadeOut = textIndex + 0.3;
    const fullyHidden = textIndex + 0.6;

    if (scrollPosition < startFadeIn) return 0;
    if (scrollPosition >= startFadeIn && scrollPosition < fullVisible) {
      return (scrollPosition - startFadeIn) / 0.3;
    }
    if (scrollPosition >= fullVisible && scrollPosition <= startFadeOut) {
      return 1;
    }
    if (scrollPosition > startFadeOut && scrollPosition < fullyHidden) {
      return 1 - (scrollPosition - startFadeOut) / 0.3;
    }
    return 0;
  };

  // 텍스트 Y 위치 계산 (스크롤에 따라 부드럽게 이동)
  const getTextTransform = (textIndex: number) => {
    const opacity = getTextOpacity(textIndex);
    // 텍스트가 나타날 때는 아래에서 위로, 사라질 때는 위로 올라감
    if (opacity === 0) return 30;
    if (opacity === 1) return 0;
    return (1 - opacity) * 30;
  };

  const textContents = [
    {
      key: "text-0",
      content: (
        <>
          어느 밤, 침대에 기대앉아 아이들에게
          <br />
          그림책을 읽어 주고 있었습니다.
          <br />
          그리고 책장 한 귀퉁이에서 마주한 문장.
        </>
      ),
    },
    {
      key: "text-1",
      content: (
        <>
          <b>&ldquo;나는 바람 부는 날도 좋아요.&rdquo;</b>
          <br />참 듣기 좋은 말이었습니다.
        </>
      ),
    },
    {
      key: "text-2",
      content: (
        <>
          힘든 순간이 있어도 괜찮아질 거라는
          <br />
          위로를 건네는 말 같았습니다.
        </>
      ),
    },
    {
      key: "text-3",
      content: (
        <>
          그리고 문득, 수술이 잘되어서 고맙다고 찾아오시는
          <br />
          분들의 그 말이 떠올랐습니다.
        </>
      ),
    },
    {
      key: "text-4",
      content: (
        <>
          <b>&ldquo;이제 바람 부는 날도 좋아요.&rdquo;</b>
          <br />이 말은 언제든 들어도 기분이 좋습니다.
        </>
      ),
    },
  ];

  // 모든 텍스트를 렌더링하되 opacity로 제어 (KB 방식)
  return (
    <div className={styles.textContent}>
      {textContents.map((text, index) => {
        const opacity = getTextOpacity(index);
        const translateY = getTextTransform(index);

        return (
          <div
            key={text.key}
            className={styles.textBlock}
            style={{
              position: "absolute",
              opacity: opacity,
              transform: `translateY(${translateY}px)`,
              transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
              pointerEvents: opacity > 0 ? "auto" : "none",
            }}
          >
            <p className={styles.storyText}>{text.content}</p>
          </div>
        );
      })}
    </div>
  );
}
