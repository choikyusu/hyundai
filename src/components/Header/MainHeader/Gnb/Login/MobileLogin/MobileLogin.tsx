import { SelectButton } from '@/src/components/common/SelectBox/SelectBox';
import { languageList } from '@/src/datas/language.data';
import { Styled } from '../Login';

interface MobileLoginProps {
  language: string;
  openType: '' | PCSideMenuType;
  onClickButton: (type: PCSideMenuType) => void;
}

export const MobileLogin = ({
  language,
  openType,
  onClickButton,
}: MobileLoginProps) => {
  return (
    <>
      <Styled.ItemUtil>
        <Styled.MobileLoginButton href="/login" title="개인 로그인">
          개인 로그인
        </Styled.MobileLoginButton>
      </Styled.ItemUtil>
      <Styled.ItemUtil>
        <Styled.MobileLoginButton href="/login" title="법인 로그인">
          법인 로그인
        </Styled.MobileLoginButton>
      </Styled.ItemUtil>
      <Styled.ItemUtil>
        <SelectButton list={languageList} isOpen={openType === 'Language'}>
          <Styled.SelectButton onClick={() => onClickButton('Language')}>
            {language}
          </Styled.SelectButton>
        </SelectButton>
      </Styled.ItemUtil>
    </>
  );
};
