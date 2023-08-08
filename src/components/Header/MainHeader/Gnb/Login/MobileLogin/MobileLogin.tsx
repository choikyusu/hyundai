import { SelectButton } from '@/src/components/common/SelectBox/SelectBox';
import { languageList } from '@/src/datas/language.data';
import { Styled } from '../Login';

interface MobileLoginProps {
  language: string;
  isOpen: boolean;
  onClickLanguage: () => void;
}

export const MobileLogin = ({
  language,
  isOpen,
  onClickLanguage,
}: MobileLoginProps) => {
  return (
    <>
      <Styled.ItemUtil>
        <Styled.MobileLoginButton href="/kr/ko/login" title="개인 로그인">
          개인 로그인
        </Styled.MobileLoginButton>
      </Styled.ItemUtil>
      <Styled.ItemUtil>
        <Styled.MobileLoginButton href="/kr/ko/login" title="개인 로그인">
          법인 로그인
        </Styled.MobileLoginButton>
      </Styled.ItemUtil>
      <Styled.ItemUtil>
        <SelectButton
          selectedItem={language}
          list={languageList}
          isOpen={isOpen}
          onClick={onClickLanguage}
        />
      </Styled.ItemUtil>
    </>
  );
};
