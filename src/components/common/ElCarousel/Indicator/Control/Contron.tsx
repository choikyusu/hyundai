import { styled } from 'styled-components';
import { MdPlayCircle, MdPauseCircle } from 'react-icons/md';

interface ControlProps {
  onClickPlay: () => void;
  isPlay: boolean;
  showControl: boolean;
}

export const Control = ({ onClickPlay, isPlay, showControl }: ControlProps) => {
  if (!showControl) return null;
  return (
    <Styled.ControlWrap onClick={onClickPlay}>
      {isPlay ? <MdPauseCircle /> : <MdPlayCircle />}
    </Styled.ControlWrap>
  );
};

const Styled = {
  ControlWrap: styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 12px 4px;
    cursor: pointer;
    margin-right: 4px;

    svg {
      width: 18px;
      height: 18px;
    }
  `,
  Span: styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  `,
};
