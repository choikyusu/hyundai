import { useViewportSize } from '@/src/hooks/useViewportSize';
import { MobileLogin } from '../MobileLogin/MobileLogin';
import { WideLogin } from '../WideLogin/WideLogin';

interface LoginProps {
  language: string;
  openType: '' | PCSideMenuType;
  onClickButton: (type: PCSideMenuType) => void;
}

export const Login = ({ language, openType, onClickButton }: LoginProps) => {
  const { isMobile } = useViewportSize();

  if (isMobile())
    return (
      <MobileLogin
        language={language}
        openType={openType}
        onClickButton={onClickButton}
      />
    );
  return (
    <WideLogin
      language={language}
      openType={openType}
      onClickButton={onClickButton}
    />
  );
};
